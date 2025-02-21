// src/App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profilePic from './profile.jpg'; // Ensure this image exists in src/

// MUI Imports
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  Button,
  Typography
} from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState('experience'); // Use string for original header navigation
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Original Header */}
      <header className="App-header">
        <h1>Joshua Myers</h1>
        <p>MEng Computer Science, Durham University (2022–2026)</p>
        <button onClick={toggleMode} className="mode-toggle improved">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Original Navigation */}
      <nav className="App-nav">
        <ul>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>
            About
          </li>
          <li className={activeTab === 'work' ? 'active' : ''} onClick={() => setActiveTab('work')}>
            Work
          </li>
          <li className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>
            Experience
          </li>
          <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
            Contact
          </li>
        </ul>
      </nav>

      <AnimatePresence mode="wait">
        {activeTab === 'about' && (
          <motion.section
            key="about"
            className="tab-content"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <About darkMode={darkMode} />
          </motion.section>
        )}

        {activeTab === 'work' && (
          <motion.section
            key="work"
            className="tab-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            <Work setSelectedProject={setSelectedProject} darkMode={darkMode} />
          </motion.section>
        )}

        {activeTab === 'experience' && (
          <motion.section
            key="experience"
            className="tab-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Experience darkMode={darkMode} />
          </motion.section>
        )}

        {activeTab === 'contact' && (
          <motion.section
            key="contact"
            className="tab-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Contact darkMode={darkMode} />
          </motion.section>
        )}
      </AnimatePresence>

      {selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="modal-content" sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: darkMode ? '#fff' : '#333' }}>
                {selectedProject.title}
              </Typography>
              <Typography sx={{ color: darkMode ? '#ccc' : '#666', mb: 2 }}>
                {selectedProject.description}
              </Typography>
              <Box sx={{ color: darkMode ? '#ccc' : '#444' }}>{selectedProject.details}</Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setSelectedProject(null)}
                sx={{ mt: 2 }}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

