import React from 'react';

const education = [
  {
    degree: 'B.Sc. in CSE',
    school: 'Daffodil International University',
    years: '2022–2026',
    gpa: 'GPA: 3.92/4.00',
  },
  {
    degree: 'Erasmus Semester Exchange Program',
    school: 'Istanbul Kültür University, Turkey',
    years: 'Feb 2025 - Jun 2025',
    gpa: '',
  },
  {
    degree: 'HSC in Science',
    school: 'Notre Dame College',
    years: '2018–2020',
    gpa: 'GPA: 5.00/5.00',
  },
];

const About = () => (
  <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12">
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-6"></div>
      <p className="text-gray-300 mb-4">
        An enthusiastic Computer Science undergraduate with hands-on experience in Deep Learning, IoT, and AI-powered solutions. Passionate about building real-world applications using multimodal AI frameworks.
      </p>
      <p className="text-gray-400">
        With a strong background in Python, C/C++, and MySQL, I've proven success in collaborative projects and research publications. My goal is to leverage cutting-edge AI technologies to solve complex problems and create impactful solutions that make a difference.
      </p>
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-4">Education</h3>
      <div className="flex flex-col gap-4">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-[#18192A] rounded-lg p-5 shadow border border-[#23243a] flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-white">{edu.degree}</div>
              <div className="text-yellow-400 font-medium">{edu.school}</div>
              <div className="text-gray-400 text-sm">{edu.years}</div>
            </div>
            <div className="text-gray-300 font-semibold mt-2 md:mt-0">{edu.gpa}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About; 