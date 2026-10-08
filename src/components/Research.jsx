import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaDatabase } from 'react-icons/fa';

const researchPapers = [
  {
    title:
      'Bridging the Performance–Efficiency Gap: A Resource-Efficient Hybrid DL-ML Framework for Jackfruit Disease Detection',
    authors:
      'R. C. D. Turjy, F. A. Farid, M. H. I. Bijoy, S. P. Bappy, A. Sohel, J. Uddin, H. A. Karim',
    citation:
      'Frontiers in Artificial Intelligence, 2026 | Q1 Journal | Impact Factor: 6.7 | CiteScore: 8.0',
    status: 'Published: Q1',
    desc:
      'A resource-efficient hybrid deep learning and machine learning framework for jackfruit disease detection, designed to bridge the gap between high performance and computational efficiency. The system achieves strong diagnostic accuracy while remaining deployable in low-resource agricultural environments.',
    link: 'https://doi.org/10.3389/frai.2026.1884567',
    doi: '10.3389/frai.2026.1884567',
  },
  {
    title:
      'JackVisualNet: A Fine-Tuned Hybrid Deep Learning Model for Jackfruit Disease Classification with Explainable AI',
    authors:
      'A. Sohel, M. H. I. Bijoy, S. P. Bappy, R. C. D. Turjy, M. Othman, M. A. Samad',
    citation:
      'PeerJ Computer Science, 2025 | Q2 Journal | Impact Factor: 2.4 | CiteScore: 4.3',
    status: 'Published: Q2',
    desc:
      'JackVisualNet is a fine-tuned hybrid deep learning model combining ResNet50V2, DenseNet201, and VGG19 for classifying six jackfruit diseases with 99.91% accuracy. Explainable AI techniques provide visual insights into model decisions, supporting agricultural diagnostic transparency.',
    link: 'https://doi.org/10.7717/peerj-cs.3977',
    doi: '10.7717/peerj-cs.3977',
  },
  {
    title:
      'SkinVisualNet: A Hybrid Deep Learning Approach Leveraging Explainable Models for Identifying Lyme Disease from Skin Rash Images',
    authors:
      'A. Sohel, R. C. D. Turjy, S. P. Bappy, M. Assaduzzaman, A. A. Marouf, J. Rokne, R. Alhajj',
    citation:
      'MDPI Machine Learning and Knowledge Extraction, 2025, Volume 7, Issue 4, Page 157 | Q1 Journal | Impact Factor: 8.4 | CiteScore: 12.7',
    status: 'Published: Q1',
    desc:
      'SkinVisualNet is a hybrid deep learning model combining VGG19 and DenseNet201 for automated Lyme disease detection from skin rash images. Enhanced preprocessing improved generalization by 10–13%, and the model achieved 98.83% accuracy with strong precision, recall, and F1-score. Robustness was validated via 5-fold cross-validation, and explainable AI methods highlighted clinically relevant rash regions to ensure diagnostic transparency.',
    link: 'https://doi.org/10.3390/make7040157',
    doi: '10.3390/make7040157',
  },
  {
    title:
      'BanglaDigit: A Large-Scale Standardized Dataset and Architectural Benchmark for Handwritten Bangla Digit Recognition',
    authors:
      'R. C. D. Turjy, S. P. Bappy, M. S. Rahman, A. Sohel, M. F. Hossain, M. R. Rashel',
    citation:
      'Elsevier Image and Vision Computing, 2026 | Q1 Journal | Impact Factor: 5.9 | CiteScore: 7.7',
    status: 'Under Review',
    desc:
      'A large-scale, standardized dataset for handwritten Bangla digit recognition, paired with a comprehensive architectural benchmark comparing state-of-the-art deep learning models. Aims to establish a unified evaluation framework for the Bangla digit recognition research community.',
    link: null,
  },
  {
    title:
      'DeepMed-A3Net: A Lightweight Edge-Deployable Backbone with Modality-Aligned Federated Learning for Fair and Efficient Heterogeneous Clinical AI',
    authors:
      'S. P. Bappy, M. H. I. Bijoy, R. C. D. Turjy, S. Tarafdar, F. N. Nur, A. Sohel, M. Z. Hasan, M. S. Arefin, P. K. Dhar, T. Shimamura, Ohidujjaman',
    citation:
      'Springer Nature Neural Computing and Applications, 2026 | Q1 Journal | Impact Factor: 6.52 | CiteScore: 8.7',
    status: 'Under Review',
    desc:
      'DeepMed-A3Net is a lightweight, edge-deployable backbone with modality-aligned federated learning designed for fair and efficient AI across heterogeneous clinical environments. The framework addresses data privacy and model fairness challenges in distributed medical AI systems.',
    link: null,
  },
];

