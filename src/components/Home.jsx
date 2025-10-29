import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    const [menuActive, isMenuActive] = useState(false)
    const [isTheme, setIsTheme] = useState(() => {
        const storedTheme = localStorage.getItem("lulu");
        return storedTheme ? JSON.parse(storedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem("lulu", JSON.stringify(isTheme));
    }, [isTheme]);

    const toggleTheme = () => {
        setIsTheme(prev => !prev);
    };

    const toggleMenu = () => {
        isMenuActive(!menuActive)
    }

    return (
        <div>
            <div className="navigation">
                <nav className={`nav-bar ${isTheme ? "active" : ""}`}>
                    <NavLink className="adedevs" to="/"> <h1>AdeDevs</h1> </NavLink>
                    <ul className={`desk-menu ${isTheme ? "active" : ""}`}>
                        <a href="#about"> <li>about</li> </a>
                        <a href="#projects"> <li>projects</li> </a>
                        <a href="#contact"> <li>contact</li> </a>
                        <a href="resume.pdf" download={true}><li>my resume</li></a>
                        <button className={`toggle ${isTheme ? "active" : ""}`} onClick={toggleTheme}><ion-icon name="toggle"></ion-icon></button>
                    </ul>
                    <div className="desk-extras">
                        <span className="toggle-menu" onClick={toggleMenu}>
                            <ion-icon name="menu-outline" />
                        </span>
                        <button className={`toggle ${isTheme ? "active" : ""}`} onClick={toggleTheme}><ion-icon name="toggle"></ion-icon></button>
                    </div>

                    <div className={`overlay ${menuActive ? 'show' : ""}`} onClick={toggleMenu}></div>
                    <ul className={`hamburger-menu ${menuActive ? 'show' : ""}`}>
                        <span className="toggle-menu">
                            <ion-icon name="close-outline" onClick={toggleMenu} />
                        </span>
                        <a href="#about" onClick={toggleMenu}> <li>about</li> </a>
                        <a href="#projects" onClick={toggleMenu}> <li>projects</li> </a>
                        <a href="#contact" onClick={toggleMenu}> <li>contact</li> </a>
                        <a href="resume.pdf" download={true} onClick={toggleMenu}><li>my resume</li></a>
                    </ul>
                </nav>

            </div>
            <div className={`home ${isTheme ? "active" : ""}`}>
                <main className="home-page">
                    <div className="hero">
                        <div className="txt">
                            <h1 className="big">I Am Adeyemi Akinyemi</h1>
                            <p>Frontend Developer. Check out more about me </p>
                            <p>Crafting clean, responsive websites with modern web tech. Explore my work, skills, and experience below</p>
                        </div>
                        <div className="me"></div>
                    </div>
                    <div className="about" id="about">
                        <div className="intro">
                            <p>I'm a passionate Frontend Developer who brings designs to life with elegance and functionality. I hold a certification in Frontend Development from <a href="https://www.altschoolafrica.com/" target="_blank">AltSchool Africa</a>, where I honed my skills in crafting seamless and visually stunning user interfaces. Beyond coding, I enjoy writing during my free time, blending creativity and logic in all that I do.</p>
                        </div>
                        <div className="stats">

                            <h1 className="fancy">Languages i use</h1>
                            <h1>Every line of code starts with a tool, here are mine and how much I vibe with them</h1>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="width"></div>
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="js"></div>
                                </div>
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="ts"></div>
                                </div>
                                <p>TYPESCRIPT</p>
                            </div>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="css"></div>
                                </div>
                                <p>CSS</p>
                            </div>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="react"></div>
                                </div>
                                <p>REACT</p>
                            </div>
                            <div className="stats-box">
                                <div className="bar">
                                    <div className="vue"></div>
                                </div>
                                <p>VUE</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects" id="projects">
                        <main className="project-page">
                            <div className="projects-intro">
                                <div className="proj-txt">
                                    <h1 className="fancy">Projects I've Built</h1>
                                    <p>This is a collection of some of my recent frontend and web-based projects, built with React, APIs, and a touch of curiosity.</p>
                                </div>
                                <a href="https://github.com/AdeDevs/">See More</a>
                            </div>
                            <div className="projects-box">
                                <section className="project-card card-one">
                                    <a href="https://foodspringbyade.vercel.app/" target="_blank" className="project-img"></a>
                                    <div className="project-info">
                                        <h1><a href="https://foodspringbyade.vercel.app/" target="_blank">Foodspring</a></h1>
                                        <p>
                                            A clean, responsive landing page for a premium nutrition brand. Built with React and styled with plain CSS, focused on layout, typography, and mobile-first design.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/foodspring.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                                <section className="project-card card-two">
                                    <a href="https://rotatebyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://rotatebyade.vercel.app/" target="_blank">rotate</a></h1>
                                        <p>
                                            A visually bold homepage concept inspired by modern fashion sites. Built using React with subtle animation touches from Framer Motion to enhance movement and flow.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/rotate.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                                <section className="project-card card-three">
                                    <a href="https://gallerybyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://gallerybyade.vercel.app/" target="_blank">Gallery</a></h1>
                                        <p>
                                            A minimal and elegant image gallery built with React. Focused on clean layout, strong visual balance, and simple presentation.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/reseda.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                                <section className="project-card card-four">
                                    <a href="https://joltbyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://joltbyade.vercel.app/" target="_blank">artist finder</a></h1>
                                        <p>
                                            An interactive web app that lets users search and explore artists on Spotify. Built with React and the Spotify API, it features a clean, responsive design, dynamic data fetching, and direct Spotify links for albums and top tracks.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/spotify.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                                <section className="project-card card-five">
                                    <a href="https://wordcounterbyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://wordcounterbyade.vercel.app/" target="_blank">word counter</a></h1>
                                        <p>
                                            A mini tool that analyzes text in real time — tracking word, character, and sentence count. Built with React, using controlled input and basic text logic.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/wordcounter.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                                <section className="project-card card-six">
                                    <a href="https://journalbyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://journalbyade.vercel.app/" target="_blank">journal</a></h1>
                                        <p>
                                            A sleek and simple journal with CRUD built with reactjs, it utilizes localStorage to store the journal entries and it persists on reload.
                                        </p>
                                        <a className="git" href="https://github.com/AdeDevs/simple-journal.git" target="_blank">GitHub Repo</a>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                    <div className="contact" id="contact">
                        <main>
                            <div className="contact-head">
                                <h1>contact me</h1>
                                <ul className="contact-info">
                                    <li><a href="mailto:adeyemiakinyemi01@gamil.com">adeyemiakinyemi01@gmail.com</a></li>
                                    <li><a href="tel:+2349076320109">+234 907 632 0109</a></li>
                                </ul>
                            </div>
                            <form action="https://formsubmit.co/adeyemiakinyemi01@gmail.com" method="POST" target="_blank" className="contact-box">
                                <input type="email" name="email" id="" placeholder="your email" required />
                                <input type="text" name="name" id="" placeholder="your name" required />
                                <textarea name="message" id="" placeholder="your message" required></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </main>
                    </div>
                </main>
                <footer>
                    <div>
                        <h1>
                            Let's Connect
                            <span>
                                <a href="mailto:adeyemiakinyemi01@gmail.com">adeyemiakinyemi01@gmail.com</a> || &nbsp;
                                <a href="tel:+2349076320109">+234 907 632 0109</a> || &nbsp;
                                <a href="https://wa.me/2347025302018">+234 702 530 2018</a>
                            </span>
                        </h1>
                    </div>

                </footer>
            </div>
            <ul className={`socials ${isTheme ? "active" : ""}`}>
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </div>
    )
}

export default HomePage;