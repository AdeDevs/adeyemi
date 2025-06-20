function AboutPage() {
    return (
        <>
        <div className="about">
            <main>
                <div className="intro">
                <h1>hi, i'm adeyemi akinyemi</h1>
                <p>I'm a passionate Frontend Developer who brings designs to life with elegance and functionality. I hold a certification in Frontend Development from <a href="https://www.altschoolafrica.com/" target="_blank">AltSchool Africa</a>, where I honed my skills in crafting seamless and visually stunning user interfaces. Beyond coding, I enjoy writing during my free time, blending creativity and logic in all that I do.</p>
                </div>
                <div className="stats">
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

export default AboutPage;