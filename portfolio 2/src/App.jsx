import { useEffect, useState } from "react";

const showcaseCards = [
  {
    label: "Featured Video",
    title: "Short introduction video",
    description:
      "A brief video introduction that presents who I am, what I am building, and the direction I want to keep growing in as a developer.",
    type: "video",
    src: "/image/elevator-pitch.mp4",
  },
  {
    label: "JUnit 5 Presentation",
    title: "Testing Code with JUnit 5",
    description:
      "A presentation focused on unit testing with JUnit 5, covering the value of testing Java code and presenting core ideas in a structured visual format.",
    type: "presentation",
    preview: "/image/unit-testing-preview.png",
    file: "/image/unit-testing.pptx",
  },
];

const projects = [
  {
    featured: true,
    type: "Service Website",
    title: "FixNow",
    description: [
      "A house services website built with React and Node.js to help users quickly connect with trusted home service providers. The interface focuses on clarity, fast navigation, and practical actions like browsing services and contacting an agent with a simple request form.",
      "These screenshots show the homepage and contact flow, where I focused on clean UI structure, strong calls to action, and a straightforward booking experience for users looking for household support.",
    ],
    tags: ["React", "Node.js", "Service Platform UI"],
    shots: [
      { src: "/image/fixnow-home.png", alt: "FixNow homepage screenshot" },
      { src: "/image/fixnow-contact.png", alt: "FixNow contact page screenshot" },
    ],
  },
  {
    type: "Java Application",
    title: "Form App",
    description: [
      "An in-progress Java form builder application designed to create and manage forms with clear field structure, validation, and organized data models. This project is still being developed, and it reflects my growing understanding of object-oriented design and application architecture.",
      "The code screenshots for this project show work on the form model, including constructors, validation logic, UUID handling, and timestamps, which form the foundation of the application while it is still under active development.",
    ],
    tags: ["Java", "In Progress", "Application Logic"],
    compactShots: true,
    shots: [
      {
        src: "/image/formapp-code-1.png",
        alt: "Form App Java code screenshot showing form model logic",
      },
      {
        src: "/image/formapp-code-2.png",
        alt: "Form App Java code screenshot showing constructors and validation logic",
      },
    ],
  },
  {
    type: "JavaScript Project",
    title: "Expense Tracker App",
    description: [
      "A JavaScript expense tracker application built to help users monitor their balance, organize transactions, and keep a clearer view of income and expenses through a simple dashboard interface.",
      "The screenshots highlight the balance overview, transaction list, and transaction entry form, showing my work on layout structure and the user flow for personal finance tracking.",
    ],
    tags: ["JavaScript", "Expense Tracking UI", "Application State"],
    shots: [
      { src: "/image/expense-tracker-1.png", alt: "Expense Tracker dashboard screenshot" },
      { src: "/image/expense-tracker-2.png", alt: "Expense Tracker transactions screenshot" },
    ],
  },
];

const achievements = [
  {
    title: "Application Development Milestone",
    description:
      "Completed multiple hands-on software projects that demonstrate growing confidence in planning, building, and refining application features.",
  },
  {
    title: "Responsive Design Focus",
    description:
      "Developed web layouts with responsiveness in mind, ensuring content remains clear and accessible across desktop, tablet, and mobile screens.",
  },
  {
    title: "Problem-Solving Growth",
    description:
      "Continued strengthening debugging and logical thinking skills through project-based work in Java and JavaScript environments.",
  },
];

const skillTags = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Responsive Design",
  "UI Layout",
  "Project Planning",
  "Problem Solving",
  "Version Control",
];

