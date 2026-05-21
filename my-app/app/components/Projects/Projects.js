import "./Projects.css"
import Link from "next/link"

export default function Projects(){

    return(

        <section
            className="projects-section"
            id="projects"
        >

            <h2>
                Projetos
            </h2>

            <div className="projects-grid">

                <Link
                    href="/Projetos/fisiotrack"
                    className="project-card"
                >

                    <h3>
                        Sistema de Fisioterapia com IA
                    </h3>

                    <p>
                        Aplicação utilizando visão computacional
                        para acompanhamento de pacientes em
                        reabilitação motora.
                    </p>

                </Link>

                <Link
                    href="/Projetos/webdriver"
                    className="project-card"
                >

                    <h3>
                        Webdriver
                    </h3>

                    <p>
                        Sistema completo de gerenciamento
                        de arquivos com permissões,
                        compartilhamento e CRUD.
                    </p>

                </Link>

                <Link
                    href="/Projetos/tracking"
                    className="project-card"
                >

                    <h3>
                        Tracking de avenidas
                    </h3>

                    <p>
                        Projeto Arduino com feedback tátil,
                        visual e sonoro para inclusão.
                    </p>

                </Link>

                <Link
                    href="/Projetos/pokebolsa"
                    className="project-card"
                >

                    <h3>
                        PokeBolsa
                    </h3>

                    <p>
                        Projeto Arduino com feedback tátil,
                        visual e sonoro para inclusão.
                    </p>

                </Link>

                <Link
                    href="/Projetos/fazercultura"
                    className="project-card"
                >

                    <h3>
                        Projeto Fazer Cultura
                    </h3>

                    <p>
                        Projeto Arduino com feedback tátil,
                        visual e sonoro para inclusão.
                    </p>

                </Link>
            </div>

        </section>

    )

}