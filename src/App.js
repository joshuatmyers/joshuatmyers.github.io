import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profilePic from './profile.jpg'; // Ensure this image exists in src/

// Images for projects (replace with actual project images)
import rhythmGameImg from './profile.jpg';
import spaceflightImg from './profile.jpg';
import svpImg from './profile.jpg';

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
  Typography,
  Grid,
  Chip,
} from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="App-header">
        <h1>Joshua Myers</h1>
        <p>MEng Computer Science, Durham University (2022–2026)</p>
        <button onClick={toggleMode} className="mode-toggle improved">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Navigation */}
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

      {/* Tab Content */}
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

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="modal-content enhanced" sx={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff' }}>
            <CardMedia
              component="img"
              image={selectedProject.image}
              alt={selectedProject.title}
              sx={{ height: 300, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ color: darkMode ? '#fff' : '#333', mb: 1 }}>
                {selectedProject.title}
              </Typography>
              <Typography sx={{ color: darkMode ? '#ccc' : '#666', mb: 2 }}>
                {selectedProject.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
                  Highlights:
                </Typography>
                <ul style={{ paddingLeft: '1.5rem', color: darkMode ? '#ccc' : '#444' }}>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: darkMode ? '#bbb' : '#666' }}>
                  Technologies:
                </Typography>
                {selectedProject.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      mr: 1,
                      mt: 1,
                      backgroundColor: darkMode ? '#555' : '#e0e0e0',
                      color: darkMode ? '#fff' : '#333',
                    }}
                  />
                ))}
              </Box>
              {selectedProject.github ? (
                <Button
                  variant="contained"
                  color="primary"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mr: 2 }}
                >
                  View on GitHub
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  href={`mailto:jtmyerswork@gmail.com?subject=Request%20Code%20for%20${encodeURIComponent(selectedProject.title)}`}
                  sx={{ mr: 2 }}
                >
                  Request Code
                </Button>
              )}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setSelectedProject(null)}
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
              {['TensorFlow, Keras, PyTorch', 'OpenCV', 'OpenGL, WebGL', 'Pandas, Numpy, Sci-kit learn, Seaborn', 'Node.js, React, Tailwind', 'OpenMP'].map((lib) => (
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
  const completedProjects = [
    {
      title: 'Neural Network Plays Rhythm Game',
      description: 'A convolutional neural network (CNN) automating rhythm game gameplay with over 90% accuracy.',
      image: rhythmGameImg,
      github: 'https://github.com/<username>/rhythm-game-cnn', // Replace <username>
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas'],
      highlights: [
        'Designed CNN architecture achieving 90%+ accuracy on unseen data.',
        'Engineered preprocessing pipelines with OpenCV for optimal input.',
        'Optimized performance with Pandas, reducing processing time.',
      ],
    },
    {
      title: 'Durham SpaceFlight',
      description: 'Co-led payload team for a national rocketry competition, placing in the top 10%.',
      image: spaceflightImg,
      github: null, // Replace <username>
      technologies: ['C', 'OpenRocket', 'KiCad'],
      highlights: [
        'Designed rocket with 250m apogee using OpenRocket and KiCad.',
        'Programmed flight computer with live GPS tracking.',
        'Achieved top 10% placement among 100+ teams.',
      ],
    },
    {
      title: 'Shortest Vector Problem',
      description: 'Optimized LLL reduction algorithm in C++ for lattice reduction, with a 1000x improvement.',
      image: svpImg,
      github: 'https://github.com/<username>/shortest-vector-problem', // Replace <username>
      technologies: ['C++'],
      highlights: [
        'Implemented LLL algorithm with search space pruning.',
        'Achieved 1000x performance boost over naive brute-force.',
        'Profiled extensively for optimization.',
      ],
    },
    {
      title: 'Parallel N-Body Simulation (Vectorization)',
      description: 'Optimized an N-body simulation in C++ with vectorization, achieving a 25% speedup.',
      image: profilePic, // Replace with actual project image
      github: null, // Replace <username>
      technologies: ['C++', 'VTune', 'GCC', 'OpenMP', 'AVX'],
      highlights: [
        'Profiled with VTune to target force_calculation and update_body hotspots.',
        'Used pointer dereferencing and loop merging for effective vectorization.',
        'Reduced runtime from 8.40s to 6.26s for 1000 bodies.',
      ],
    },
    {
      title: 'Discrete Logarithm Solver',
      description: 'Implemented a hybrid algorithm combining Pohlig-Hellman and Pollard-Rho for discrete logarithms.',
      image: profilePic, // Replace with actual project image
      github: null, // Replace <username>
      technologies: ['C++', 'Pollard-Rho', 'Pohlig-Hellman', 'CRT'],
      highlights: [
        'Combined Pohlig-Hellman and Pollard-Rho for efficient sub-problem solving.',
        'Reduced runtime from O(p) to O(p_i^c_i) for p-smooth factors.',
        'Handled primes up to 50 digits with probabilistic factorization.',
      ],
    },
    {
      title: 'Parallel N-Body Simulation (Multithreading)',
      description: 'Parallelized an N-body simulation on Hamilton supercomputer, achieving up to 48x speedup.',
      image: profilePic, // Replace with actual project image
      github: null, // Replace <username>
      technologies: ['C++', 'OpenMP', 'AVX2', 'VTune'],
      highlights: [
        'Parallelized force calculations with OpenMP on up to 64 cores.',
        'Achieved 48.59x speedup for 8000 particles, with strong scaling.',
        'Optimized to minimize data races and overheads.',
      ],
    },
    {
      title: 'Efficient CNN and DCGAN Models',
      description: 'Developed lightweight CNN (86% accuracy) and DCGAN (FID 57.49) for image tasks.',
      image: profilePic, // Replace with actual project image
      github: null, // Replace <username>
      technologies: ['Python', 'PyTorch', 'EfficientNet', 'MobileNet', 'DCGAN'],
      highlights: [
        'Designed CNN with MBConv blocks for 86% accuracy on addNIST.',
        'Built DCGAN with FID 57.49 on CIFAR-100, using ConvTranspose2d.',
        'Optimized training with Adam, OneCycleLR, and label smoothing.',
      ],
    },
    {
      title: 'Multi-User Chat and File Server',
      description: 'Built a multi-threaded TCP server for real-time chat and file sharing between clients.',
      image: profilePic, // Replace with actual project image (e.g., screenshot of chat or file transfer)
      github: 'https://github.com/<username>/chat-file-server', // Replace <username>
      technologies: ['Python', 'Socket', 'Threading', 'Logging'],
      highlights: [
        'Implemented broadcast and unicast messaging with command-line interface.',
        'Enabled file listing and downloading from server-side storage.',
        'Logged all interactions (e.g., connections, messages) to a server-side log file.',
      ],
    },
  ];

  const inProgressProjects = [
    {
      title: 'Algorithmic Trading Platform',
      description: 'Creating a real-time trading platform with machine learning predictions.',
      image: profilePic, // Replace with actual project image
      github: null, // Replace <username>
      technologies: ['Python', 'C++', 'Pandas', 'PyTorch'],
      highlights: [
        'Integrating live market data feeds and ML-based trade signals.',
        'Currently refining backtesting module for strategy evaluation.',
        'Target: deployable prototype by end of term.',
      ],
    },
  ];

  const renderProjectSection = (title, projects) => (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333', mt: 4 }}
      >
        {title}
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                sx={{
                  backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                  boxShadow: 3,
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333', mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: darkMode ? '#ccc' : '#666', mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: darkMode ? '#555' : '#e0e0e0',
                          color: darkMode ? '#fff' : '#333',
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}
      >
        Projects
      </Typography>
      {renderProjectSection('Completed Projects', completedProjects)}
      {renderProjectSection('In-Progress Projects', inProgressProjects)}
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