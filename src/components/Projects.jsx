export default function ProjectsPage() {
    return (
        <>
        <div className="projects">
            <main className="project-page">
                <div className="projects-intro">
                   <div className="proj-txt">
                   <h1>Projects I've Built</h1>
                   <p>This is a collection of some of my recent frontend and web-based projects, built with React, APIs, and a touch of curiosity.</p>
                   </div>
                   <button>See More</button>
                </div>
                <div className="projects-box">
                    <section className="project-card card-one">
                        <div className="project-img"></div>
                        <div className="project-info">
                            <h1><a href="https://foodspringbyade.vercel.app/" target="_blank">Foodspring</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card card-two">
                        <div className="project-img">
                        </div>
                        <div className="project-info">
                            <h1><a href="https://rotatebyade.vercel.app/" target="_blank">rotate</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card card-three">
                        <div className="project-img">
                        </div>
                        <div className="project-info">
                            <h1><a href="https://gallerybyade.vercel.app/" target="_blank">Gallery</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card card-four">
                        <div className="project-img">
                        </div>
                        <div className="project-info">
                            <h1><a href="https://brookebyade.vercel.app/" target="_blank">brooke</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card card-five">
                        <div className="project-img">
                        </div>
                        <div className="project-info">
                            <h1><a href="https://wordcounterbyade.vercel.app/" target="_blank">word counter</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card card-six">
                        <div className="project-img">
                        </div>
                        <div className="project-info">
                            <h1><a href="https://dreamspacebyade.vercel.app/" target="_blank">dreamspace</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
            <ul className="socials">  
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </>
    )
}

{/* <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://joltbyade.vercel.app/" target="_blank"><img src={Jolt} alt="" /></a>
                            <a className="project-mob" href="https://joltbyade.vercel.app/" target="_blank"><img src={JoltMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://joltbyade.vercel.app/" target="_blank">Jolt</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://rotatebyade.vercel.app/" target="blank"><img src={Rotate} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://rotatebyade.vercel.app/" target="blank">rotate</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://kryptykscissors.web.app" target="blank"><img src={Gallery} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://gallerybyade.vercel.app/" target="blank">Gallery</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://auspices.vercel.app/" target="_blank"><img src={Auspices} alt="" /></a>
                            <a className="project-mob" href="https://auspices.vercel.app/" target="_blank"><img src={AuspicesMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://auspices.vercel.app/" target="_blank">Auspices</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://fundraiserbyade.vercel.app/" target="_blank"><img src={Fundraiser} alt="" /></a>
                            <a className="project-mob" href="https://fundraiserbyade.vercel.app/" target="_blank"><img src={FundraiserMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://fundraiserbyade.vercel.app/" target="_blank">Fundraiser</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://soigaagency.vercel.app/" target="_blank"><img src={Soiga} alt="" /></a>
                            <a className="project-mob" href="https://soigaagency.vercel.app/" target="_blank"><img src={SoigaMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://soigaagency.vercel.app/" target="_blank">Soiga</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://adeloopstudio.web.app/" target="_blank"><img src={Loopstudios} alt="" /></a>
                            <a className="project-mob" href="https://adeloopstudio.web.app/" target="_blank"><img src={LoopstudiosMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://adeloopstudio.web.app/" target="_blank">Loopstudios</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://kryptykscissors.web.app" target="blank"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://brookebyade.vercel.app/" target="blank">Scissors</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section> */}