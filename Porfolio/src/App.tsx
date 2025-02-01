import React, { useState } from 'react';
import { ThemeProvider, createTheme, useTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Divider,
  TextField,
  Stack
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  FaBrain, 
  FaCode, 
  FaTerminal,  
  FaRegCommentDots, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaHome,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaThumbsUp,
  FaDownload,
  FaBars,
  FaPaperPlane
} from 'react-icons/fa';
import { GoCpu } from 'react-icons/go';
import { LuSunDim } from 'react-icons/lu';
import { IoMoonOutline } from 'react-icons/io5';


const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#14b8a6' : '#3B82F6', // Softer teal for dark mode, calming blue for light mode
    },
    background: {
      default: mode === 'dark' ? '#121826' : '#f1f5f9', // More pleasant backgrounds
      paper: mode === 'dark' ? '#1e293b' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#e2e8f0' : '#1e293b', // Slightly lighter text in dark mode
      secondary: mode === 'dark' ? '#94a3b8' : '#475569', // Less harsh secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif', // More modern typography
    h1: {
      fontFamily:'Montserrat',
      fontSize: '3.6rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,

    },
    h3:{
      fontFamily: 'monospace',
      fontSize:"1.6rem",
      fontWeight:5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6, // Better spacing for readability
    },
  },
  shape: {
    borderRadius: 12, // Slightly rounded edges for a softer look
  },
});


const sections = [
  { 
    id: 'home', 
    label: 'Home', 
    icon: <FaHome size={24} />, 
    bg: {
      dark: 'https://raw.githubusercontent.com/pkkk19/Updated-Portfolio/refs/heads/main/Porfolio/src/assets/hero-bg.jpg',
      light: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'about', 
    label: 'About Me', 
    icon: <FaUser size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: <FaCode size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'experience', 
    label: 'Experience', 
    icon: <FaBriefcase size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'blogs', 
    label: 'Blogs', 
    icon: <FaBookOpen size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'recommendations', 
    label: 'Recommendations', 
    icon: <FaThumbsUp size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: <FaEnvelope size={24} />, 
    bg: {
      dark: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      light: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  },
];

const DRAWER_WIDTH = 240;

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const isMobile = useMediaQuery('(max-width:900px)');
  const theme = getTheme(mode);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      background: theme.palette.background.paper,
      backgroundImage: mode === 'dark' 
      ? 'linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)' // Deep navy gradient
      : 'linear-gradient(180deg, rgba(241, 245, 249, 0.51) 0%, rgba(219, 234, 254, 0.06) 100%)', // Light blue tint
    }}>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h3" sx={{ position: 'relative' }}>Prabesh Kumar</Typography>
  <Typography variant="h3" sx={{ position: 'relative' }}>Shrestha</Typography>
