import React from 'react';

const awards = [
  {
    title: 'Best Library User',
    org: 'Daffodil International University',
    year: '2023',
  },
];

const Awards = () => (
  <div className="max-w-6xl mx-auto px-8 py-16">
    <h2 className="text-4xl font-bold mb-4">Awards</h2>
    <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
    <div className="flex flex-col gap-8">
      {awards.map((award, idx) => (
        <div key={idx} className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-yellow-400 mb-1">{award.title}</span>
            <span className="text-gray-300">{award.org}</span>
          </div>
          <span className="text-yellow-500 text-lg font-semibold">{award.year}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Awards; 