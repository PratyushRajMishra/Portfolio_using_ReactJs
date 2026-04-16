import React, { useRef, useState } from "react";

function ContactForm() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate fields
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("All fields are required.*");
      return;
    }

    setSubmitting(true); // Set submitting state to true
    setError(""); // Reset error state

    formData.append("access_key", "00026ec1-40fd-4ebc-a9a9-51aa10424d46");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      formRef.current.reset(); // Reset the form
      setSubmitted(true); // Set the submitted state to true
    }

    setSubmitting(false); // Reset submitting state
  };

  return (
    <div>
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for your submission!</h3>
          <p>We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={onSubmit} ref={formRef}>
          {error && <div className="error-message">{error}</div>}
          <div className="form-row">
            <div>
              <input
                type="text"
                className="input-control"
                name="name"
                placeholder="Your Name"
                aria-label="Your name"
                disabled={submitting}
              />
            </div>
            <div>
              <input
                type="email"
                className="input-control"
                name="email"
                placeholder="Your Email"
                aria-label="Your email"
                disabled={submitting}
              />
            </div>
          </div>
          <div>
            <textarea
              className="input-control"
              name="message"
              placeholder="Message"
              rows="5"
              disabled={submitting}
            ></textarea>
          </div>
          <button type="submit" className="primary-cta" disabled={submitting}>
            {submitting ? "Submitting..." : "Drop Message!"}
          </button>
        </form>
      )}
    </div>
  );
} 

export default ContactForm;
