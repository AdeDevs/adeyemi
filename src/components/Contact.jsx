import { useState } from "react";

function ContactPage() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <>
        <div className={`contact ${isDarkMode ? "dark" : ""}`}>
            <main>
                <div className="contact-head">
                <h1 onClick={toggleDarkMode}>contact me</h1>
                <ul className="contact-info">
                    <li><a className={`${isDarkMode ? "dark" : ""}`} href="mailto:adeyemiakinyemi01@gamil.com">adeyemiakinyemi01@gmail.com</a></li>
                    <li><a className={`${isDarkMode ? "dark" : ""}`} href="tel:+2349076320109">+234 907 632 0109</a></li>
                </ul>
                </div>
                <form action="" className="contact-box">
                    <input type="text" name="" id="" placeholder="your email" required/>
                    <input type="text" name="" id="" placeholder="your name" required/>
                    <textarea name="" id="" placeholder="your message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
            <footer className="number">
                <h1>04</h1>
            </footer>
            <ul className="socials">
                <a href="http://www.linkedin.com/in/adedevs" target="_blank"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </>
    )
}

export default ContactPage;