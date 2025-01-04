import react from "react";
import Banner from "../Banner";
import Contact_form from "../Contact_form";
import "../../styles/pages/Contact_page.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Import ikon


function Contact_page() {
    return (
        <main className="contact_page">
            <div className="contact_banner">
                <Banner title="Kontakt" subtitle="Jak możemy pomóc? " />
            </div>
            <div className="contact_container">
                <div className="contact_panel">
                    <h2>Skontaktuj się</h2>
                    <div className="panel_body">
                        <p className="form_description">
                            Chętnie odpowiemy na Twoje pytania. Skontaktuj się z nami poprzez poniższy formularz kontaktowy.
                        </p>
                        <Contact_form />
                    </div>
                </div>
                <div className="contact_panel">
                    <h2>Dane kontaktowe</h2>
                    <div className="panel_body">
                        <h3>Fundacja ZebrANe</h3>
                        <p>
                            KRS: 0000905551
                            <br></br>
                            NIP: 8943169099
                        </p>
                        <p className="contact_mail">
                            <a href="mailto::kontakt@zebrane.org">kontakt@zebrane.org</a> - e-mail kontaktowy
                        </p>
                        <div className="social_container">
                            <a
                                href="https://www.facebook.com/FundacjaZebrane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social_link social_circle facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/FundacjaZebrane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social_link social_circle instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact_page;