// import React from 'react';
// import { skills } from '../data/skills';

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-slate-900">
//       <div className="max-w-4xl mx-auto px-4">
        
//         <h2 className="text-3xl font-bold text-white mb-12 text-center">
//           Technical <span className="text-blue-500">Arsenal</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skills.map((skillGroup, index) => (
//             <div key={index} className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition hover:shadow-lg hover:shadow-blue-900/5">
              
//               <h3 className="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">
//                 {skillGroup.category}
//               </h3>
              
//               <div className="flex flex-wrap gap-2">
//                 {skillGroup.items.map((item, idx) => (
//                   <span 
//                     key={idx} 
//                     className="px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded border border-slate-700 hover:text-white hover:border-slate-500 transition cursor-default"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;


// import React from 'react';
// import { skills } from '../data/skills';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const Skills = () => {
//   return (
//     <section id="skills" className="py-24 bg-black relative">
      
//       {/* Bottom Separator Glow */}
//       <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50"></div>

//       <div className="max-w-4xl mx-auto px-4">
//         <RevealOnScroll>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
//             Technical <span className="text-purple-500">Proficiency</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skillGroup, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2">
//                   {skillGroup.category}
//                 </h3>
                
//                 <div className="flex flex-wrap gap-3">
//                   {skillGroup.items.map((item, idx) => (
//                     <span 
//                       key={idx} 
//                       className="px-4 py-2 bg-black/50 text-gray-300 text-sm rounded-md border border-gray-800 hover:text-white hover:border-purple-500 transition-colors cursor-default"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { skills } from '../data/skills';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black relative">
      
      {/* TRANSITION: Fade from Blue (Projects) to Purple (Skills) */}
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black via-blue-900/10 to-transparent"></div>
      
      {/* Background decoration: Soft Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Technical <span className="text-purple-500">Proficiency</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-black/50 text-gray-300 text-sm rounded-md border border-gray-800 hover:text-white hover:border-purple-500 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;