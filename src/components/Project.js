import React from 'react';
import { MdOutlineInventory, MdOutlineLocalMall } from "react-icons/md";
import { GoStopwatch } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";

const Project = () => {
  const featuredProjects = [
    {
      title: 'Q',
      image: '/images/Q.png',
      stack: 'Flutter, Firebase, Cloud Firestore, Provider, Google Authentication',
      href: 'https://github.com/PratyushRajMishra/Q_Social_Media',
    },
    {
      title: 'Chat Application',
      image: '/images/ChatApp.jpg',
      stack: 'Flutter, Firebase, Cloud Firestore, Git',
      href: 'https://github.com/PratyushRajMishra/ChatON_Personel_ChatApp_using_Flutter',
    },
    {
      title: 'Music Player',
      image: '/images/MusicPlayer.png',
      stack: 'Flutter, Firebase, Cloud Firestore, GetX',
      href: 'https://github.com/PratyushRajMishra/GrooveX_Music_Player_using_flutter',
    },
    {
      title: 'Listify ToDo App',
      image: '/images/listify.png',
      stack: 'Flutter, Firebase, Cloud Firestore, GetX, SharedPreferences',
      href: 'https://github.com/PratyushRajMishra/Listify_TODO_App_using_Flutter',
    },
  ];

  const moreProjects = [
    {
      title: 'E-commerce App',
      icon: <MdOutlineLocalMall />,
      stack: 'Flutter, Firebase Auth, GetX, Firebase',
      href: 'https://github.com/PratyushRajMishra/Flutter_Ecommerce_app',
    },
    {
      title: 'Stopwatch',
      icon: <GoStopwatch />,
      stack: 'Flutter, GetX',
      href: 'https://github.com/PratyushRajMishra/CodeAlpha_Stopwatch',
    },
    {
      title: 'NexusNews',
      icon: <IoNewspaperOutline />,
      stack: 'React.js, News API, Bootstrap, CSS',
      href: 'https://github.com/PratyushRajMishra/NexusNews_using_React.js',
    },
    {
      title: 'TextRefine',
      icon: <LuClipboardEdit />,
      stack: 'React.js, Bootstrap, React Router, CSS',
      href: 'https://github.com/PratyushRajMishra/TextRefine_using_React.js',
    },
    {
      title: 'Inventory Management System',
      icon: <MdOutlineInventory />,
      stack: 'Java, Java Swing, JDBC, MySQL',
      href: 'https://github.com/PratyushRajMishra/inventory_management_system',
    },
  ];

  return (
    <section id="project" className="section projects-section">
      <div className="container">
        <div className="section-title-wrap">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title light">Projects</h2>
        </div>

        <h3 className="subheading light">Featured Flutter Projects</h3>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <a className="project-card" key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="project-card-body">
                <h4>{project.title}</h4>
                <p>{project.stack}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="glass-panel more-projects">
          <h3 className="subheading light">More Projects</h3>
          <div className="project-list">
            {moreProjects.map((project) => (
              <a key={project.title} href={project.href} className="project-list-item" target="_blank" rel="noopener noreferrer">
                <span className="project-list-icon">{project.icon}</span>
                <span className="project-list-content">
                  <strong>{project.title}</strong>
                  <small>{project.stack}</small>
                </span>
                <IoIosArrowForward />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
