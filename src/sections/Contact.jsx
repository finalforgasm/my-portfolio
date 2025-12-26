// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-24 bg-slate-950">
//       <div className="max-w-4xl mx-auto px-4 text-center">
        
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           Let's work <span className="text-blue-500">together</span>.
//         </h2>
        
//         {/* Subtext */}
//         <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
//           I'm currently looking for new opportunities in Data Science and Software Engineering. 
//           Whether you have a question or just want to say hi, my inbox is always open!
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
//           <a 
//             href="mailto:your.email@example.com" 
//             className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/25 min-w-[200px]"
//           >
//             Say Hello 👋
//           </a>

//           <a 
//             href="https://linkedin.com/in/yourprofile" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition border border-slate-700 min-w-[200px]"
//           >
//             LinkedIn 🔗
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Contact = () => {
  return (
    <section id="contact" className="py-24 min-h-[500px] flex items-center justify-center relative overflow-hidden bg-black">
      
      {/* === BACKGROUND: The "Grand Finale" Horizon === */}
      {/* A wide blue glow at the very bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-900/30 blur-[100px] rounded-t-full pointer-events-none"></div>
      
      {/* A purple accent glow to add depth */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-purple-500/10 blur-[80px] rounded-t-full pointer-events-none"></div>
      
      {/* ============================================== */}


      <RevealOnScroll>
        <div className="text-center px-4 relative z-10 max-w-3xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready to build something <span className="text-blue-500">great?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
             I'm actively looking for internships and full-time roles in Data Science and Software Engineering. Let's turn ideas into reality.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            
            {/* Primary Action */}
            <a 
              href="mailto:saivardhankasuba@gmail.com" 
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:-translate-y-1 text-lg min-w-[200px]"
            >
              Contact Me 📩
            </a>

            {/* Secondary Action */}
            <a 
              href="https://www.linkedin.com/in/sudhadithya-sai-vardhan-kasuba-8a18aa25b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 text-lg min-w-[200px]"
            >
              LinkedIn 🔗
            </a>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;