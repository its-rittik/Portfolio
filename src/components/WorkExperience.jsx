import React, { memo } from 'react';

const experiences = [
  {
    company: 'Daffodil International University',
    roles: [
      {
        title: 'Lecturer',
        period: '01 July 2026 – Present',
        icon: '🏫',
        projectIdx: 0,
      },
      {
        title: 'Teaching Assistant',
        period: '05 October 2025 – 01 July 2026',
        icon: '🎓',
        projectIdx: 1,
      },
    ],
    projects: [
      {
        name: 'Lecturer — Data Science & Software Engineering',
        desc: [
          'Instructed a 12-credit-hour undergraduate course load across the Data Science department.',
          'Mentoring Data Science majors through their Software Engineering Design Capstone Projects (SE331) from system architecture to deployment.',
          'Guiding students on research methodology, project planning, and technical implementation.',
        ],
        tech: ['Python', 'Data Science', 'Machine Learning', 'Software Engineering', 'Academic Mentoring'],
      },
      {
        name: 'Teaching Assistantship under Prof. Dr. Md. Fokhray Hossain (Dean, FSIT)',
        desc: [
          'Worked under the supervision of Prof. Dr. Md. Fokhray Hossain, providing technical support for Final Year Design Project (FYDP) research students.',
          'Assisted in undergraduate-level courses: Computer Fundamentals (CSE112) and Data Communication (CSE225).',
          'Conducted tutorial sessions, guided students on assignments, and provided academic mentoring.',
          'Supported course delivery through grading, exam preparation, and classroom assistance.',
        ],
        tech: ['Python', 'Data Science', 'Machine Learning', 'Academic Mentoring'],
      },
    ],
  },
  {
    company: 'Datasoft Manufacturing & Assembly Inc. Limited',
    roles: [
      {
        title: 'Data Scientist – Part Time',
        period: '01 July 2024 – 30 June 2026',
        icon: '💼',
        projectIdx: 0,
      },
    ],
    projects: [
      {
        name: 'AI & ML Projects at Datasoft',
        desc: [
          'ATM Surveillance: Developed and deployed a CNN-based real-time theft/fraud detection model in a Bangladeshi state bank, achieving 98% accuracy.',
          'HumanTrue: Reduced false alarms by 91% across 600+ locations by engineering human/non-human 3D CNN, Transformer, and XGBoost pipelines via MQTT.',
          'MoreFish: Achieved 95% accuracy in NH3 prediction by fusing 100k+ IoT and LiDAR data points using an ensemble of XGBoost, SVR, and Transformers.',
        ],
        tech: ['Python', 'CNN', 'XGBoost', 'SVR', 'Transformers', 'PointNet++', 'MQTT', 'MySQL', 'Pandas'],
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="py-20 bg-[#10111A] text-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
        </div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx}>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">{exp.company}</h3>
              <div className="flex flex-col gap-6">
                {exp.roles.map((role, index) => {
                  const project = exp.projects[role.projectIdx];

                  return (
                    <div
                      key={index}
                      className="group transition-all duration-300 border border-transparent hover:border-yellow-500 rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="bg-[#18192A] p-6 cursor-pointer">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">{role.icon}</span>
                          <span className="text-lg font-bold text-white">{role.title}</span>
                        </div>
                        <div className="text-yellow-400 font-semibold">
                          {exp.company}
                        </div>
                        <div className="text-gray-400 text-sm">{role.period}</div>
                      </div>

                      <div className="hidden group-hover:block h-[4px] bg-gradient-to-r from-yellow-500 via-[#23243a] to-yellow-500 opacity-60 transition-all duration-300"></div>

                      <div className="max-h-0 overflow-hidden group-hover:max-h-[1000px] transition-all duration-500 ease-in-out">
                        <div className="bg-[#18192A] p-6">
                          <div className="text-xl font-bold text-white mb-2">
                            {project.name}
                          </div>
                          <ul className="list-disc list-inside text-gray-300 mb-4">
                            {project.desc.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tag) => (
                              <span
                                key={tag}
                                className="bg-yellow-500 text-[#10111A] px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WorkExperience);
