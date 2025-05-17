import React, { useState } from 'react';
import { motion } from 'framer-motion';

const researchPapers = [
  {
    title: 'JackVisualNet: A Fine-tuned Hybrid Deep Learning Model for Jackfruits Disease Classification with Explainable AI',
    authors: 'Amir Shohel; Md. Hasan Imam Bijoy; Sarbajit Paul Bappy; Rittik Chandra Das Turjy; Manal Othman; Md Abdus Samad',
    citation: '',
    desc: 'JackVisualNet, a hybrid deep learning model, addresses jackfruit disease detection in Bangladesh, achieving 99.91% accuracy on an augmented dataset of 9,000 images. Combining ResNet50V2, DenseNet201, and VGG19, the model enhances feature extraction and classification across six disease classes. Integrated Explainable AI tools improve interpretability, empowering farmers with actionable insights via a real-time web-based platform, and promoting sustainability in agriculture. This paper was submitted in PLOS ONE journal.',
    status: 'Under Review',
    link: '#',
  },
  {
    title: 'SkinVisualNet: A Hybrid Deep Learning Approach for Identifying Lyme Disease from Skin Rash Images',
    authors: 'Amir Sohel; Rittik Chandra Das Turjy; Sarbajit Paul Bappy; Md Assaduzzaman; Ahmed Al Marouf; Jon Rokne; Reda Alhajj',
    citation: '',
    desc: 'Developed SkinVisualNet, a novel hybrid deep learning model combining VGG19 and DenseNet201 architectures, achieving 98.83% accuracy in classifying Lyme disease rashes from images. Deployed it as a web application for real-time analysis, enhancing early detection and treatment outcomes for Lyme disease globally. This paper was submitted to the Journal of Imaging Informatics in Medicine.',
    status: 'Under Review',
    link: '#',
  },
];

const conferences = [
  {
    title: 'SkinVisualNet: A Hybrid Deep Learning Approach for Identifying Lyme Disease from Skin Rash Images',
    event: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    desc: 'This study introduces a hybrid deep learning model combining DenseNet201 and VGG19 to detect Lyme disease from skin rash images. Unlike conventional methods that rely on tick detection, SkinVisualNet emphasizes rapid, image-based diagnosis.',
    link: 'https://s24.ieeecsbdc.org/papers/21-a-hybrid-deep-learning-approach-for-identifying-lyme-disease-from-skin-rash-images',
  },
  {
    title: 'JackVisualNet: A Hybrid Deep Learning Approach for Identifying Jackfruit Leaf and Fruit Disease',
    event: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    desc: 'JackVisualNet is a hybrid deep learning model combining ResNet50V2, DenseNet201, and VGG19 to classify six jackfruit diseases with 99.91% accuracy. Enhanced with Explainable AI, it supports farmers through a real-time web platform for sustainable agriculture.',
    link: 'https://s24.ieeecsbdc.org/papers/20-a-hybrid-deep-learning-approach-for-identifying-jackfruit-leaf-and-fruit-disease',
  },  
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Research = () => {
  const [tab, setTab] = useState('papers');
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-4">Research Work</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-8"></div>
      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-l bg-[#23243a] text-white font-semibold ${tab === 'papers' ? 'bg-yellow-500 text-[#10111A]' : ''}`}
          onClick={() => setTab('papers')}
        >
          Publications
        </button>
        <button
          className={`px-6 py-2 rounded-r bg-[#23243a] text-white font-semibold ${tab === 'confs' ? 'bg-yellow-500 text-[#10111A]' : ''}`}
          onClick={() => setTab('confs')}
        >
          Conference Projects
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {tab === 'papers'
          ? researchPapers.map((paper, idx) => (
              <motion.div
                key={idx}
                className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                variants={fadeIn}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl font-bold text-white">{paper.title}</div>
                  <span className="text-xs px-2 py-1 bg-yellow-500 text-[#10111A] rounded font-semibold">{paper.status}</span>
                </div>
                <div className="text-gray-400 mb-1">{paper.authors}</div>
                <div className="text-gray-400 mb-2">{paper.citation}</div>
                <div className="mb-4 text-gray-300">{paper.desc}</div>
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline">View Details &rarr;</a>
              </motion.div>
            ))
          : conferences.map((conf, idx) => (
              <motion.div
                key={idx}
                className="bg-[#18192A] rounded-lg p-6 border border-[#23243a] shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                variants={fadeIn}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="text-xl font-bold text-white">{conf.title}</div>
                  <div className="text-yellow-400 font-semibold">{conf.year}</div>
                </div>
                <div className="text-gray-400 mb-2">{conf.event}</div>
                <div className="mb-4 text-gray-300">{conf.desc}</div>
                <a href={conf.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline">View Project &rarr;</a>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Research; 