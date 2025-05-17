import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12" id="contact">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <div className="h-1 w-16 bg-yellow-500 mb-6"></div>
        <p className="mb-6 text-gray-300">Have a project in mind or want to collaborate? Feel free to reach out to me through any of the following channels.</p>
        <div className="flex flex-col gap-4 text-lg text-gray-200 mb-6">
          <div className="flex items-center gap-3"><span>📧</span> rittikdas2017@gmail.com</div>
          <div className="flex items-center gap-3"><span>📞</span> +880 1782842112</div>
          <div className="flex items-center gap-3"><span>🏠</span> Mirpur-1216, Dhaka, Bangladesh</div>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/its-rittik" target="_blank" rel="noopener noreferrer" className="bg-[#23243a] p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-[#10111A] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/rittik-chandra-das-turjy/" target="_blank" rel="noopener noreferrer" className="bg-[#23243a] p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-[#10111A] transition-colors">LinkedIn</a>
          <a href="mailto:rittikdas2017@gmail.com" className="bg-[#23243a] p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-[#10111A] transition-colors">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 