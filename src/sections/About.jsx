// import React from 'react';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const About = () => {
//   return (
//     <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-slate-950 relative overflow-hidden">
      
//       {/* Background Decor (Subtle gradients) */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="max-w-5xl mx-auto px-4 relative z-10">
//         <RevealOnScroll>
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
//           About <span className="text-blue-500">Me</span>
//         </h2>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Column: The Narrative */}
//           <div className="space-y-6 text-slate-300">
//             <p className="text-lg leading-relaxed">
//               Hello! I'm a final-year student passionate about building digital experiences that are both visually stunning and technically robust.
//             </p>
//             <p className="text-lg leading-relaxed">
//               My journey started with simple web pages, but it quickly grew into a fascination with <strong className="text-blue-400">Data Science</strong> and <strong className="text-blue-400">Full Stack Development</strong>. I love solving complex problems—whether it's optimizing a backend API or designing a fluid user interface.
//             </p>
//             <p className="text-lg leading-relaxed">
//               When I'm not coding, you can find me exploring new design trends, analyzing film cinematography, or experimenting with digital art.
//             </p>
//           </div>

//           {/* Right Column: Cards (Education & Stats) */}
//           <div className="space-y-6">
            
//             {/* Education Card */}
//             <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold text-white mb-2">🎓 Education</h3>
//               <p className="text-blue-400 font-medium">B.E. in Computer Science</p>
//               <p className="text-slate-400 text-sm">BITS Pilani (2021 - 2025)</p>
//               <ul className="list-disc list-inside text-slate-400 mt-4 space-y-1 text-sm">
//                 <li>Relevant Coursework: Data Structures, Algorithms, DBMS</li>
//                 <li>Active Member of the Coding Club</li>
//               </ul>
//             </div>

//             {/* Quick Stats / Soft Skills */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-1">3+</h3>
//                 <p className="text-slate-400 text-sm">Years Coding</p>
//               </div>
//               <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-1">5+</h3>
//                 <p className="text-slate-400 text-sm">Major Projects</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black relative">
      
      {/* Narrative Flow: Fade into Projects at the bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* CHANGED: max-w-7xl for a wider, more spacious layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          About <span className="text-blue-500">Me</span>
        </h2>

        {/* CHANGED: gap-20 pushes the card to the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: The Narrative (Wider margin for readability) */}
          <div className="space-y-8 text-gray-300">
            <p className="text-lg leading-relaxed font-light">
              Hello! I’m a final-year Computer Science student passionate about solving complex problems using data, algorithms, and clean, reliable code.
            </p>
            <p className="text-lg leading-relaxed font-light">
              My journey began with programming fundamentals and systems thinking, and gradually evolved into a strong interest in <strong className="text-blue-400 font-semibold">Data Science</strong>, <strong className="text-blue-400 font-semibold">Machine Learning</strong> and <strong className="text-blue-400 font-semibold"> scalable software systems</strong>.
            </p>
            <p className="text-lg leading-relaxed font-light">
             I enjoy working at the intersection of analysis and engineering, where data-driven insights translate into practical solutions.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Outside of coding, I love exploring new technologies, playing badminton and cricket, watching movies, and creating digital art.
            </p>
          </div>

          {/* Right Column: Education Card (Bigger Padding + Pushed Right) */}
          <div className="p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] border-l-4 border-l-blue-500/50">
              
              <div className="flex items-center gap-4 mb-6">
                 <span className="text-4xl">🎓</span>
                 <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="mb-8">
                  <p className="text-blue-400 font-bold text-xl mb-1">B.E. in Mechanical Engineering</p>
                  <p className="text-gray-400 text-lg">BITS Pilani (2022 - 2026)</p>
              </div>
              
              <div>
                  <p className="font-semibold text-gray-300 mb-4 text-base">Relevant Coursework:</p>
                  
                  {/* Tags are slightly larger now */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Data Structures", 
                      "Algorithms", 
                      "Databases", 
                      "Machine Learning & AI", 
                      "Probability & Statistics"
                    ].map((course, index) => (
                        <span key={index} className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition">
                            {course}
                        </span>
                    ))}
                  </div>
              </div>
          </div>

        </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;