const conferences = [
  {
    title:
      'SkinVisualNet: A Hybrid Deep Learning Approach for Identifying Lyme Disease from Skin Rash Images',
    event: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    desc:
      'Introduced an early version of the SkinVisualNet framework, focusing on image-based Lyme disease diagnosis using hybrid deep learning models and outperforming conventional CNN approaches.',
    link:
      'https://s24.ieeecsbdc.org/papers/21-a-hybrid-deep-learning-approach-for-identifying-lyme-disease-from-skin-rash-images',
  },
  {
    title:
      'JackVisualNet: A Hybrid Deep Learning Approach for Identifying Jackfruit Leaf and Fruit Disease',
    event: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    desc:
      'Presented a hybrid deep learning system combining ResNet50V2, DenseNet201, and VGG19 to classify six jackfruit diseases with 99.91% accuracy, enhanced using Explainable AI for agricultural decision support.',
    link:
      'https://s24.ieeecsbdc.org/papers/20-a-hybrid-deep-learning-approach-for-identifying-jackfruit-leaf-and-fruit-disease',
  },
];

const contributions = [
  {
    title:
      'Jackfruit AgroVision: An Extensive Dataset for Jackfruit Disease and Leaf Disease Detection using Machine Learning',
    platform: 'Mendeley Data',
    date: 'February 2025',
    version: 'Version 1',
    doi: '10.17632/pt647jfn52.1',
    desc:
      'A large-scale, annotated dataset of jackfruit leaf and fruit disease images designed for machine learning, deep learning, and computer vision research. Supports classification, segmentation, and transfer learning tasks for agricultural AI systems.',
    link: 'https://data.mendeley.com/datasets/pt647jfn52/1',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Research = () => {
  const [tab, setTab] = useState('papers');

  const cardHoverVariants = {
    scale: 1.02,
    boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <section id="research" className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-4">Research Work</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-8"></div>

      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full bg-[#23243a] text-white font-semibold transition-all duration-300 ${
            tab === 'papers' ? 'bg-yellow-500 text-[#10111A]' : ''
          }`}
          onClick={() => setTab('papers')}
        >
          Publications
        </button>
        <button
          className={`px-6 py-2 rounded-full bg-[#23243a] text-white font-semibold transition-all duration-300 ${
            tab === 'confs' ? 'bg-yellow-500 text-[#10111A]' : ''
          }`}
          onClick={() => setTab('confs')}
        >
          Conferences
        </button>
        <button
          className={`px-6 py-2 rounded-full bg-[#23243a] text-white font-semibold transition-all duration-300 ${
            tab === 'contribs' ? 'bg-yellow-500 text-[#10111A]' : ''
          }`}
          onClick={() => setTab('contribs')}
        >
          Contributions
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {tab === 'papers' &&
          researchPapers.map((paper, idx) => (
            <motion.div
              key={idx}
              className="bg-[#23243a] rounded-lg p-6 border border-[#23243a]"
              initial="hidden"
              whileInView="visible"
              whileHover={cardHoverVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeIn}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-white">{paper.title}</div>
                <span className={`text-xs px-2 py-1 rounded font-semibold whitespace-nowrap ml-2 ${paper.status.startsWith('Under') ? 'bg-[#2a2b3c] text-yellow-400 border border-yellow-500' : 'bg-yellow-500 text-[#10111A]'}`}>
                  {paper.status}
                </span>
              </div>
              <div className="text-gray-400 mb-1">{paper.authors}</div>
              <div className="text-gray-400 mb-2">{paper.citation}</div>
              <div className="mb-4 text-gray-300">{paper.desc}</div>
              {paper.doi && (
                <div className="text-xs text-gray-500 mb-2">DOI: {paper.doi}</div>
              )}
              {paper.link ? (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline"
                >
                  <FaLink /> View Paper
                </a>
              ) : (
                <span className="text-gray-500 font-semibold flex items-center gap-1 italic text-sm">
                  Under peer review — DOI not yet available
                </span>
              )}
            </motion.div>
          ))}

        {tab === 'confs' &&
          conferences.map((conf, idx) => (
            <motion.div
              key={idx}
              className="bg-[#23243a] rounded-lg p-6 border border-[#23243a]"
              initial="hidden"
              whileInView="visible"
              whileHover={cardHoverVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeIn}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-white">{conf.title}</div>
                <span className="text-xs px-2 py-1 bg-yellow-500 text-[#10111A] rounded font-semibold">
                  {conf.year}
                </span>
              </div>
              <div className="text-gray-400 mb-2">{conf.event}</div>
              <div className="mb-4 text-gray-300">{conf.desc}</div>
              <a
                href={conf.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline"
              >
                <FaLink /> View Details
              </a>
            </motion.div>
          ))}

        {tab === 'contribs' &&
          contributions.map((contrib, idx) => (
            <motion.div
              key={idx}
              className="bg-[#23243a] rounded-lg p-6 border border-[#23243a]"
              initial="hidden"
              whileInView="visible"
              whileHover={cardHoverVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeIn}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-white">{contrib.title}</div>
                <span className="text-xs px-2 py-1 bg-yellow-500 text-[#10111A] rounded font-semibold">
                  {contrib.date}
                </span>
              </div>
              <div className="text-gray-400 mb-2">{contrib.platform}</div>
              <div className="text-sm text-gray-400 mb-2">
                {contrib.version} | DOI: {contrib.doi}
              </div>
              <div className="mb-4 text-gray-300">{contrib.desc}</div>
              <a
                href={contrib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 font-semibold flex items-center gap-1 hover:underline"
              >
                <FaDatabase /> View Dataset
              </a>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Research;
