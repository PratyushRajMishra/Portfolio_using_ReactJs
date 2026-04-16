import React from 'react';

const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { title: 'Backend', items: ['Node.js', 'Firebase Auth'] },
  { title: 'Database', items: ['MySQL', 'MongoDB', 'Firebase'] },
  { title: 'Other', items: ['Flutter', 'Java Swing', 'Git'] },
];

function About() {
  const expertise = [
    {
      title: 'Frontend Developer',
      text:
        "I build polished, responsive interfaces in React.js with a strong focus on usability and detail. Projects like TextRefine and NewsReactapp reflect my approach to clean UI architecture and smooth user flows.",
    },
    {
      title: 'Backend Developer',
      text:
        'I design API-first backends with Node.js and build scalable service layers that keep applications fast and reliable. My work covers data modeling, integrations, and robust communication between frontend and backend.',
    },
    {
      title: 'Flutter Developer',
      text:
        'I develop cross-platform mobile experiences with Flutter, from social and chat apps to music and e-commerce products. I enjoy translating product ideas into smooth, performant apps across devices.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <p className="section-kicker">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="glass-panel about-intro">
          <p>
            I'm <strong>Pratyush Raj</strong>, a software developer passionate about building products that are practical, scalable, and enjoyable to
            use. With a strong foundation in computer science and hands-on experience across full-stack and Flutter projects, I love solving real-world
            problems through thoughtful engineering and design.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="glass-panel expertise-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <h3 className="subheading">Skills Snapshot</h3>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="glass-panel skill-card" key={group.title}>
              <h4>{group.title}</h4>
              <div className="chip-wrap">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
