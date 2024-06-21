import React from 'react';
import { MdOutlineInventory, MdOutlineLocalMall } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { GoStopwatch } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";

const Project = () => {
    const cardStyle = {
        textDecoration: 'none', // Set text decoration to none
    };

    return (
        <div id="project" style={{backgroundColor: '#000000d6', paddingBottom: '1rem',}}>
             <div className='container' style={{ marginTop: '5rem' }}>
             <div style={{ height: '2rem' }}></div>
                <h1 className='text-center display-2 mb-4' style={{ fontFamily: 'serif', color: 'white'}}>Projects</h1>

                <h2 className="card-title mb-2" style={{ color: 'white' }}>Flutter Projects</h2>
            </div>
            <div className='container my-3'>
                <div className='row'>
                <div className='col-md-3 mb-4'>
                        <a href="https://github.com/PratyushRajMishra/Q_Social_Media" style={cardStyle} target="_blank" rel="noopener noreferrer">
                            <div className="card h-100">
                                <img src="/images/Q.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Q</strong></h5>
                                    <p className="card-text" style={{ fontFamily: 'monospace', fontSize: '13px' }}>Flutter, Firebase, Cloud Firestore, Provider, Google Authentication </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='col-md-3 mb-4'>
                        <a href="https://github.com/PratyushRajMishra/ChatON_Personel_ChatApp_using_Flutter" style={cardStyle} target="_blank" rel="noopener noreferrer">
                            <div className="card h-100">
                                <img src="/images/ChatApp.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Chat Application</strong></h5>
                                    <p className="card-text" style={{ fontFamily: 'monospace', fontSize: '13px' }}>Flutter, Firebase, Cloud Firestore, Git</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Repeat the following block for each additional card */}
                    <div className='col-md-3 mb-4'>
                        <a href="https://github.com/PratyushRajMishra/GrooveX_Music_Player_using_flutter" style={cardStyle} target="_blank" rel="noopener noreferrer">
                            <div className="card h-100">
                                <img src="/images/MusicPlayer.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Music Player</strong></h5>
                                    <p className="card-text" style={{ fontFamily: 'monospace', fontSize: '13px' }}>Flutter, Firebase, Cloud Firestore, GetX</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-3 mb-4'>
                        <a href="https://github.com/PratyushRajMishra/Listify_TODO_App_using_Flutter" style={cardStyle} target="_blank" rel="noopener noreferrer">
                            <div className="card h-100">
                                <img src="/images/listify.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Listify ToDo App</strong></h5>
                                    <p className="card-text" style={{ fontFamily: 'monospace', fontSize: '13px' }}>Flutter, Firebase, Cloud Firestore, GetX, SharedPrefrences</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div>



                    <div className="card text-white mt-3" style={{ backgroundColor: '#343a40' }}>
                        <div className="card-body my-2">
                            <h2 className="card-title mb-4" style={{ color: 'white' }}>More Projects</h2>
                            <div className="list-group" style={{ backgroundColor: '#343a40' }}>
                                
                                <a href="https://github.com/PratyushRajMishra/Flutter_Ecommerce_app" className="list-group-item list-group-item-action mb-3"
                                    style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex align-items-center">
                                        <div className="icon mx-1">
                                            <MdOutlineLocalMall style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
                                        </div>
                                        <div className="content ms-3">
                                            <h5 className="mb-0" style={{ color: 'whitesmoke', fontSize: '1.2rem' }}>E-commerce App</h5>
                                            <small className="text-body-light" style={{ fontFamily: 'monospace', fontSize: '13px', color: '#c5c1c1' }}>Flutter, Firebase Auth, GetX, Firebase</small>
                                        </div>
                                        <div className="arrow ms-auto">
                                            <IoIosArrowForward style={{ fontSize: '1.2rem', color: '#e1dcdc' }} />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/PratyushRajMishra/CodeAlpha_Stopwatch" className="list-group-item list-group-item-action mb-1"
                                    style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex align-items-center">
                                        <div className="icon mx-1">
                                            <GoStopwatch style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
                                        </div>
                                        <div className="content ms-3">
                                            <h5 className="mb-0" style={{ color: 'whitesmoke', fontSize: '1.2rem' }}>Stopwatch</h5>
                                            <small className="text-body-light" style={{ fontFamily: 'monospace', fontSize: '13px', color: '#c5c1c1' }}>Flutter, GetX</small>
                                        </div>
                                        <div className="arrow ms-auto">
                                            <IoIosArrowForward style={{ fontSize: '1.2rem', color: '#e1dcdc' }} />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/PratyushRajMishra/NexusNews_using_React.js" className="list-group-item list-group-item-action mb-3"
                                    style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex align-items-center">
                                        <div className="icon mx-1">
                                            <IoNewspaperOutline  style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
                                        </div>
                                        <div className="content ms-3">
                                            <h5 className="mb-0" style={{ color: 'whitesmoke', fontSize: '1.2rem' }}>NexusNews</h5>
                                            <small className="text-body-light" style={{ fontFamily: 'monospace', fontSize: '13px', color: '#c5c1c1' }}>React Js, News API, Bootstrap, CSS</small>
                                        </div>
                                        <div className="arrow ms-auto">
                                            <IoIosArrowForward style={{ fontSize: '1.2rem', color: '#e1dcdc' }} />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/PratyushRajMishra/TextRefine_using_React.js" className="list-group-item list-group-item-action mb-3"
                                    style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex align-items-center">
                                        <div className="icon mx-1">
                                            <LuClipboardEdit style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
                                        </div>
                                        <div className="content ms-3">
                                            <h5 className="mb-0" style={{ color: 'whitesmoke', fontSize: '1.2rem' }}>TextRefine</h5>
                                            <small className="text-body-light" style={{ fontFamily: 'monospace', fontSize: '13px', color: '#c5c1c1' }}>React Js, Bootstrap, React Router, CSS</small>
                                        </div>
                                        <div className="arrow ms-auto">
                                            <IoIosArrowForward style={{ fontSize: '1.2rem', color: '#e1dcdc' }} />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/PratyushRajMishra/inventory_management_system" className="list-group-item list-group-item-action mb-3"
                                    style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} target="_blank" rel="noopener noreferrer">
                                    <div className="d-flex align-items-center">
                                        <div className="icon mx-1">
                                            <MdOutlineInventory style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
                                        </div>
                                        <div className="content ms-3">
                                            <h5 className="mb-0" style={{ color: 'whitesmoke', fontSize: '1.2rem' }}>Inventory Management System</h5>
                                            <small className="text-body-light" style={{ fontFamily: 'monospace', fontSize: '13px', color: '#c5c1c1' }}>Java, Java Swing, JDBC, MySQL</small>
                                        </div>
                                        <div className="arrow ms-auto">
                                            <IoIosArrowForward style={{ fontSize: '1.2rem', color: '#e1dcdc' }} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
