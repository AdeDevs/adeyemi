function LandPage() {
    return (
        <>
            <div className="home">
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
                                    </div>
                                </section>
                                <section className="project-card card-four">
                                    <a href="https://brookebyade.vercel.app/" target="_blank" className="project-img">
                                    </a>
                                    <div className="project-info">
                                        <h1><a href="https://brookebyade.vercel.app/" target="_blank">brooke</a></h1>
                                        <p>
                                            Landing page for a professional golfer. Designed to be minimal and classy. Built with React and CSS, with a strong focus on spacing and typography.
                                        </p>
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
            <ul className="socials">
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </>
    )
}

export default LandPage;