const About = ({ darkMode }) => (
  <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
      About Me
    </Typography>
    <Card sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        image={profilePic}
        alt="Joshua Myers"
        sx={{ height: 250, width: 250, borderRadius: '20%', margin: '1rem auto' }}
      />
      <CardContent>
        <Typography sx={{ color: darkMode ? '#ccc' : '#444', mb: 2 }}>
          I am a former Software Development Intern at Ansys and a current MEng Computer Science student at Durham University (2022–2026). I aspire to excel as a software engineer and quantitative analyst, with expertise in algorithmic trading, machine learning, and software development.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
          Skills
        </Typography>
        <Divider sx={{ my: 1, backgroundColor: darkMode ? '#555' : '#ddd' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 45%', minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
              Languages
            </Typography>
            <List dense>
              {['Python (6 years)', 'C++ (4 years)', 'JavaScript (4 years)', 'HTML/CSS (3 years)', 'MATLAB (2 years)', 'Delphi (2 years)', 'Haskell (1 year)'].map((skill) => (
                <ListItem key={skill}>
                  <ListItemText primary={skill} primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: '1 1 45%', minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
              Libraries & Frameworks
            </Typography>
            <List dense>
              {['TensorFlow, Keras, PyTorch', 'OpenCV', 'OpenGL, WebGL', 'Pandas, Numpy, Sci-kit learn, Seaborn', 'Node.js, React, Tailwind'].map((lib) => (
                <ListItem key={lib}>
                  <ListItemText primary={lib} primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333', mt: 2 }}>
          University Modules
        </Typography>
        <Divider sx={{ my: 1, backgroundColor: darkMode ? '#555' : '#ddd' }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: '1 1 30%', minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
              Year 1
            </Typography>
            <List dense>
              {['Algorithms and Data Structures', 'Computational Thinking', 'Computer Systems', 'Mathematics for Computer Science', 'Programming (Black)', 'Discrete Mathematics'].map((module) => (
                <ListItem key={module}>
                  <ListItemText primary={module} primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
              Year 2
            </Typography>
            <List dense>
              {['Networks and Systems', 'Programming Paradigms', 'Theory of Computation', 'Artificial Intelligence', 'Data Science', 'Software Engineering'].map((module) => (
                <ListItem key={module}>
                  <ListItemText primary={module} primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
              Year 3
            </Typography>
            <List dense>
              {['Project Preparation', 'Compiler Design', 'Computer Vision', 'Cryptography', 'Deep Learning', 'Natural Computing Algorithms', 'Parallel Scientific Computing', 'Recommender Systems', 'Reinforcement Learning'].map((module) => (
                <ListItem key={module}>
                  <ListItemText primary={module} primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

const Work = ({ setSelectedProject, darkMode }) => {
  const projects = [
    {
      title: 'Neural Network Plays Rhythm Game',
      description: 'A convolutional neural network (CNN) to automate rhythm game gameplay with over 90% accuracy.',
      details: (
        <>
          <Typography>Designed a CNN architecture using Python, TensorFlow, Keras, and OpenCV to automate gameplay with a performance of 90%+ accuracy on unseen data.</Typography>
          <List dense>
            <ListItem><ListItemText primary="Engineered data preprocessing pipelines with OpenCV for optimal training input." /></ListItem>
            <ListItem><ListItemText primary="Applied advanced masking techniques to enhance model generalization." /></ListItem>
            <ListItem><ListItemText primary="Optimized computational performance with pandas, reducing processing time." /></ListItem>
          </List>
          <Typography><strong>Technologies:</strong> Python, TensorFlow, Keras, OpenCV, Pandas</Typography>
        </>
      ),
    },
    {
      title: 'Durham SpaceFlight',
      description: 'Co-led the payload team for a national rocketry competition, achieving a top 10% placement.',
      details: (
        <>
          <Typography>Co-led the payload team in designing a rocket and programming a flight computer for the National Rocketry Competition.</Typography>
          <List dense>
            <ListItem><ListItemText primary="Designed rocket with an apogee of 250m using OpenRocket and KiCad." /></ListItem>
            <ListItem><ListItemText primary="Programmed flight computer and assisted with live GPS tracking for a high-altitude balloon." /></ListItem>
            <ListItem><ListItemText primary="Placed in the top 10% among 100+ teams, including postgraduate competitors." /></ListItem>
          </List>
          <Typography><strong>Technologies:</strong> C, OpenRocket, KiCad</Typography>
        </>
      ),
    },
    {
      title: 'Shortest Vector Problem',
      description: 'Optimized an LLL reduction algorithm in C++ for lattice reduction, achieving a 1000x improvement.',
      details: (
        <>
          <Typography>Implemented and optimized a cutting-edge LLL reduction algorithm from a research paper to solve the shortest vector problem in lattice reduction.</Typography>
          <List dense>
            <ListItem><ListItemText primary="Utilized optimization techniques like search space pruning and extensive profiling." /></ListItem>
            <ListItem><ListItemText primary="Achieved over a 1000x performance improvement over a naive brute-force implementation." /></ListItem>
          </List>
          <Typography><strong>Technologies:</strong> C++</Typography>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
        Projects
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: darkMode ? '#2c2c2c' : '#fff',
              boxShadow: 3,
              borderRadius: 2,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'translateY(-5px)' },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
                {project.title}
              </Typography>
              <Typography sx={{ color: darkMode ? '#ccc' : '#666', mb: 2 }}>
                {project.description}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setSelectedProject(project)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

const Experience = ({ darkMode }) => (
  <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
      Professional Experience
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
            Quantitative Analyst & Team Supervisor
          </Typography>
          <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
            Durham University Finance Society, Durham, UK
            <Typography component="span" sx={{ float: 'right', color: darkMode ? '#999' : '#888' }}>
              October 2023 – June 2024
            </Typography>
          </Typography>
          <Divider sx={{ my: 1, backgroundColor: darkMode ? '#555' : '#ddd' }} />
          <List dense>
            <ListItem>
              <ListItemText primary="Supervised a team in developing algorithmic trading strategies using the QuantConnect platform, achieving 1st place among 10 competing teams." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Designed and implemented a Keras-based trading algorithm processing over 500,000 data points daily, enhancing decision-making through real-time market trend analysis." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Applied data-driven optimization techniques to refine strategies, improving performance and adaptability in dynamic financial markets." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
            Software Engineering Project Lead
          </Typography>
          <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
            IBM, Durham, UK
            <Typography component="span" sx={{ float: 'right', color: darkMode ? '#999' : '#888' }}>
              October 2023 – June 2024
            </Typography>
          </Typography>
          <Divider sx={{ my: 1, backgroundColor: darkMode ? '#555' : '#ddd' }} />
          <List dense>
            <ListItem>
              <ListItemText primary="Directed a team of 7 in the development of a full-stack augmented reality (AR) application for Android, integrating Java, ARCore, Rust, and PostgreSQL." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Collaborated with IBM stakeholders to align project deliverables with client specifications, ensuring successful deployment under stringent deadlines." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Leveraged full-stack technologies to deliver immersive AR experiences, enhancing user engagement and functionality." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
            Software Engineering Intern
          </Typography>
          <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
            Ansys, Wrexham, UK
            <Typography component="span" sx={{ float: 'right', color: darkMode ? '#999' : '#888' }}>
              June 2023 – September 2023
            </Typography>
          </Typography>
          <Divider sx={{ my: 1, backgroundColor: darkMode ? '#555' : '#ddd' }} />
          <List dense>
            <ListItem>
              <ListItemText primary="Developed and optimized software solutions for Renault’s sophisticated engine architecture using Delphi within the Azure DevOps pipeline." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contributed over 30 pull requests, successfully merged into the main release, enhancing system reliability and performance." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Engaged with key stakeholders to ensure software met rigorous engineering requirements, demonstrating proficiency in debugging and managing large codebases." primaryTypographyProps={{ color: darkMode ? '#ccc' : '#444' }} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

const Contact = ({ darkMode }) => (
  <Box sx={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
      Contact Me
    </Typography>
    <Card sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography sx={{ color: darkMode ? '#ccc' : '#444', mb: 2 }}>
          Email: <a href="mailto:jtmyerswork@gmail.com" style={{ color: darkMode ? '#90caf9' : '#1976d2' }}>jtmyerswork@gmail.com</a>
        </Typography>
        <form action="https://formspree.io/f/yourFormId" method="POST">
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            required
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: darkMode ? '#bbb' : '#666' } }}
            sx={{ input: { color: darkMode ? '#ccc' : '#444' }, fieldset: { borderColor: darkMode ? '#555' : '#ddd' } }}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="_replyto"
            type="email"
            required
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: darkMode ? '#bbb' : '#666' } }}
            sx={{ input: { color: darkMode ? '#ccc' : '#444' }, fieldset: { borderColor: darkMode ? '#555' : '#ddd' } }}
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            required
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: darkMode ? '#bbb' : '#666' } }}
            sx={{ textarea: { color: darkMode ? '#ccc' : '#444' }, fieldset: { borderColor: darkMode ? '#555' : '#ddd' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  </Box>
);

export default App;