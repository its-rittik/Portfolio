import React, { useState } from 'react';

const personalProjects = [
  {
    name: 'VitaCrop AI',
    year: '2024',
    desc: 'Live crop diagnosis platform using computer vision to identify plant diseases in real-time.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com/its-rittik/VitaCrop-AI',
  },
];

const semesterProjects = [
  {
    semester: 'Sprint 2025 / Erasmus Semester Exchange',
    title: 'Graduation Project Evaluation',
    course: 'Software Engineering',
    desc: 'A smart scheduling platform that automates project presentation assignments between students and teachers. Students enroll in available projects and upload their work. Teachers input their availability, and the system matches overlapping time slots between two teachers to auto-schedule a presentation. It handles availability conflicts, sends notifications via email, and allows file uploads, evaluation grading, and document review — all within a seamless web interface.',
    tech: [
      'Razor Pages (ASP.NET Core MVC)',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'JavaScript (fetch API, dynamic UI updates)',
      'ASP.NET Core MVC (.NET 8)',
      'C# with Firestore SDK',
      'Firebase Firestore',
      'Firebase Cloud Storage',
      'Firebase Admin SDK',
      'Session-based login',
      'Google Mail integration',
      'Firestore Document Modeling',
    ],
    github: 'https://gitlab.com/rittikdas2017/software-engineering',
    video: 'https://ikuedu-my.sharepoint.com/:v:/g/personal/2400010802_stu_iku_edu_tr/EdtP5F0Oz7lFvTk_fE9wmigBxfMacDwN_DAtsjcAujJNQw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=fFCk60',
  },
  {
    semester: 'Sprint 2025 / Erasmus Semester Exchange',
    title: 'Face & Voice Deepfake Verification Gateway for Secure Portal Access',
    course: 'Network Security + Applied Deep Learning',
    desc: 'A secure identity verification gateway that authenticates users through a combination of face image analysis and voice spectrogram classification to determine whether the input is REAL or FAKE. The system is designed to protect access to sensitive web portals by ensuring that only legitimate users using live, untampered media can proceed. Features include face and audio deepfake detection, end-to-end security pipeline, network-level access control, and session-based logging.',
    tech: [
      'HTML5',
      'JavaScript (Media APIs), Canvas',
      'Flask (Python)',
      'OpenCV, PIL, TensorFlow (Keras), NumPy',
      'Librosa, Pydub, Matplotlib',
      'CNNs for deepfake detection',
      'SHA-256, AES-GCM, PBKDF2, HTTPS, CSP',
      'SQLite',
      'Flask Sessions, IP filtering, logging',
      'Localhost with HTTPS + TLS',
    ],
    github: '',
    video: '',
  },
  {
    semester: 'Sprint 2025 / Erasmus Semester Exchange',
    title: 'Smart Health Tracker App',
    course: 'Mobile Programming 1',
    desc: 'A Flutter-based health monitoring app with Firebase integration. Users can track daily health metrics, share data with family, receive notifications, and view dynamic graphs. Features email-based authentication, real-time data storage, and a clean, user-friendly UI.',
    tech: [
      'Flutter & Dart',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Cloud Messaging',
      'Firebase BoM',
      'Python (REST API)',
      'Firestore REST API',
    ],
    github: '',
    video: '',
  },
];

function groupBySemester(projects) {
  return projects.reduce((acc, proj) => {
    if (!acc[proj.semester]) acc[proj.semester] = [];
    acc[proj.semester].push(proj);
    return acc;
  }, {});
}

const Projects = () => {
  const [tab, setTab] = useState('personal');
  const semesterGroups = groupBySemester(semesterProjects);
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-l bg-[#23243a] text-white font-semibold ${tab === 'personal' ? 'bg-yellow-500 text-[#10111A]' : ''}`}
          onClick={() => setTab('personal')}
        >
          Personal Projects
        </button>
        <button
          className={`px-6 py-2 rounded-r bg-[#23243a] text-white font-semibold ${tab === 'semester' ? 'bg-yellow-500 text-[#10111A]' : ''}`}
          onClick={() => setTab('semester')}
        >
          Semester Projects
        </button>
      </div>
      {tab === 'personal' ? (
        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((proj, idx) => (
            <div key={idx} className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-white">{proj.name}</div>
                <div className="text-yellow-400 font-semibold">{proj.year}</div>
              </div>
              <div className="mb-4 text-gray-300">{proj.desc}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span key={tag} className="bg-[#23243a] text-white px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline mt-auto">View on GitHub &rarr;</a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          {Object.entries(semesterGroups).map(([semester, projects]) => (
            <div key={semester}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">{semester}</h3>
              <div className="flex flex-col gap-8">
                {projects.map((proj, idx) => (
                  <div key={idx} className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                      <div className="text-xl font-bold text-white">Project {idx + 1}: {proj.title}</div>
                    </div>
                    <div className="text-gray-400 mb-1 font-semibold">Course: {proj.course}</div>
                    <div className="mb-4 text-gray-300">{proj.desc}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tech.map((tag) => (
                        <span key={tag} className="bg-[#23243a] text-white px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-2">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-[#10111A] rounded font-semibold hover:bg-yellow-600 transition-colors">GitHub</a>
                      )}
                      {proj.video && (
                        <a href={proj.video} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#23243a] text-yellow-500 rounded font-semibold hover:bg-yellow-500 hover:text-[#10111A] transition-colors">Video Demo</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects; 