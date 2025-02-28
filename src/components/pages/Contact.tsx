export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">📞 Get in Touch!</h1>
            <p className="contact-description">We'd love to hear from you. Please fill out the form below.</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-input" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-input" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-input" id="message" rows={5} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
} 