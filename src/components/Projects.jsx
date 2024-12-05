import Scissors from "../assets/scissors.png"
import Loopstudios from "../assets/loopstudios.png"
import Vintage from "../assets/vintagefure.png"

function ProjectsPage() {
    return (
        <div className="projects">
            <main>
                <div className="projects-box">
                    <section className="project-card">
                        <div className="project-img">
                            <a href="#"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="#">Scissors</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="#"><img src={Vintage} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="#">Vintage</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="#"><img src={Loopstudios} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="#">Loopstudios</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="#"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="#">Foodspring</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="#"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="#">Foodspring</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti. Rem, quia. Culpa illo atque quidem, nam asperiores necessitatibus dicta fuga eos tempora laudantium! Rerum, culpa qui.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="number">
                <h1>03</h1>
            </footer>
            <ul className="socials">
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </div>
    )
}

export default ProjectsPage;