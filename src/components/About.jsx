import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { twMerge } from 'tailwind-merge';
import ShinyText from './animations/ShinyText';

const education = [
  {
    degree: 'B.Sc. in CSE — Graduated',
    school: ' Daffodil International University',
    location: ' Dhaka, Bangladesh',
    years: 'Apr 2022 – Jun 2026',
    gpa: 'CGPA: 3.93 / 4.00 | 136 Credits',
  },
  {
    degree: 'Erasmus+ Semester Exchange Program',
    school: ' Istanbul Kültür University',
    location: ' Istanbul, Turkey',
    years: 'Feb 2025 – Jun 2025',
    gpa: 'GPA: 3.24 / 4.00 (4 Equivalent to 96%+)',
  },
  {
    degree: 'HSC in Science',
    school: ' Notre Dame College',
    location: 'Dhaka, Bangladesh',
    years: '2018 – 2020',
    gpa: 'GPA: 5.00 / 5.00',
  },
];

const AnimatedBox = ({ children, className, shouldAnimate, delay, unstyled = false }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (shouldAnimate) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [shouldAnimate, controls]);

  const variants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const boxClassName = unstyled
    ? className
    : twMerge(
        "bg-[#18192A] rounded-lg p-5 shadow border border-[#23243a] flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:scale-[1.02]",
        className
      );

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ type: "spring", stiffness: 500, damping: 40, delay: delay }}
      className={boxClassName}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const educationBoxesRef = useRef(null);

  const [shouldAnimateEducation, setShouldAnimateEducation] = useState(false);
  const hasAnimatedShinyText = useRef(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedShinyText.current) {
          const words1 = Array.from(text1Ref.current.querySelectorAll('.shiny-word'));
          const words2 = Array.from(text2Ref.current.querySelectorAll('.shiny-word'));

          const tl = gsap.timeline();
          const defaultColor = '#d1d5db';
          const highlightColor = '#fbbf24';
          
          let staggerTime = 0;
          const staggerIncrement = 0.06;
          const highlightDuration = 0.1;
          const animationDuration = 0.1;
          const pauseDuration = 0.01;

          words1.forEach(word => {
            tl.to(word, { color: highlightColor, y: -3, duration: animationDuration, ease: 'power2.out' }, staggerTime);
            tl.to(word, { color: defaultColor, y: 0, duration: animationDuration, ease: 'power2.in' }, staggerTime + highlightDuration);
            staggerTime += staggerIncrement;
          });

          staggerTime += pauseDuration; // Pause between paragraphs

          words2.forEach(word => {
            tl.to(word, { color: highlightColor, y: -3, duration: animationDuration, ease: 'power2.out' }, staggerTime);
            tl.to(word, { color: defaultColor, y: 0, duration: animationDuration, ease: 'power2.in' }, staggerTime + highlightDuration);
            staggerTime += staggerIncrement;
          });

          hasAnimatedShinyText.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      aboutObserver.observe(containerRef.current);
    }

    const educationObserver = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimateEducation(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (educationBoxesRef.current) {
      educationObserver.observe(educationBoxesRef.current);
    }

    return () => {
      if (containerRef.current) aboutObserver.unobserve(containerRef.current);
      if (educationBoxesRef.current) educationObserver.unobserve(educationBoxesRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
          <div className="h-1 w-16 bg-yellow-500 mb-6"></div>

          <ShinyText
            ref={text1Ref}
            className="mb-6"
            text="A Computer Science graduate and Lecturer with a strong foundation in Deep Learning, IoT, and AI-driven solutions. Passionate about creating real-world applications using cutting-edge, multimodal AI frameworks."
          />

          <ShinyText
            ref={text2Ref}
            text="I specialize in Python, C/C++, and MySQL, and have demonstrated success through collaborative projects and academic research. My mission is to harness advanced AI technologies to solve complex problems, drive innovation, and deliver impactful digital solutions."
          />
        </div>

        <div className="flex-1" ref={educationBoxesRef}>
          <AnimatedBox
            shouldAnimate={shouldAnimateEducation}
            delay={0}
            unstyled
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
          </AnimatedBox>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <AnimatedBox 
                key={idx} 
                shouldAnimate={shouldAnimateEducation}
                delay={0.1 * (idx + 1)}
              >
                <div className="flex-1">
                  <div className="mb-1 text-lg font-semibold text-white">{edu.degree}</div>
                  <div className="mb-1 font-medium text-yellow-400">
                    {edu.school} — {edu.location}
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <div>{edu.years}</div>
                    <div className="text-sm font-normal">{edu.percentage}</div>
                  </div>
                  <div className="text-gray-300 font-bold">{edu.gpa}</div>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 