import React from 'react';

const skills = {
  Programming: ['Python', 'C/C++', 'SQL', 'MySQL'],
  'Libraries/Frameworks': ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Scikit-learn', 'Seaborn'],
  Tools: ['MQTT', 'Paho', 'PythonAnywhere', 'Git', 'GitHub'],
  Other: ['Data Structures', 'Algorithms', 'Deep Learning', 'IoT Integration'],
};

const Skills = () => (
  <div className="max-w-6xl mx-auto px-8 py-16">
    <h2 className="text-4xl font-bold mb-4">Skills</h2>
    <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-bold mb-2 text-yellow-400">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span key={item} className="bg-[#23243a] text-white px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills; 