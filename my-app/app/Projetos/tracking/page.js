import React from "react";

export const wifiHeatmapData = {
  banner: "/foto3.png",
  title: "Dynamic Wi-Fi Density Heatmap",

  description:
    "Sistema desenvolvido durante um hackathon para monitoramento e visualização dinâmica da densidade de usuários conectados via Wi-Fi em tempo real, utilizando mapas de calor interativos e simulação inteligente de fluxo de pessoas.",

  links: {
    github: "https://github.com/naoehcleber/hackathon",
    demo: null,
  },

  tech: [
    "React",
    "JavaScript",
    "Node.js",
    "WebSocket",
    "Heatmap.js",
    "CSS",
    "Real-Time Simulation",
  ],

  problem:
    "Grandes ambientes com alta circulação de pessoas possuem dificuldades em monitorar concentração de usuários, fluxo de movimentação e possíveis pontos de congestionamento em tempo real.",

  solution:
    "O sistema simula usuários conectados em uma área monitorada de 40 metros de raio, atualizando dinamicamente sua posição e exibindo um heatmap em tempo real para análise visual da densidade e movimentação.",

  challenges:
    "Os principais desafios envolveram a sincronização entre backend e frontend em tempo real, o gerenciamento eficiente da atualização dos pontos de calor e a renderização dinâmica sem comprometer a performance.",

  learnings:
    "O projeto proporcionou experiência prática com comunicação em tempo real, visualização de dados espaciais, renderização dinâmica, arquitetura frontend/backend e desenvolvimento colaborativo em hackathon.",

  features: [
    "Mapa de calor dinâmico em tempo real",
    "Simulação de múltiplos usuários conectados",
    "Atualização contínua de posições",
    "Visualização individual dos pontos",
    "Monitoramento de densidade Wi-Fi",
    "Arquitetura integrada frontend/backend",
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

  /* Banner */

  .project-banner {
    width: 100%;
    height: 380px;
    border-radius: 28px;
    overflow: hidden;
    margin-bottom: 40px;
    border: 1px solid #27272a;
    position: relative;
  }

  .project-banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to top,
        rgba(9,9,11,0.7),
        rgba(9,9,11,0.1)
      );
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

  /* Botões */

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

  .btn-solid {
    background: linear-gradient(135deg, #38bdf8, #2563eb);
    color: #ffffff;
    border: none;
  }

  .btn-solid:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  /* Seções */

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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  /* Tecnologias */

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
    border-color: #38bdf8;
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
    border-color: #3b82f6;
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
    border-color: #38bdf8;
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
      height: 240px;
    }

    .project-page {
      padding: 40px 18px;
    }
  }
`;

// ─── COMPONENTES ─────────────────────────────────────────────

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

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────

export default function ProjectTemplate({
  project = wifiHeatmapData,
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

          {/* Problema e Solução */}
          {(problem || solution) && (
            <div className="project-section grid-2">

              {problem && (
                <InfoCard
                  emoji="📍"
                  title="Problema"
                >
                  {problem}
                </InfoCard>
              )}

              {solution && (
                <InfoCard
                  emoji="🔥"
                  title="Solução"
                >
                  {solution}
                </InfoCard>
              )}

            </div>
          )}

          {/* Funcionalidades */}
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

          {/* Desafios e Aprendizados */}
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

          {/* Footer */}
          <div className="project-footer">
            Projeto vencedor de hackathon focado em
            visualização dinâmica de densidade Wi-Fi
            e monitoramento em tempo real.
          </div>

        </div>
      </section>
    </>
  );
}