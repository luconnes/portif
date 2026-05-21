import "./Contact.css"

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
}
from "react-icons/fa"

export default function Contact(){

    return(

        <section
            className="contact-section"
            id="contact"
        >

            <h2>
                Contato
            </h2>

            <p>
                Entre em contato comigo através das redes abaixo.
            </p>

            <div className="contact-links">

                <a href="https://www.linkedin.com/in/lucas-azevedo-31a202291/">

                    <FaLinkedin />

                    LinkedIn

                </a>

                <a href="http://github.com/luconnes">

                    <FaGithub />

                    GitHub

                </a>

                <a href="mailto:lucasrdazevedo@gmail.com">

                    <FaEnvelope />

                    Email

                </a>

            </div>

        </section>

    )

}