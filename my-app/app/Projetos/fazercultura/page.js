import React from "react";

export const fazerCulturaData = {
  banner: "/foto5.jpeg",

  title: "Fazer Cultura",

  description:
    "Plataforma de streaming dedicada à divulgação de produções artísticas nacionais, com foco em artistas independentes, estudantes e democratização do acesso à cultura brasileira.",

  links: {
    github: "https://github.com/luconnes/Projeto-Fazer-Cultura-",
  },

  tech: [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "SQL",
    "Figma",
    "Git",
    "Streaming",
  ],

  problem:
    "Muitos artistas independentes e estudantes possuem dificuldade em divulgar seus trabalhos e alcançar público em plataformas tradicionais, que normalmente priorizam grandes produtoras e conteúdos comerciais.",

  solution:
    "A plataforma Fazer Cultura centraliza produções artísticas nacionais em um ambiente de streaming acessível, permitindo publicação, avaliação, ranking e interação entre usuários e criadores de conteúdo.",

  challenges:
    "Os maiores desafios envolveram a implementação do sistema de streaming, upload de conteúdos, autenticação de usuários, funcionalidades em tempo real e organização da arquitetura full stack.",

  learnings:
    "O projeto aprofundou conhecimentos em desenvolvimento full stack, integração frontend/backend, autenticação, banco de dados, streaming de mídia e metodologias colaborativas.",

  features: [
    "Autenticação de usuários",
    "Upload de conteúdos",
    "Streaming de mídia",
    "Sistema de avaliações",
    "Ranking de conteúdos",
    "Watch Party",
    "Chat em tempo real",
    "Dashboard interativo",
    "Sistema de recomendação visual",
  ],

  team: [
    {
      name: "Lucas Ribeiro D’Azevedo",
      role: "Backend",
    },

    {
      name: "Marina Mendes Durand",
      role: "Frontend",
    },

    {
      name: "Tarsila Amado Alves de Brito",
      role: "Frontend",
    },

    {
      name: "Vinícius Mergulhão Teti",
      role: "Full Stack",
    },
  ],
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: #09090b;
  }

  .project-page {
    min-height: 100vh;
    background:
      radial-gradient(circle at top, #18181b 0%, #09090b 60%);
    color: #ffffff;
    padding: 64px 24px;
  }

  .project-container {
    max-width: 1152px;
    margin: 0 auto;
  }

  /* Banner adaptado às dimensões e proporções da foto */
  .project-banner {
    width: 100%;
    height: 550px; /* Definido uma altura fixa menor */
    border-radius: 28px;
    overflow: hidden;
    margin-bottom: 40px;
    border: 1px solid #27272a;
    position: relative;
    background-color: #121214;
  }

  .project-banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to top,
        rgba(9,9,11,0.85),
        rgba(9,9,11,0.1)
      );
    pointer-events: none;
  }

  .project-banner img {
    width: 100%;
    height: center 68%; 
    display: block;
  }

  /* Header */
  .project-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 40px;
  }

  .project-header h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 12px;
    line-height: 1.1;
  }

  .project-header p {
    color: #a1a1aa;
    font-size: 1.1rem;
    max-width: 700px;
    line-height: 1.8;
  }

  .project-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
  }

  /* Buttons */
  .btn {
    display: inline-block;
    padding: 14px 22px;
    border-radius: 18px;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    font-family: "Inter", sans-serif;
  }

  .btn-ghost {
    background-color: #18181b;
    color: #ffffff;
    border: 1px solid #3f3f46;
  }

  .btn-ghost:hover {
    background-color: #27272a;
    transform: translateY(-2px);
  }

  /* Sections */
  .project-section {
    margin-bottom: 56px;
  }

  .project-section h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    margin-bottom: 24px;
  }

  /* Grids */
  .grid-2 {
    display: grid;
    grid-template-columns:
      repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns:
      repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  /* Technologies */
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .tech-badge {
    background: rgba(24, 24, 27, 0.9);
    border: 1px solid #27272a;
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #e4e4e7;
    transition: 0.2s ease;
  }

  .tech-badge:hover {
    border-color: #ef4444;
    transform: translateY(-2px);
  }

  /* Cards */
  .card {
    background:
      linear-gradient(
        180deg,
        rgba(24,24,27,0.95),
        rgba(15,15,18,0.95)
      );
    border: 1px solid #27272a;
    padding: 32px;
    border-radius: 28px;
    transition: 0.25s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: #ef4444;
  }

  .card-small {
    background:
      linear-gradient(
        180deg,
        rgba(24,24,27,0.95),
        rgba(15,15,18,0.95)
      );
    border: 1px solid #27272a;
    padding: 24px;
    border-radius: 24px;
    transition: 0.25s ease;
  }

  .card-small:hover {
    transform: translateY(-4px);
    border-color: #ef4444;
  }

  .card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .card p {
    color: #a1a1aa;
    line-height: 1.8;
  }

  .card-small p {
    color: #d4d4d8;
    line-height: 1.6;
  }

  /* Team */
  .team-grid {
    display: grid;
    grid-template-columns:
      repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .team-card {
    background:
      linear-gradient(
        180deg,
        rgba(24,24,27,0.95),
        rgba(15,15,18,0.95)
      );
    border: 1px solid #27272a;
    border-radius: 24px;
    padding: 24px;
    transition: 0.25s ease;
  }

  .team-card:hover {
    border-color: #ef4444;
    transform: translateY(-4px);
  }

  .team-card h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  .team-card p {
    color: #a1a1aa;
  }

  /* Footer */
  .project-footer {
    margin-top: 80px;
    padding-top: 32px;
    border-top: 1px solid #27272a;
    color: #71717a;
    text-align: center;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .project-banner {
      height: auto; /* Mantém automático também em dispositivos móveis */
    }

    .project-page {
      padding: 40px 18px;
    }
  }
`;
// COMPONENTES

function InfoCard({ emoji, title, children }) {
  return (
    <div className="card">
      <h3>
        {emoji} {title}
      </h3>

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

function TeamCard({ name, role }) {
  return (
    <div className="team-card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// COMPONENTE PRINCIPAL

export default function ProjectTemplate({
  project = fazerCulturaData,
}) {
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
    team = [],
  } = project;

  return (
    <>
      <style>{css}</style>

      <section className="project-page">
        <div className="project-container">

          {/* Banner */}
          {banner && (
            <div className="project-banner">
              <img
                src={banner}
                alt={`Banner do projeto ${title}`}
              />
            </div>
          )}

          {/* Header */}
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
                  className="btn btn-ghost"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>

          {/* Technologies */}
          {tech.length > 0 && (
            <div className="project-section">

              <h2>Tecnologias Utilizadas</h2>

              <div className="tech-list">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="tech-badge"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          )}

          {/* Problem & Solution */}
          {(problem || solution) && (
            <div className="project-section grid-2">

              {problem && (
                <InfoCard
                  emoji="🎯"
                  title="Problema"
                >
                  {problem}
                </InfoCard>
              )}

              {solution && (
                <InfoCard
                  emoji="🎬"
                  title="Solução"
                >
                  {solution}
                </InfoCard>
              )}

            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="project-section">

              <h2>Funcionalidades</h2>

              <div className="grid-3">
                {features.map((item) => (
                  <FeatureCard
                    key={item}
                    label={item}
                  />
                ))}
              </div>

            </div>
          )}

          {/* Challenges & Learnings */}
          {(challenges || learnings) && (
            <div className="project-section grid-2">

              {challenges && (
                <InfoCard
                  emoji="⚡"
                  title="Desafios"
                >
                  {challenges}
                </InfoCard>
              )}

              {learnings && (
                <InfoCard
                  emoji="📚"
                  title="Aprendizados"
                >
                  {learnings}
                </InfoCard>
              )}

            </div>
          )}

          {/* Team */}
          {team.length > 0 && (
            <div className="project-section">

              <h2>Equipe</h2>

              <div className="team-grid">
                {team.map((member) => (
                  <TeamCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                  />
                ))}
              </div>

            </div>
          )}

          {/* Footer */}
          <div className="project-footer">
            Plataforma criada para democratizar
            o acesso à cultura nacional através
            da tecnologia, streaming e inovação.
          </div>

        </div>
      </section>
    </>
  );
}