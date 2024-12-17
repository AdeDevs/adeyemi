import Scissors from "../assets/scissors.png"
import Loopstudios from "../assets/loopstudios.png"
import Foodpsring from "../assets/foodspring.png"
import Jolt from "../assets/jolt.png"
import Auspices from "../assets/auspices.png"
import Fundraiser from "../assets/fundraiser.png"

function ProjectsPage() {
    return (
        <>
        <div className="projects">
            <main>
                <div className="projects-box">
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://foodspringbyade.vercel.app/" target="_blank"><img src={Foodpsring} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://foodspringbyade.vercel.app/" target="_blank">Foodspring</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://joltbyade.vercel.app/" target="_blank"><img src={Jolt} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://joltbyade.vercel.app/" target="_blank">Jolt</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://auspices.vercel.app/" target="_blank"><img src={Auspices} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://auspices.vercel.app/" target="_blank">Auspices</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://fundraiserbyade.vercel.app/" target="_blank"><img src={Fundraiser} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://fundraiserbyade.vercel.app/" target="_blank">Fundraiser</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://adeloopstudio.web.app/" target="_blank"><img src={Loopstudios} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://adeloopstudio.web.app/" target="_blank">Loopstudios</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://kryptykscissors.web.app" target="blank"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://kryptykscissors.web.app" target="blank">Scissors</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
            <footer className="number">
                <h1>03</h1>
            </footer>
            <ul className="socials">
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </>
    )
}

export default ProjectsPage;