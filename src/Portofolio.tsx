"use client";
import "./Portofolio.css";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Globe,
  Calendar,
  User,
  BookOpen,
  Award,
  Bike,
  Computer,
  Settings,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Website1Image from "./assets/Website1.jpg";
import Website2Image from "./assets/Website2.jpg";
import Website3Image from "./assets/Website3.jpg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "Web Dev", level: 90, icon: <Computer className="w-5 h-5" /> },
    {
      name: "Machine Learning",
      level: 85,
      icon: <Settings className="w-5 h-5" />,
    },
    { name: "Node.js", level: 80, icon: <Globe className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 75, icon: <Palette className="w-5 h-5" /> },
    { name: "Python", level: 90, icon: <Code className="w-5 h-5" /> },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/AustinOswaldTjokrohandoko_CV.pdf"; // 
    link.download = "Austin-Oswald-Tjokrohandoko.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: "Nusantara Education Partners",
      description:
        "Nusantara Education Partners is a platform dedicated to fostering educational excellence in Indonesia through collaborative partnerships, tailored programs, and strategic support services.",
      image: Website1Image,
      tags: ["WordPress", "SEO", "PHP"],
      github: "#",
      live: "https://nusantaraeducationpartners.com/",
      year: "2025",
    },
    {
      title: "Web-3 Auction Websites",
      description:
        "Auction Based Websites that was build with using React, amd also Motoko for the blockchain experience.  ",
      image: Website2Image,
      tags: ["React", "Motoko", "CSS"],
      github: "#",
      live: "https://zagp4-4aaaa-aaaah-qqcaq-cai.icp0.io/",
      year: "2025",
    },
    {
      title: "Machine Learning Schizoprenia Prediction",
      description:
        "A Websites that will predict Schizoprenia disease based on machine learning prediction.",
      image: Website3Image,
      tags: ["React", "Machine Learning"],
      github: "https://github.com/Oostitin11/Schizoprenia",
      live: "#",
      year: "2025",
    },
  ];

  const experiences = [
    {
      role: "Junior Web Developer",
      company: "Nusantara Education Partners",
      period: "2025 - Sekarang",
      description:
        "Memimpin pengembangan aplikasi web dengan React dan Vue.js untuk berbagai klien enterprise.",
      skills: ["PHP", "WordPress", "SEO", "Collaboration"],
    },
    {
      role: "3rd Winner",
      company: "14th ICP Hackathon Indonesia",
      period: "2025",
      description:
        "The ICP Hackathon is a global competition where developers and innovators build decentralized apps and solutions on the Internet Computer Protocol, showcasing creativity in Web3, AI, DeFi, gaming, and more.",
      skills: ["React", "Node.js", "TypeScript", "Team Collaboration", "ICP"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? "scrolled" : "transparent"}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">AO</div>
            <div className="nav-menu">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-item ${
                    activeSection === item ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-container">
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="hero-name">Austin Oswald Tjokrohandoko</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer who's passionated enough to create a creative
            websites.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              Lihat Portfolio
            </button>
            <button onClick={downloadCV} className="btn-secondary">
              Download My CV
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Oostitin11" className="social-link">
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/austinoswald/"
              className="social-link"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/_austin.oswald/"
              className="social-link"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="about-grid">
            <div>
              <p className="about-text">
                A Third-Year Computer Science student at Binus University. A
                highly motivated individual with a strong enthusiasm for
                continuous learning in Computer Science, AI, Web Development,
                and many other technology related sectors. Experienced in
                developing innovative website concepts, managing projects, and
                skilled in many Computer Science software and languages. Able to
                quickly adapt in new environment, collaborating with others, and
                solving problems with efficiency.
              </p>
              <div className="about-info">
                <div className="info-item">
                  <User className="w-6 h-6 info-icon" />
                  <span>Austin Oswald Tjokrohandoko</span>
                </div>
                <div className="info-item">
                  <Calendar className="w-6 h-6 info-icon" />
                  <span>20 Tahun</span>
                </div>
                <div className="info-item">
                  <MapPin className="w-6 h-6 info-icon" />
                  <span>Alam Sutera, Tangerang, Indonesia</span>
                </div>
                <div className="info-item">
                  <Bike className="w-6 h-6 info-icon" />
                  <span>Sports Lover</span>
                </div>
              </div>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <div className="card-header">
                  <BookOpen className="w-8 h-8 card-icon" />
                  <h3 className="card-title">Education</h3>
                </div>
                <p className="card-content">
                  Undergraduate Computer Science Student
                </p>
                <p className="card-highlight">
                  Binus University ( 2023 - Present )
                </p>
              </div>
              <div className="about-card">
                <div className="card-header">
                  <Award className="w-8 h-8 card-icon" />
                  <h3 className="card-title">Sertifikasi</h3>
                </div>
                <ul className="card-list">
                  <li>• 3rd Winner 14th ICP Hackathon Indonesia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">
            Skills & <span className="highlight">Expertise</span>
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <div className="skill-progress">
                  <div className="progress-header">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link github">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.live} className="project-link live">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">
            Work Experience <span className="highlight"> & Achievements</span>
          </h2>
          <div className="experience-container">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-content">
                  <div className="timeline">
                    <div className="timeline-dot"></div>
                    {index !== experiences.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="experience-card">
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-role">{exp.role}</h3>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="experience-skills">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="experience-skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="contact-grid">
            {/* Left side: Contact info */}
            <div className="contact-info">
              <h3>Let's Collaborate !</h3>
              <p className="contact-description">
                "Have an interesting project or want to discuss about
                technology? Don't hesitate to contact me. I'm always open to new
                opportunities and exciting collaborations."
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="w-6 h-6 contact-icon" />
                  <span>austinoswaldtjokrohandoko2004@email.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="w-6 h-6 contact-icon" />
                  <span>+62 819-0437-3725</span>
                </div>
                <div className="contact-item">
                  <MapPin className="w-6 h-6 contact-icon" />
                  <span>Tangerang, Banten</span>
                </div>
              </div>
            </div>

            {/* Right side: Contact form */}
            <div className="portfolio-preview">
              <h3>Featured Projects</h3>
              <div className="project-list">
                <div className="project-card">
                  <h4>Nusantara Education Partners</h4>
                  <p>
                    Nusantara Education Partners is a platform dedicated to
                    fostering educational excellence in Indonesia through
                    collaborative partnerships, tailored programs, and strategic
                    support services.
                  </p>
                </div>
                <div className="project-card">
                  <h4>LXRe</h4>
                  <p>
                    Auction Based Websites that was build with using React, amd
                    also Motoko for the blockchain experience..
                  </p>
                </div>
                <div className="project-card">
                  <h4>Relapse Predictor</h4>
                  <p>
                    A Websites that will predict Schizoprenia disease based on
                    machine learning prediction.
                  </p>
                </div>
              </div>
              <a href="#projects" className="btn">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Austin Oswald Tjokrohandoko. Made using React & CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
