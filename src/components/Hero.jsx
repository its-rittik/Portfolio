import React from 'react';

const Hero = () => (
  <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
    <div className="flex-1 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Rittik <span className="text-yellow-500">Chandra Das</span> Turjy.
      </h1>
      <div className="h-1 w-16 bg-yellow-500 mb-4"></div>
      <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-300">
        Data Scientist 
      </h2>
      <p className="mb-8 text-gray-400 max-w-xl">
        An enthusiastic Computer Science undergraduate with hands-on experience in Deep Learning, IoT, and AI-powered solutions.
      </p>
      <div className="flex gap-4">
        <a href="#research" className="px-6 py-3 bg-yellow-500 text-[#10111A] font-semibold rounded hover:bg-yellow-600 transition-colors">Explore My Work</a>
        <a href="/assets/resume.pdf" download className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-[#10111A] transition-colors font-semibold">Download CV</a>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img src="\assets\profile_picture.png" alt="Profile" className="w-80 h-80 object-cover rounded-2xl shadow-lg" />
    </div>
  </div>
);

export default Hero; 