function App() {
  const [activeShot, setActiveShot] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveShot(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(activeShot));
  }, [activeShot]);

  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#home">
            Bertrand.dev
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#showcase">Showcase</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="home">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">Portfolio Website</p>
              <h1>Makazung Dibamou De Yllo Bertrand</h1>
              <p className="hero-text">
                I am an aspiring developer focused on building clear, functional digital
                experiences with thoughtful structure and dependable performance. I enjoy solving
                practical problems, learning new tools, and turning ideas into working applications
                that feel simple to use.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View My Work
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>

            <aside className="photo-card" aria-label="Profile photo">
              <img
                className="profile-photo"
                src="/image/profile.jpg"
                alt="Portrait of Makazung Dibamou De Yllo Bertrand"
              />
            </aside>
          </section>

          <section className="section" id="about">
            <div className="section-heading">
              <p className="eyebrow">About</p>
              <h2>Building skills with purpose</h2>
            </div>

            <div className="about-grid">
              <article className="panel">
                <p>
                  My goal is to keep growing as a web and software developer by creating projects
                  that strengthen both technical ability and design awareness. I value clean
                  layouts, logical user flows, and code that is easy to understand and improve over
                  time.
                </p>
                <p>
                  This portfolio highlights work that reflects my progress, including application
                  development with Java and JavaScript, along with a growing interest in responsive
                  interfaces, structured application logic, and practical services for real users.
                </p>
              </article>

              <article className="panel">
                <h3>Core Skills</h3>
                <ul className="tag-list">
                  {skillTags.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="section" id="showcase">
            <div className="section-heading">
              <p className="eyebrow">Showcase</p>
              <h2>Featured media and presentation work</h2>
            </div>

            <div className="showcase-grid">
              {showcaseCards.map((card) => (
                <article
                  key={card.title}
                  className={`showcase-card ${card.type === "video" ? "showcase-card-compact" : ""}`}
                >
                  <div className="showcase-copy">
                    <p className="showcase-label">{card.label}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>

                  {card.type === "video" ? (
                    <video className="showcase-video" controls preload="metadata">
                      <source src={card.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <img
                        className="showcase-preview"
                        src={card.preview}
                        alt="Preview slide from the Testing Code with JUnit 5 presentation"
                      />
                      <div className="showcase-actions">
                        <a
                          className="button button-primary"
                          href={card.file}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Presentation
                        </a>
                        <a className="button button-secondary" href={card.file} download>
                          Download PPTX
                        </a>
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Examples of my work</h2>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`project-card ${project.featured ? "project-card-featured" : ""} ${
                    project.compactShots ? "project-card-compact-shots" : ""
                  }`}
                >
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    {project.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div>
                    <div className="project-footer">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {project.shots ? (
                      <div className="project-shots">
                        {project.shots.map((shot) => (
                          <button
                            key={shot.src}
                            className="project-shot-link"
                            type="button"
                            onClick={() => setActiveShot(shot)}
                            aria-label={`Open larger view of ${shot.alt}`}
                          >
                            <img src={shot.src} alt={shot.alt} />
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="achievements">
            <div className="section-heading">
              <p className="eyebrow">Achievements</p>
              <h2>Highlights from my learning journey</h2>
            </div>

            <div className="achievement-grid">
              {achievements.map((item) => (
                <article className="panel achievement-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="contact">
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Let's connect</h2>
            </div>

            <div className="contact-card">
              <p>
                I am open to opportunities where I can continue growing, contribute to meaningful
                work, and develop strong technical experience.
              </p>
              <div className="contact-links">
                <a href="mailto:w0888370@myscc.ca">w0888370@myscc.ca</a>
                <a href="https://github.com/makaz12" target="_blank" rel="noreferrer">
                  github.com/makaz12
                </a>
                <a
                  href="https://www.linkedin.com/in/makazung-bertrand/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/makazung-bertrand
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {activeShot ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged project screenshot">
          <button
            className="lightbox-backdrop"
            type="button"
            onClick={() => setActiveShot(null)}
            aria-label="Close enlarged image"
          />
          <figure className="lightbox-content">
            <img src={activeShot.src} alt={activeShot.alt} />
            <button className="lightbox-close" type="button" onClick={() => setActiveShot(null)}>
              Close
            </button>
          </figure>
        </div>
      ) : null}
    </>
  );
}

export default App;
