import "./App.css";

const projects = [
    {
        title: "RUBLUT",
        label: "RUBLUT",
        image: "img/cub_rubik.png",
        type: "HTML",
        link: "https://github.com/scutedi/cubrubikFE"
    },
    {
        title: "Pathfinding Visualizer",
        label: "Pathfinding Visualizer",
        image: "img/pathfinding-visualizer.png",
        type: "CSS",
        link: "https://github.com/scutedi/Pathfinding-Visualizer"
    },
    {
        title: "TrackForUBB",
        label: "TrackForUBB",
        image: "img/trackforubb.png",
        type: "CSS",
        link: "https://github.com/scutedi/Proiect_Colectiv"
    },
];

const experience = [
    {
        company: "CloudFlight",
        role: "Software Engineering Trainee at CloudFlight",
        date: "August 2025 – October 2025",
        mark: "C",
        color: "#ff6600",
        description:
            "Training programme at CloudFlight in partnership with UBB, Cluj-Napoca. Developed a full-stack web application for managing ingredients and personal fridge items, implementing REST APIs, CRUD operations, and data persistence using Spring Boot, Flyway, and MySQL.",
    },
];

function App() {
    return (
        <div className="site-shell">
            <div className="background-pattern" aria-hidden="true">
                <img className="bg-img img1" src="/img/css.png" alt="" />
                <img className="bg-img img2" src="/img/java-logo.png" alt="" />
                <img className="bg-img img3" src="/img/microchip.png" alt="" />
                <img className="bg-img img4" src="/img/network.png" alt="" />
                <img className="bg-img img5" src="/img/c++.png" alt="" />
                <img className="bg-img img6" src="/img/python.png" alt="" />
                <img className="bg-img img7" src="/img/binary-code.png" alt="" />
                <img className="bg-img img8" src="/img/code.png" alt="" />
                <img className="bg-img img9" src="/img/data_base.png" alt="" />
            </div>
            <div className="background-lines" aria-hidden="true" />
            <div className="top-accent" />
            <header className="navbar">
                <a className="signature" href="#home" aria-label="Home">es.</a>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>
                <section className="hero" id="home">
                    <div className="avatar">
                        <img src="img/profile.jpeg" alt="Edward-Constantin Scutariu" />
                    </div>
                    <h1>
                        Building software and
                        <br />
                        learning <span>along the way!</span>
                    </h1>
                    <p className="intro">
                        I am Edward-Constantin Scutariu, a Computer Science student at
                        <br className="desktop-break" /> Babeș-Bolyai University, passionate about full-stack
                        development,
                        <br className="desktop-break" /> creating interactive web applications, and writing
                        <br className="desktop-break" /> clean, scalable code.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-light" href="mailto:scutedi@gmail.com">Get In Touch</a>
                        <a className="button button-outline" href="cv/Edward-Constantin_Scutariu_Resume.pdf" download>Download CV</a>
                    </div>

                    <div className="stack">
                        <p>EXPERIENCE WITH</p>
                        <div className="stack-icons" aria-label="Technologies">
                            <span className="tech-square">C++</span>
                            <span className="tech-circle">J</span>
                            <span className="tech-shield">Py</span>
                            <span className="react-mark">⚛</span>
                        </div>
                    </div>
                </section>

                <section className="projects section-width" id="projects">
                    <h2>PROJECTS</h2>
                    <div className="project-grid">
                        {projects.map((project) => (
                            <a
                                className="project-card"
                                href={project.link || "#contact"}
                                key={project.title}
                                target={project.link ? "_blank" : undefined}
                                rel={project.link ? "noopener noreferrer" : undefined}
                            >
                                <div className={`project-image ${project.type.toLowerCase()}`}>
                                    <img src={project.image} alt="" />
                                    <div className="image-shade" />
                                    <strong>{project.label}</strong>
                                </div>
                                <div className="project-caption">
                                    <div>
                                        <small>CLICK HERE TO VIEW</small>
                                        <span>{project.title}</span>
                                    </div>
                                    <span className="arrow">↗</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="experience section-width" id="experience">
                    <h2>EXPERIENCE</h2>
                    <div className="timeline">
                        {experience.map((job) => (
                            <article className="job" key={job.company}>
                                <div className="company-mark" style={{ color: job.color }}>{job.mark}</div>
                                <div className="job-content">
                                    <div className="job-heading">
                                        <h3>{job.role}</h3>
                                        <span>{job.date}</span>
                                    </div>
                                    <p>{job.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer id="contact">
                <div className="footer-inner">
                    <div className="footer-info">
                        <h2>Contact</h2>
                        <p>
                            Computer Science student at Babeș-Bolyai University looking for
                            new opportunities and interesting projects to collaborate on.
                        </p>
                        <span className="copyright">
              © 2026 Edward-Constantin Scutariu. All rights reserved.
            </span>
                    </div>

                    <div className="footer-right">
                        <a className="email" href="mailto:scutedi@gmail.com">
                            ✉ scutedi@gmail.com
                        </a>

                        <div className="socials">
                            <a href="https://www.linkedin.com/in/edward-constantin-scutariu/" aria-label="LinkedIn">in</a>
                            <a href="https://github.com/scutedi" aria-label="GitHub">git</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;