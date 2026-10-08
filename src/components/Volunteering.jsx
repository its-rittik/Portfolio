import React, { useState } from 'react';

const volunteering = [
  {
    type: 'Academic Volunteering',
    icon: '🧠',
    activities: [
  {
    title: 'Inside IoT: A Beginner Workshop on Hardware, Firmware and Data Integration (2nd Edition)',
    role: 'Trainer and Speaker',
    org: 'IOT Lab, Daffodil International University',
    loc: 'DMA–DIU Tech Center',
    date: '16 October 2025',
    participants: '30 Participants',
    contributions: [
      'Delivered the second edition of the Inside IoT workshop, building on the success of the first program.',
      'Taught foundational data analysis, machine learning and AI concepts applied to IoT systems.',
      'Guided participants through end-to-end IoT workflows covering hardware, firmware and data integration.',
    ],
  },
  {
    title: 'Inside IoT: A Beginner Workshop on Hardware, Firmware and Data Integration',
    role: 'Trainer and Speaker',
    org: 'IOT Lab, Daffodil International University',
    loc: 'IoT Lab, DIU',
    date: 'Nov 7, 12, 14, 17 – 2024',
    participants: '30 Participants',
    contributions: [
      'Led sessions on MQTT data collection, feature engineering and ML for IoT.',
      'Designed practical demonstrations, enabling students to implement real-world solutions.',
      'Contributed significantly to student engagement and workshop success.',
    ],
  },
]

  },
  {
    type: 'Creative / Leadership Volunteering',
    icon: '🎨',
    activities: [
      {
        title: 'Vice Chair, IEEE DIU SB WIE',
        date: 'March 2025 – February 2026',
        contributions: [
          'Spearheaded initiatives to promote women in engineering and tech.',
          'Organized seminars, competitions, and awareness programs.'
        ]
      },
      {
        title: 'Creative Team Leader, IEEE DIU SB WIE',
        date: 'March 2024 – February 2025',
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
        title: 'Volunteer, THE YELLOW ARMY: Volunteer for Bangladesh – JAAGO Foundation',
        date: 'January 2023 – Present',
        contributions: [
          'Supporting education initiatives for underprivileged children.',
          'Participating in community outreach and national events.'
        ]
      },
      {
        title: 'Campus Organizer, Environment Olympiad 2024',
        date: 'April 2, 2024',
        contributions: [
          'Educated participants on greenhouse gases, climate change, waste management, and tree plantation.',
          'Organized campus activities and awareness campaigns.'
        ]
      },
      
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
        {volunteering.map((group, idx) => (
          <button
            key={idx}
            className={`px-6 py-2 rounded-full bg-[#23243a] text-white font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-105 ${tab === idx ? 'bg-yellow-500 text-[#10111A]' : ''}`}
            onClick={() => setTab(idx)}
          >
            {group.icon} {group.type}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {group.activities.map((activity, idx) => (
          <div
            key={idx}
            className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:scale-[1.02]"
          >
            <div className="text-xl font-bold text-white mb-2">{activity.title}</div>
            {activity.role && (
              <div className="text-gray-400 mb-1">{activity.role}</div>
            )}
            {activity.org && (
              <div className="text-gray-400 mb-1">{activity.org}</div>
            )}
            <div className="text-yellow-400 font-semibold mb-4">{activity.date}</div>
            {activity.participants && (
              <div className="text-gray-300 mb-4">{activity.participants}</div>
            )}
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {activity.contributions.map((contribution, idx) => (
                <li key={idx}>{contribution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering; 