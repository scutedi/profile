import "./App.css";
import cssImg from './img/css.png'
import javaImg from './img/java-logo.png'
import microchipImg from './img/microchip.png'
import networkImg from './img/network.png'
import cppImg from './img/c++.png'
import pythonImg from './img/python.png'
import binaryCodeImg from './img/binary-code.png'
import codeImg from './img/code.png'
import databaseImg from './img/data_base.png'
import profile from './img/profile.jpeg'
import cv from './cv/Edward-Constantin_Scutariu_Resume.pdf'
import cub_rubik from './img/cub_rubik.png'
import pathfinding_visualizer from './img/pathfinding-visualizer.png'
import trackforubb from './img/trackforubb.png'

const projects = [
    {
        title: "RUBLUT",
        label: "RUBLUT",
        image: cub_rubik,
        type: "HTML",
        link: "https://github.com/scutedi/cubrubikFE"
    },
    {
        title: "Pathfinding Visualizer",
        label: "Pathfinding Visualizer",
        image: pathfinding_visualizer,
        type: "CSS",
        link: "https://github.com/scutedi/Pathfinding-Visualizer"
    },
    {
        title: "TrackForUBB",
        label: "TrackForUBB",
        image: trackforubb,
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
                <img className="bg-img img1" src={cssImg} alt="" />
                <img className="bg-img img2" src={javaImg} alt="" />
                <img className="bg-img img3" src={microchipImg} alt="" />
                <img className="bg-img img4" src={networkImg} alt="" />
                <img className="bg-img img5" src={cppImg} alt="" />
                <img className="bg-img img6" src={pythonImg} alt="" />
                <img className="bg-img img7" src={binaryCodeImg} alt="" />
                <img className="bg-img img8" src={codeImg} alt="" />
                <img className="bg-img img9" src={databaseImg} alt="" />
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
                        <img src={profile} alt="Edward-Constantin Scutariu" />
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
                        <a className="button button-outline" href={cv} download>Download CV</a>
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