</Box>

      <Divider />
      <List>
        {sections.map((section) => (
          <ListItem 
            button 
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            selected={activeSection === section.id}
            sx={{
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main + '20',
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            <ListItemIcon>{section.icon}</ListItemIcon>
            <ListItemText primary={section.label} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, display: 'flex', mt: 'auto' }}>
      <IconButton
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        sx={{
          position: "absolute",
          bottom: 15,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 45,
          height: 45,
          borderRadius: '50%',
          backgroundColor: mode === 'dark' ? '#ffffff' : '#000000', // Base background color
          color: mode === 'dark' ? '#000000' : '#ffffff',           // Base icon color
          boxShadow: `
            0px 4px 6px rgba(0, 0, 0, 0.1),
            0px 1px 3px rgba(0, 0, 0, 0.08) inset,
            0px -1px 3px rgba(255, 255, 255, 0.1) inset
          `,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateX(-50%) scale(1.05)', // Scale effect only
            backgroundColor: mode === 'dark' ? '#ffffff' : '#000000', // Force same background
            color: mode === 'dark' ? '#000000' : '#ffffff',           // Force same icon color
            boxShadow: `
              0px 6px 8px rgba(0, 0, 0, 0.15),
              0px 2px 4px rgba(0, 0, 0, 0.1) inset,
              0px -2px 4px rgba(255, 255, 255, 0.15) inset
            `,
          },
          '&:focus': {
            outline: '2px solidrgb(19, 34, 57)',
          },
        }}
      >
        {mode === 'dark' ? <LuSunDim size={35} color="inherit" /> : <IoMoonOutline size={35} color="inherit" />}
      </IconButton>
    </Box>
    </Box>
  );

  const SectionContainer = ({ id, children }: { id: string, children: React.ReactNode }) => {
    const section = sections.find(s => s.id === id);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    
    return (
      <Box
        id={id}
        sx={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(180deg, ${
            isDark
              ? 'rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.49) 100%'
              : 'rgba(241, 245, 249, 0.54) 0%, rgba(219, 234, 254, 0.21) 100%'
          }), url(${section?.bg[isDark ? 'dark' : 'light']})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.5s ease-in-out',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    );
  };

  const getPaperBackground = (theme: Theme) => 
    theme.palette.mode === 'dark' 
      ? 'rgba(30, 41, 59, 0.8)'
      : 'rgba(255, 255, 255, 0.9)';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Box
          component="nav"
          sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
        >
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                '& .MuiDrawer-paper': { 
                  width: DRAWER_WIDTH,
                  boxSizing: 'border-box',
                },
              }}
            >
              {drawer}
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              sx={{
                '& .MuiDrawer-paper': { 
                  width: DRAWER_WIDTH,
                  boxSizing: 'border-box',
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          )}
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1100 }}
            >
              <FaBars />
            </IconButton>
          )}

          {/* Home Section */}
          <SectionContainer id="home">
            <AnimatePresence>
              <MotionBox
                component="header"
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      background: 'linear-gradient(45deg, #00f5d4 30%, #00b4d8 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                      textAlign: 'center',
                    }}
                  >
                    Hello, I'm a Computer Scientist
                  </Typography>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    sx={{ mb: 4, textAlign: 'center' }}
                  >
                    Specializing in Natural Language Processing
                  </Typography>
                </motion.div>
              </MotionBox>
            </AnimatePresence>
          </SectionContainer>

          {/* About Section */}
          <SectionContainer id="about">
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>About Me</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <MotionPaper
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    background: (theme) => getPaperBackground(theme),
                    backdropFilter: 'blur(10px)',
                    border: (theme) => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>Education</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FaBrain size={24} style={{ marginRight: '8px' }} />
                    <Typography>BSc Computer Science</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Focused on core computer science principles, algorithms, and software development
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaDownload />}
                    sx={{ mt: 3 }}
                    href="/path-to-your-cv.pdf"
                    download
                  >
                    Download CV
                  </Button>
                </MotionPaper>
              </Grid>
              <Grid item xs={12} md={6}>
                <MotionPaper
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    background: (theme) => getPaperBackground(theme),
                    backdropFilter: 'blur(10px)',
                    border: (theme) => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>Current Focus</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FaRegCommentDots size={24} style={{ marginRight: '8px' }} />
                    <Typography>Natural Language Processing</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Learning advanced NLP techniques, transformers, and language models
                  </Typography>
                </MotionPaper>
              </Grid>
            </Grid>
          </SectionContainer>

          {/* Projects Section */}
          <SectionContainer id="projects">
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>Projects</Typography>
            <Grid container spacing={4}>
              {[1, 2, 3].map((_, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      background: (theme) => getPaperBackground(theme),
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'
                      }`,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <FaCode size={32} />
                      <Typography variant="h6" sx={{ my: 2 }}>Project {index + 1}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of project {index + 1}
                      </Typography>
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* Experience Section */}
          <SectionContainer id="experience">
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>Experience</Typography>
            <Grid container spacing={4}>
              {[
                { icon: <FaCode size={32} />, title: 'Programming', desc: 'Proficient in multiple programming languages' },
                { icon: <FaTerminal size={32} />, title: 'Software Development', desc: 'Experience with modern development tools and practices' },
                { icon: <GoCpu size={32} />, title: 'Machine Learning', desc: 'Understanding of ML fundamentals and applications' },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      background: (theme) => getPaperBackground(theme),
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'
                      }`,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      {item.icon}
                      <Typography variant="h6" sx={{ my: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* Blogs Section */}
          <SectionContainer id="blogs">
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>Blogs</Typography>
            <Grid container spacing={4}>
              {[1, 2, 3].map((_, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      background: (theme) => getPaperBackground(theme),
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'
                      }`,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <FaBookOpen size={32} />
                      <Typography variant="h6" sx={{ my: 2 }}>Blog Post {index + 1}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of blog post {index + 1}
                      </Typography>
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* Recommendations Section */}
          <SectionContainer id="recommendations">
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>Recommendations</Typography>
            <Grid container spacing={4}>
              {[1, 2, 3].map((_, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      background: (theme) => getPaperBackground(theme),
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'
                      }`,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <FaThumbsUp size={32} />
                      <Typography variant="h6" sx={{ my: 2 }}>Recommendation {index + 1}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Recommendation text {index + 1}
                      </Typography>
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* Contact Section */}
          <SectionContainer id="contact">
          
            <Typography variant="h2" sx={{ mb: 4, color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white'  }}>Contact</Typography>
            <Grid container spacing={4} justifyContent="center">
              
              <Grid item xs={12} md={6}>
                <MotionPaper
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  sx={{ 
                    p: 4, 
                    background: (theme) => getPaperBackground(theme),
                    backdropFilter: 'blur(10px)',
                    border: (theme) => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                  }}
                >
                  <form onSubmit={handleFormSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        label="Name"
                        fullWidth
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<FaPaperPlane />}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </MotionPaper>
              </Grid>
              <Grid item xs={12}>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
    {[
      { label: 'GitHub', icon: <FaGithub /> },
      { label: 'LinkedIn', icon: <FaLinkedin /> },
      { label: 'Email', icon: <FaEnvelope /> },
    ].map(({ label, icon }) => (
      <Button
        key={label}
        variant="outlined"
        color="primary"
        startIcon={icon}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        sx={(theme) => ({
          color: theme.palette.mode === 'dark' ? 'white' : '#1e293b',
          borderColor: theme.palette.mode === 'dark' ? 'white' : '#1e293b',
          '&:hover': {
            backgroundColor:
              theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(30, 41, 59, 0.1)',
          },
        })}
      >
        {label}
      </Button>
    ))}
  </Box>
</Grid>

            </Grid>
          </SectionContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

export default App;