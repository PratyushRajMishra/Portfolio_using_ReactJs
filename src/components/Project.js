import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const featured = [
  { n: '01', title: 'Q', type: 'Social platform', image: '/images/Q.png', stack: 'Flutter · Firebase · Provider · Google Auth', href: 'https://github.com/PratyushRajMishra/Q_Social_Media', tone: 'lime' },
  { n: '02', title: 'ChatON', type: 'Real-time messaging', image: '/images/ChatApp.jpg', stack: 'Flutter · Firestore · Firebase', href: 'https://github.com/PratyushRajMishra/ChatON_Personel_ChatApp_using_Flutter', tone: 'violet' },
  { n: '03', title: 'GrooveX', type: 'Music experience', image: '/images/MusicPlayer.png', stack: 'Flutter · GetX · Firebase', href: 'https://github.com/PratyushRajMishra/GrooveX_Music_Player_using_flutter', tone: 'orange' },
  { n: '04', title: 'Listify', type: 'Focus & productivity', image: '/images/listify.png', stack: 'Flutter · GetX · SharedPreferences', href: 'https://github.com/PratyushRajMishra/Listify_TODO_App_using_Flutter', tone: 'blue' },
];

const archive = [
  ['E-commerce App', 'Flutter · Firebase · GetX', 'https://github.com/PratyushRajMishra/Flutter_Ecommerce_app'],
  ['NexusNews', 'React · News API · Bootstrap', 'https://github.com/PratyushRajMishra/NexusNews_using_React.js'],
  ['TextRefine', 'React · Router · CSS', 'https://github.com/PratyushRajMishra/TextRefine_using_React.js'],
  ['Inventory System', 'Java · Swing · JDBC · MySQL', 'https://github.com/PratyushRajMishra/inventory_management_system'],
];

function Project() {
  return (
    <section id="project" className="section projects-section">
      <div className="container">
        <div className="section-heading project-heading" data-reveal>
          <p className="section-kicker"><span>04</span> Selected work</p>
          <h2>Products with a pulse.</h2>
          <p>Independent builds exploring social connection, communication, music, and everyday utility.</p>
        </div>
        <div className="project-stack">
          {featured.map((project) => (
            <a className={`project-case ${project.tone}`} key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" data-reveal>
              <div className="case-meta"><span>{project.n}</span><span>{project.type}</span></div>
              <div className="case-copy"><h3>{project.title}</h3><p>{project.stack}</p></div>
              <div className="case-image"><img src={project.image} alt={`${project.title} project preview`} /></div>
              <span className="case-arrow"><FiArrowUpRight /></span>
            </a>
          ))}
        </div>
        <div className="archive" data-reveal>
          <div className="archive-title"><span>More experiments</span><span>View source ↗</span></div>
          {archive.map(([title, stack, href], index) => (
            <a href={href} target="_blank" rel="noopener noreferrer" key={title}><span>0{index + 5}</span><strong>{title}</strong><small>{stack}</small><FiArrowUpRight /></a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
