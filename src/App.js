import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;