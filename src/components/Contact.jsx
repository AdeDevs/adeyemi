function ContactPage() {
    return (
        <div className="contact">
            <main>
                <div className="contact-head">
                <h1>contact me</h1>
                <ul className="contact-info">
                    <li><a href="mailto:adeyemiakinyemi01@gamil.com">adeyemiakinyemi01@gmail.com</a></li>
                    <li><a href="tel:+2349076320109">+234 907 632 0109</a></li>
                </ul>
                </div>
                <form action="" className="contact-box">
                    <input type="text" name="" id="" placeholder="your email" required/>
                    <input type="text" name="" id="" placeholder="your name" required/>
                    <textarea name="" id="" placeholder="your message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </main>
            <footer className="number">
                <h1>04</h1>
            </footer>
            <ul className="socials">
                <li><ion-icon name="logo-linkedin"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-github"></ion-icon></li>
            </ul>
        </div>
    )
}

export default ContactPage;