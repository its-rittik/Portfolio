import React from 'react';

const experience = {
  company: 'Datasoft Manufacturing & Assembly Inc. Limited',
  roles: [
    {
      title: 'Data Scientist - Part Time',
      period: 'October 2024 - Present',
      icon: '💼',
      projectIdx: 0,
    },
    {
      title: 'Data Science Intern',
      period: 'July 2024 - October 2024',
      icon: '💼',
      projectIdx: 1,
    },
  ],
  projects: [
    {
      name: 'HumanTrue: Multimodal Motion Detection Framework',
      desc: [
        'Developed a machine learning framework to reduce false alarms by 91% in Sawpno super shops, distinguishing humans from non-human motion (e.g., animals).',
        'Processed 50,000+ data points via MQTT, stored in MySQL, and engineered features using Pandas.',
        'Applied models: Logistic Regression, Random Forest, SVM, XGBoost, 3D CNNs, Transformer-based architectures, and LiDAR-specific PointNet/PointNet++, achieving 97% accuracy with XGBoost and superior performance with PointNet++.',
        'Deployed in real-time IoT systems using Python Paho, improving sensor reliability across 426 locations.'
      ],
      tech: ['MQTT', 'MySQL', 'Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'PointNet++', 'Paho', 'IoT'],
    },
    {
      name: 'MoreFish NH3 Prediction Framework',
      desc: [
        'Developed a predictive model for ammonia (NH3) levels in aquaculture, achieving 95% accuracy, and preventing chemical toxicity-related fish fatalities.',
        'Processed 100,000+ sensor readings, integrating NH3 data with LiDAR spatial readings for multimodal insights.',
        'Applied models: XGBoost, SVR, Random Forest, Decision Trees, Transformers, and PointNet++, leveraging hybrid methods for sequential and spatial data.',
        'Deployed for real-time predictions in fish farms, providing early alerts and actionable insights.'
      ],
      tech: ['MQTT', 'SQL', 'Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Paho'],
    },
  ],
};

const volunteering = [
  {
    type: 'Academic Volunteering',
    icon: '🧠',
    activities: [
      {
        title: 'Inside IoT: A Beginner Workshop on Hardware, Firmware, and Data Integration',
        role: 'Trainer and Speaker',
        org: 'Daffodil International University, IoT Lab',
        date: 'Nov 7, 12, 14, 17, 2024',
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
        date: 'March 2024 – Present',
        contributions: [
          'Leading design and media efforts for events and campaigns.',
          'Creating visual content and branding materials for technical and outreach events.'
        ]
      },
      {
        title: 'Campus Ambassador, Intel OpenAPI',
        date: 'January 2024 – Present',
        contributions: [
          'Promoting Intel\'s OpenAPI initiatives among university peers.',
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

const WorkExperience = () => (
  <div className="max-w-6xl mx-auto px-8 py-16">
    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
    <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
    <div className="flex flex-col gap-12">
      {/* First row: Part Time + Project 1 */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Part Time */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start relative">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">{experience.roles[0].icon}</span>
            <span className="text-lg font-bold text-white">{experience.roles[0].title}</span>
          </div>
          <div className="text-yellow-400 font-semibold">{experience.company}</div>
          <div className="text-gray-400 text-sm mb-4">{experience.roles[0].period}</div>
        </div>
        {/* Right: Project 1 */}
        <div className="md:w-2/3 bg-[#23243a] rounded-lg p-6 shadow border border-[#23243a]">
          <div className="text-xl font-bold text-white mb-2">{experience.projects[0].name}</div>
          <ul className="list-disc list-inside text-gray-300 mb-2">
            {experience.projects[0].desc.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.projects[0].tech.map((tag) => (
              <span key={tag} className="bg-yellow-500 text-[#10111A] px-3 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Horizontal line for separation */}
      <div className="w-full flex items-center justify-center my-2">
        <div className="w-2/3 h-0.5 bg-gradient-to-r from-yellow-500 via-[#23243a] to-yellow-500 opacity-60 rounded-full"></div>
      </div>
      {/* Second row: Intern + Project 2 */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Intern */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start relative">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">{experience.roles[1].icon}</span>
            <span className="text-lg font-bold text-white">{experience.roles[1].title}</span>
          </div>
          <div className="text-yellow-400 font-semibold">{experience.company}</div>
          <div className="text-gray-400 text-sm mb-4">{experience.roles[1].period}</div>
        </div>
        {/* Right: Project 2 */}
        <div className="md:w-2/3 bg-[#23243a] rounded-lg p-6 shadow border border-[#23243a]">
          <div className="text-xl font-bold text-white mb-2">{experience.projects[1].name}</div>
          <ul className="list-disc list-inside text-gray-300 mb-2">
            {experience.projects[1].desc.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.projects[1].tech.map((tag) => (
              <span key={tag} className="bg-yellow-500 text-[#10111A] px-3 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorkExperience; 