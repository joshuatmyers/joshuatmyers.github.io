// src/App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profilePic from './profile.jpg';
import Work from './Work'; // Import the Work component

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <h1>Joshua Myers</h1>
        <p>MEng Computer Science, Durham University (2022–2026)</p>
        <button onClick={toggleMode} className="mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <nav className="App-nav">
        <ul>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About</li>
          <li className={activeTab === 'work' ? 'active' : ''} onClick={() => setActiveTab('work')}>Work</li>
          <li className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</li>
          <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contact</li>
        </ul>
      </nav>

      <AnimatePresence exitBeforeEnter>
        {activeTab === 'about' && (
          <motion.section
            key="about"
            className="tab-content"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <About />
          </motion.section>
        )}

        {activeTab === 'work' && (
          <motion.section
            key="work"
            className="tab-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
          >
            <Work setSelectedProject={setSelectedProject} />
          </motion.section>
        )}

        {activeTab === 'experience' && (
          <motion.section
            key="experience"
            className="tab-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
          >
            <Experience />
          </motion.section>
        )}

        {activeTab === 'contact' && (
          <motion.section
            key="contact"
            className="tab-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <Contact />
          </motion.section>
        )}
      </AnimatePresence>

      {selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

const About = () => (
  <section className="home-subsection">
    <img src={profilePic} alt="Joshua Myers" className="profile-picture" />
    <h2>About Me</h2>
    <p>
      I am an ex software development intern at Ansys. I am an aspiring software engineer and quantitative analyst with experience in algorithmic trading, machine learning, and software development.
    </p>

    <h3>Skills</h3>
    <h4>Languages</h4>
    <ul className="skills-list">
      <li>Python (6 years)</li>
      <li>C++ (4 years)</li>
      <li>JavaScript (4 years)</li>
      <li>HTML/CSS (3 years)</li>
      <li>MATLAB (2 years)</li>
      <li>Delphi (2 years)</li>
      <li>Haskell (1 year)</li>
    </ul>

    <h4>Libraries & Frameworks</h4>
    <ul className="skills-list">
      <li>TensorFlow, Keras, PyTorch</li>
      <li>OpenCV</li>
      <li>OpenGL, WebGL</li>
      <li>Pandas, Numpy, Sci-kit learn, Seaborn</li>
      <li>Node.js, React, Tailwind</li>
    </ul>

    <h3>University Modules</h3>
    <h4>Year 1</h4>
    <ul>
      <li>Algorithms and Data Structures</li>
      <li>Computational Thinking</li>
      <li>Computer Systems</li>
      <li>Mathematics for Computer Science</li>
      <li>Programming (Black)</li>
      <li>Discrete Mathematics</li>
    </ul>
    <h4>Year 2</h4>
    <ul>
      <li>Networks and Systems</li>
      <li>Programming Paradigms</li>
      <li>Theory of Computation</li>
      <li>Artificial Intelligence</li>
      <li>Data Science</li>
      <li>Software Engineering</li>
    </ul>
    <h4>Year 3</h4>
    <ul>
      <li>Project Preparation</li>
      <li>Compiler Design</li>
      <li>Computer Vision</li>
      <li>Cryptography</li>
      <li>Deep Learning</li>
      <li>Natural Computing Algorithms</li>
      <li>Parallel Scientific Computing</li>
      <li>Recommender Systems</li>
      <li>Reinforcement Learning</li>
    </ul>
  </section>
);

const Experience = () => (
  <section className="home-subsection experience-container">
    <h2>Experience</h2>
    <div className="experience-list">
      <div className="experience-item">
        <h3>Quantitative Analyst & Team Supervisor</h3>
        <p className="experience-company">Durham University Finance Society (2023-2024)</p>
        <p>Led a team developing trading strategies that outperformed the S&P 500.</p>
      </div>
      <div className="experience-item">
        <h3>Software Engineering Project</h3>
        <p className="experience-company">IBM (2023-2024)</p>
        <p>Led a team developing an AR Android application using Java, ARCore, and Rust.</p>
      </div>
      <div className="experience-item">
        <h3>Software Engineering Intern</h3>
        <p className="experience-company">Ansys (2023)</p>
        <p>Developed software for Renault, contributed 30+ pull requests.</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="home-subsection">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:jtmyerswork@gmail.com">jtmyerswork@gmail.com</a></p>
    <form className="contact-form" action="https://formspree.io/f/yourFormId" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="_replyto" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default App;
