import "./Navbar.css"

import {
    FaUser,
    FaFolderOpen,
    FaEnvelope
}
from "react-icons/fa"

export default function Navbar(){

    return(

        <header className="navbar">

            <div className="logo">
                Lucas Ribeiro
            </div>

            <nav>

                <ul className="nav-links">

                    <li>
                        <a href="#about">

                            <FaUser />

                            Sobre

                        </a>
                    </li>

                    <li>
                        <a href="#projects">

                            <FaFolderOpen />

                            Projetos

                        </a>
                    </li>

                    <li>
                        <a href="#contact">

                            <FaEnvelope />

                            Contato

                        </a>
                    </li>

                </ul>

            </nav>

        </header>

    )

}