import React, { useState } from 'react';

const volunteering = [
  {
    type: 'Academic Volunteering',
    icon: '🧠',
    activities: [
      {
        title: 'Inside IoT: A Beginner Workshop on Hardware, Firmware, and Data Integration',
        role: 'Trainer and Speaker',
        org: 'Daffodil International University, IoT Lab',
        date: 'Nov 7, 12, 14, 17- 2024',
        participants: '150 Participants',
        contributions: [
          'Led sessions on MQTT data collection, feature engineering, and ML for IoT.',
          'Designed practical demonstrations, enabling students to implement real-world solutions.',
          'Contributed significantly to student engagement and workshop success.'
        ]
      }
    ]
  },
  {
    type: 'Creative / Leadership Volunteering',
    icon: '🎨',
    activities: [
      {
        title: 'Vice Chair, IEEE DIU SB WIE',
        date: 'March 2024 – Present',
        contributions: [
          'Spearheading initiatives to promote women in engineering and tech.',
          'Organizing seminars, competitions, and awareness programs.'
        ]
      },
      {
        title: 'Creative Team Leader, IEEE DIU SB WIE',
        date: 'March 2024 – January 2025',
        contributions: [
          'Leading design and media efforts for events and campaigns.',
          'Creating visual content and branding materials for technical and outreach events.'
        ]
      },
      {
        title: 'Campus Ambassador, Intel OpenAPI',
        date: 'January 2024 – January 2025',
        contributions: [
          "Promoting Intel's OpenAPI initiatives among university peers.",
          'Facilitating workshops and acting as the bridge between Intel and student developers.'
        ]
      }
    ]
  },
  {
    type: 'Humanitarian / Social Impact',
    icon: '🌱',
    activities: [
      {
        title: 'Campus Organizer, Environment Olympiad 2024',
        date: 'April 2, 2024',
        contributions: [
          'Educated participants on greenhouse gases, climate change, waste management, and tree plantation.',
          'Organized campus activities and awareness campaigns.'
        ]
      },
      {
        title: 'Volunteer, THE YELLOW ARMY: Volunteer for Bangladesh – JAAGO Foundation',
        date: 'January 2023 – Present',
        contributions: [
          'Supporting education initiatives for underprivileged children.',
          'Participating in community outreach and national events.'
        ]
      }
    ]
  }
];

const Volunteering = () => {
  const [tab, setTab] = useState(0);
  const group = volunteering[tab];
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-4">Volunteering</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
      <div className="flex gap-4 mb-8">
        {volunteering.map((g, idx) => (
          <button
            key={g.type}
            className={`px-6 py-2 rounded bg-[#23243a] text-white font-semibold ${tab === idx ? 'bg-yellow-500 text-[#10111A]' : ''}`}
            onClick={() => setTab(idx)}
          >
            <span className="mr-2">{g.icon}</span>{g.type}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        {group.activities.map((act, i) => (
          <div key={i} className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <span className="font-semibold text-white">{act.title}</span>
              <span className="text-yellow-400 text-sm font-medium">{act.date}</span>
            </div>
            {act.role && <div className="text-gray-300 text-sm mb-1">{act.role}</div>}
            {act.org && <div className="text-gray-400 text-xs mb-1">{act.org}</div>}
            {act.participants && <div className="text-gray-400 text-xs mb-1">{act.participants}</div>}
            <ul className="list-disc list-inside text-gray-300 mt-2">
              {act.contributions.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering; 