import React from 'react';

const stats = [
  { value: '7+', label: 'Projects Experience' },
  { value: '4', label: 'Research Publications' },
  { value: '1', label: 'Workshops' },
  { value: '1', label: 'Erasmus Exchange' },
];

const Stats = () => (
  <div className="bg-[#18171F] py-12">
    <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center">
          <div className="text-4xl font-extrabold text-yellow-500 mb-2">{stat.value}</div>
          <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Stats; 