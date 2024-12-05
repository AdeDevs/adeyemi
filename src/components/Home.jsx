function HomePage() {
    return (
        <div className="home">
            <main>
                <div className="content">
                <h1>Adeyemi Akinyemi</h1>
                <p>Frontend Developer</p>
                </div>
            </main>
            <footer className="number">
                <h1>01</h1>
            </footer>
            <ul className="socials">
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </div>
    )
}

export default HomePage;