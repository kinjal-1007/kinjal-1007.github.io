import { useContext, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience';
import Activity from './components/Activity/Activity';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <NavBar />
      <Intro />
      <Experience />
      <Activity />
      <Skills />
      <Projects />
      <Achievements />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
