import React, { useEffect, useState, useMemo } from 'react';
import profileImage from '../assets/profile_picture.png';
import resume from '../assets/resume.pdf';
import BlurText from './animations/BlurText';

const nameParts = [
  { text: 'Rittik ', className: 'text-white' },
  { text: 'Chandra ', className: 'text-yellow-500' },
  { text: 'Das ', className: 'text-yellow-500' },
  { text: 'Turjy', className: 'text-white' },
  { text: '.', className: 'text-white' },
];

const fullName = nameParts.map(part => part.text).join('');

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (typed.length < fullName.length) {
      const timeout = setTimeout(() => {
        setTyped(fullName.slice(0, typed.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [typed, done]);

  const display = useMemo(() => {
    const result = [];
    let count = 0;
    for (let i = 0; i < nameParts.length; i++) {
      const part = nameParts[i];
      const nextCount = count + part.text.length;
      if (typed.length > count) {
        result.push(
          <span key={i} className={part.className}>
            {typed.slice(count, Math.min(nextCount, typed.length))}
          </span>
        );
      }
      count = nextCount;
    }
    return result;
  }, [typed]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto bg-[#10111A] text-white">
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          {display}
          <span className="text-yellow-500">{!done && '|'}</span>
        </h1>
        <div className="h-1 w-16 bg-yellow-500 mb-4"></div>
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-300">
          Data Scientist & Lecturer
        </h2>
        <BlurText
          text="A Computer Science graduate, researcher, and Lecturer at Daffodil International University with hands-on experience in Deep Learning, IoT, and AI-powered solutions."
          delay={100}
          animateBy="words"
          direction="top"
          className="mb-8 text-lg text-gray-300 max-w-xl"
        />
        <div className="flex gap-4">
          <a 
            href="#research" 
            className="px-6 py-3 bg-yellow-500 text-[#10111A] font-semibold rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:scale-105"
          >
            Explore My Work
          </a>
          <a 
            href={resume} 
            download="Rittik_Chandra_Das_Turjy_CV.pdf"
            className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-[#10111A] transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:scale-105 font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="w-80 h-80 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:scale-105" 
        />
      </div>
    </div>
  );
};

export default Hero; 