import React, { useState, useEffect, useRef, useCallback } from 'react';

const stats = [
  { value: 7, label: 'Projects Experience', display: '7+' },
  { value: 6, label: 'Volunteering' },
  { value: 5, label: 'Research Publications' },
  { value: 2, label: 'Workshops' },
];

const useCountUp = (target, isVisible) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) { setCurrent(0); return; }
    let startTime = null;
    const duration = 800;
    const raf = requestAnimationFrame(function animate(now) {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress * (2 - progress);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(raf);
  }, [target, isVisible]);

  return current;
};

const StatItem = ({ value, label, display, isVisible }) => {
  const current = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold text-yellow-500 mb-2">
        {display ? (current >= value ? display : current) : current}
      </div>
      <div className="text-lg text-gray-300 font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#18171F] py-12">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <StatItem key={idx} {...stat} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
