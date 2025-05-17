import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Research from './components/Research';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Volunteering from './components/Volunteering';
import Awards from './components/Awards';

function App() {
  return (
    <div className="font-sans bg-[#10111A] text-white min-h-screen">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="stats"><Stats /></section>
        <section id="research"><Research /></section>
        <section id="work"><WorkExperience /></section>
        <section id="projects"><Projects /></section>
        <section id="volunteering"><Volunteering /></section>
        <section id="awards"><Awards /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App; 