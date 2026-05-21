import "./About.css"

export default function About(){

    return(

        <section
            className="about-section"
            id="about"
        >

            <div className="about-image">

                <img
                    src="/foto.jpg"
                    alt="Lucas Ribeiro"
                    className="profile-image"
                />

            </div>

            <div className="about-content">

                <h2>
                    Sobre
                </h2>

                <p>
                    Sou Lucas, estudante de Ciência da Computação e desenvolvedor apaixonado por tecnologia, inovação e criação de soluções com impacto real.

Tenho experiência com Python, React, JavaScript, SQL e desenvolvimento fullstack, além de conhecimentos em inteligência artificial, visão computacional, automação e bancos de dados. Já participei de projetos voltados para acessibilidade, saúde, robótica e inclusão tecnológica, desenvolvendo soluções que unem software, hardware e análise de dados.

Estou sempre buscando evoluir minhas habilidades e criar projetos inovadores que combinem tecnologia, criatividade e impacto social.
                </p>

                <div className="about-tags">

                    <span>Python</span>

                    <span>React</span>

                    <span>JavaScript</span>

                    <span>IA</span>

                    <span>SQL</span>

                    <span>Arduino</span>

                    <span>Git</span>

                    <span>HTML/CSS</span>

                    <span>Java</span>

                    <span>Pacote Office</span>

                    <span>Power BI</span>
                </div>

            </div>

        </section>

    )

}