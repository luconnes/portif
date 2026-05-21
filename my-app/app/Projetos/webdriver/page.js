import React from "react";

export const fisioTrackData = {
  banner: null,
  title: "Webdrive",
  description:
    "Plataforma de manutenção de banco de dados de uma faculdade conectado, por meio de python, ao mySQL ",
  links: {
    github: "https://github.com/tarsilaAmado/TrabalhoDeBancoDeDados",
  },
  tech: ["Python", "MySQL", "SQL"],
  problem:
    "Atividade passada em sala para que seja possível exercitar nossos conceitos de CRUD e banco de dados relacional, fazendo a conexão a partir da linguagem python",
  solution: null,
  challenges:
    "Um dos maiores desafios foi implementar um CRUD funcional que esteja conectado diretamente com o mySQL",
  learnings:
    "O projeto aprofundou conhecimentos Banco de dados relacionais, python, lógica de programação, SQL",
  features: [
    "CRUD",
    "SQL",
    "Banco de dados relacionais",
    "Feedback em tempo real",
    "Histórico de evolução",
  ],
};

const css = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .project-page {
    min-height: 100vh;
    background-color: #09090b;
    color: #ffffff;
    padding: 64px 24px;
  }

  .project-container {
    max-width: 1152px;
    margin: 0 auto;
  }

  /* Banner */

  .project-banner {
    width: 100%;
    height: 350px;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 40px;
    border: 1px solid #27272a;
  }

  .project-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Cabeçalho */

  .project-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 40px;
  }

  .project-header h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.1;
  }

  .project-header p {
    color: #a1a1aa;
    font-size: 1.1rem;
    max-width: 600px;
    line-height: 1.6;
  }

  .project-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
  }

  /* Botões */

  .btn {
    display: inline-block;
    padding: 12px 20px;
    border-radius: 16px;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: Arial, Helvetica, sans-serif;
  }

  .btn-ghost {
    background-color: #18181b;
    color: #ffffff;
    border: 1px solid #3f3f46;
  }

  .btn-ghost:hover {
    background-color: #27272a;
  }

  .btn-solid {
    background-color: #ffffff;
    color: #000000;
    border: none;
    font-weight: 600;
  }

  .btn-solid:hover {
    background-color: #d4d4d8;
  }

  /* Seções */

  .project-section {
    margin-bottom: 48px;
  }

  .project-section h2 {
    font-size: clamp(1.5rem, 3vw, 1.875rem);
    font-weight: 600;
    margin-bottom: 24px;
  }

  /* Grids */

  .grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  /* Badges de tecnologia */

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .tech-badge {
    background-color: #18181b;
    border: 1px solid #27272a;
    padding: 10px 18px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #e4e4e7;
  }

  /* Cards */

  .card {
    background-color: #18181b;
    border: 1px solid #27272a;
    padding: 32px;
    border-radius: 24px;
  }

  .card-small {
    background-color: #18181b;
    border: 1px solid #27272a;
    padding: 24px;
    border-radius: 24px;
  }

  .card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .card p {
    color: #a1a1aa;
    line-height: 1.7;
  }

  .card-small p {
    color: #d4d4d8;
    line-height: 1.5;
  }
`;

// ─── SUBCOMPONENTES ───────────────────────────────────────────

function InfoCard({ emoji, title, children }) {
  return (
    <div className="card">
      <h3>{emoji} {title}</h3>
      <p>{children}</p>
    </div>
  );
}

function FeatureCard({ label }) {
  return (
    <div className="card-small">
      <p>{label}</p>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────

export default function ProjectTemplate({ project = fisioTrackData }) {
  const {
    banner,
    title,
    description,
    links,
    tech = [],
    problem,
    solution,
    challenges,
    learnings,
    features = [],
  } = project;

  return (
    <>
      <style>{css}</style>

      <section className="project-page">
        <div className="project-container">

          {/* Banner */}
          {banner && (
            <div className="project-banner">
              <img src={banner} alt={`Banner do projeto ${title}`} />
            </div>
          )}

          {/* Cabeçalho */}
          <div className="project-header">
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="project-links">
              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Repositório GitHub de ${title}`}
                  className="btn btn-ghost"
                >
                  GitHub
                </a>
              )}
              {links?.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo ao vivo de ${title}`}
                  className="btn btn-solid"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Tecnologias */}
          {tech.length > 0 && (
            <div className="project-section">
              <h2>Tecnologias Utilizadas</h2>
              <div className="tech-list">
                {tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Problema & Solução */}
          {(problem || solution) && (
            <div className="project-section grid-2">
              {problem && <InfoCard emoji="🧠" title="Problema">{problem}</InfoCard>}
              {solution && <InfoCard emoji="💻" title="Solução">{solution}</InfoCard>}
            </div>
          )}

          {/* Funcionalidades */}
          {features.length > 0 && (
            <div className="project-section">
              <h2>Funcionalidades</h2>
              <div className="grid-3">
                {features.map((item) => (
                  <FeatureCard key={item} label={item} />
                ))}
              </div>
            </div>
          )}

          {/* Desafios & Aprendizados */}
          {(challenges || learnings) && (
            <div className="project-section grid-2">
              {challenges && <InfoCard emoji="⚡" title="Desafios">{challenges}</InfoCard>}
              {learnings && <InfoCard emoji="📚" title="Aprendizados">{learnings}</InfoCard>}
            </div>
          )}

        </div>
      </section>
    </>
  );
}