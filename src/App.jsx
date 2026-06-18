import "./App.css";
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

function App() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  const resumeRef = useRef();

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume({
        ...resume,
        photo: URL.createObjectURL(file),
      });
    }
  };

  const downloadPDF = () => {
    html2pdf().from(resumeRef.current).save("resume.pdf");
  };

  return (
    <div className="container">
      <h1 className="title">Resume Builder</h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#444",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Create a professional resume and download it instantly as PDF
      </p>

      <div className="wrapper">
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

          <textarea
            name="skills"
            placeholder="React, JavaScript, HTML, CSS"
            onChange={handleChange}
          />

          <textarea
            name="education"
            placeholder="Education"
            onChange={handleChange}
          />

          <textarea
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
          />

          <textarea
            name="projects"
            placeholder="Portfolio Website, E-commerce App..."
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            onChange={handleChange}
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            onChange={handleChange}
          />
        </div>

        <div className="preview" ref={resumeRef}>
          <div className="resume-header">
            {resume.photo && (
              <img
                src={resume.photo}
                alt="Profile"
                className="profile-pic"
              />
            )}

            <h2>{resume.name || "Your Name"}</h2>
            <p>{resume.email}</p>
            <p>{resume.phone}</p>
          </div>

          <h3>Skills</h3>

          <div className="skills">
            {resume.skills
              .split(",")
              .filter(Boolean)
              .map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.trim()}
                </span>
              ))}
          </div>

          <h3>Education</h3>
          <p>{resume.education}</p>

          <h3>Experience</h3>
          <p>{resume.experience}</p>

          <h3>Projects</h3>
          <p>{resume.projects}</p>

          <h3>LinkedIn</h3>
          <p>{resume.linkedin}</p>

          <h3>GitHub</h3>
          <p>{resume.github}</p>
        </div>
      </div>

      <br />

      <button onClick={downloadPDF}>
        Download Resume PDF
      </button>

      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noreferrer"
      >
        <button>Built for Digital Heroes</button>
      </a>

      <div className="footer">
        Ayushi Baliyan | baliyanayushi3@gmail.com
      </div>
    </div>
  );
}

export default App;