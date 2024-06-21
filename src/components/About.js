import React from 'react'

function About() {
  return (
    <div id="about">
    <div className='container'>
      <div className='container' style={{marginTop: '4rem'}}>
        <h1 className='text-center display-2' style={{ fontFamily: 'serif' }}>About</h1>
      </div>
      <p className='mx-1 my-3' style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.6, marginBottom: '20px', textAlign: 'justify' }}>
        Welcome to my portfolio! I'm <strong>Pratyush Raj</strong>, a dedicated software developer driven by a passion for crafting efficient
        and user-friendly applications. Armed with an 'B LEVEL' in IT from NIELIT, I bring a solid foundation in computer science
        principles and a wealth of experience from diverse projects. Whether collaborating with dynamic teams or tackling complex
        challenges, my commitment to innovation shines through. Explore my journey, skills, and projects, and let's connect to
        explore exciting opportunities in the ever-evolving realm of software development.
      </p>
      <div className="accordion accordion-flush"  id="accordionFlushExample">
        <div className="accordion-item" style={{backgroundColor: 'whitesmoke'}}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: 'whitesmoke'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>1. Frontend Developer</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">A passionate frontend developer with hands-on experience in crafting engaging and responsive user interfaces using
              React.js. My journey in frontend development has been marked by projects like textRefine and NewsReactapp, where I've leveraged the power of React
              to build dynamic and user-friendly applications. With a keen eye for design and a commitment to delivering seamless user experiences, I thrive on
              turning creative concepts into visually appealing and functional realities. Explore my portfolio to witness the fusion of code and creativity, and
              let's collaborate to bring your frontend visions to life!</div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: 'whitesmoke'}}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: 'whitesmoke'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>2. Backend Developer</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">As a seasoned backend developer, I specialize in crafting robust and scalable solutions to power the functionality
              of web applications. Leveraging the versatility of Node.js, I have honed my skills in building efficient server-side architectures. My expertise lies
              in designing APIs, managing databases, and ensuring seamless communication between the frontend and backend components. With a strong foundation in
              computer science principles and a commitment to delivering high-performance systems, I am dedicated to optimizing and enhancing the backend
              infrastructure to meet the demands of modern web development. </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: 'whitesmoke'}}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: 'whitesmoke'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>3. Flutter Developer</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Embark on a journey through the world of Flutter development with me! As a passionate Flutter developer, I've
              translated creativity into reality by crafting dynamic and visually appealing mobile applications. From designing an interactive chat app that
              fosters seamless communication to developing a music player app that harmoniously blends functionality with an engaging user experience, and
              venturing into the complexities of e-commerce with a feature-rich app – each project has been a unique challenge that I've embraced with enthusiasm.
              My commitment to delivering polished, cross-platform solutions is rooted in the versatility and efficiency of Flutter. Join me in exploring the
              exciting possibilities and innovative solutions that Flutter brings to the realm of mobile app development.</div>
          </div>
        </div>
      </div>
      <h4 className='mt-4 mb-3'>What I know</h4>
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-dark">
            <div className="card-header">Frontend</div>
            <div className="card-body" style={{ height: 'auto' }}>
              <span className="badge badge-primary mb-2 border border-primary p-2">HTML</span>&nbsp;&nbsp;
              <span className="badge badge-secondary mb-2 border border-secondary p-2">CSS</span>&nbsp;&nbsp;
              <span className="badge badge-success mb-2 border border-success p-2">JavaScript</span>&nbsp;&nbsp;
              <span className="badge badge-danger mb-2 border border-danger p-2">React Js</span>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-dark">
            <div className="card-header">Backend</div>
            <div className="card-body" style={{ height: 'auto' }}>
              <span className="badge badge-primary mb-2 border border-primary p-2">Node Js</span>&nbsp;&nbsp;
              <span className="badge badge-secondary mb-2 border border-secondary p-2">Firebase Auth</span>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-dark">
            <div className="card-header">Database</div>
            <div className="card-body" style={{ height: 'auto' }}>
              <span className="badge badge-primary mb-2 border border-primary p-2">MySql</span>&nbsp;&nbsp;
              <span className="badge badge-secondary mb-2 border border-secondary p-2">MongoDB</span>&nbsp;&nbsp;
              <span className="badge badge-warning mb-2 border border-warning p-2">Firebase</span>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-dark">
            <div className="card-header">Other</div>
            <div className="card-body" style={{ height: 'auto' }}>
              <span className="badge badge-primary mb-2 border border-primary p-2">Flutter</span>&nbsp;&nbsp;
              <span className="badge badge-secondary mb-2 border border-secondary p-2">Java Swing</span>&nbsp;&nbsp;
              <span className="badge badge-info mb-2 border border-info p-2">GIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About
