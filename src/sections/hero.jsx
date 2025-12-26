// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      
//       {/* BACKGROUND EFFECTS */}
//       {/* 1. Subtle blue glow at the top center */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      
//       {/* 2. Subtle teal glow at bottom right */}
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
//         {/* Intro Tag
//         <div className="mb-6 inline-block">
//           <span className="py-1 px-3 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
//             👋 Welcome to my portfolio
//           </span>
//         </div> */}
        
//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//           Hi, I'm <br />
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 animate-gradient">
//             Sudhadithya Sai Vardhan Kasuba
//           </span>
//         </h1>

//         {/* Sub-headline */}
//         <h2 className="text-2xl md:text-4xl font-medium text-slate-400 mb-8 max-w-2xl mx-auto">
//           Exploring <span className="text-slate-200">intelligent data systems</span> and <span className="text-slate-200">and applied machine learning</span>.
//         </h2>

//         {/* Description */} 
//         <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
//           I’m learning to connect data analysis with intuitive interfaces while exploring machine learning and real-world data problems.
//         </p>

//         {/* Modern Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <a 
//             href="#projects" 
//             className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.5)] font-medium w-full sm:w-auto"
//           >
//             View Projects
//           </a>
//           <a 
//             href="#contact" 
//             className="px-8 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-500 hover:text-white hover:bg-slate-800/50 transition font-medium w-full sm:w-auto"
//           >
//             Contact Me
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from 'react';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         <RevealOnScroll>
//             <div className="text-center z-10 px-4">
//                 <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//                     Hi, Sudhadithya Sai Vardhan Kasuba.
//                 </h2>

//                 <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
//                     Exploring <span className="text-slate-200">intelligent data systems</span> and <span className="text-slate-200"> applied machine learning</span>.
//                 </p>

//                 <div className="flex justify-center space-x-4">
//                     <a href="#projects" className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
//                         View Projects
//                     </a>
                    
//                     <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
//                         Contact Me
//                     </a>
//                 </div>
//             </div>
//         </RevealOnScroll>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
      
//       {/* === INTENSE BACKGROUND STARTS === */}
      
//       {/* Blob 1: Purple (Top Left) - Bigger & Brighter */}
//       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
      
//       {/* Blob 2: Cyan (Top Right) - Distinct Pop */}
//       <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
      
//       {/* Blob 3: Deep Blue (Bottom) - Foundation */}
//       <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-4000"></div>

//       {/* Glass Overlay (Slightly darker now to keep text readable over the bright glow) */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      
//       {/* === INTENSE BACKGROUND ENDS === */}


//       <RevealOnScroll>
//         <div className="text-center z-10 px-4 relative">
            
//             {/* Badge - 'Shining' effect */}
//             <div className="inline-block mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)] transition hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
//                <p className="text-sm font-medium text-purple-300">🎓 Graduating Class of 2025</p>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//                 Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Your Name</span>
//             </h1>

//             <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed font-light">
//                 A creative problem solver bridging the gap between <span className="text-white font-semibold">complex data</span> and <span className="text-white font-semibold">interactive design</span>.
//             </p>

//             <div className="flex justify-center space-x-4">
//                 {/* Primary Button - 'Liquid' White */}
//                 <a href="#projects" className="bg-white text-black py-3 px-8 rounded-full font-bold hover:bg-gray-200 transition transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
//                     View My Work
//                 </a>
                
//                 {/* Secondary Button - Glassy */}
//                 <a href="#contact" className="border border-white/30 text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition backdrop-blur-sm">
//                     Let's Talk
//                 </a>
//             </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

//export default Hero;

import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
      
      {/* === BACKGROUND STARTS === */}
      
      {/* Blob 1: Purple - Opacity set to exactly 47% */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-[0.47] animate-blob"></div>
      
      {/* Blob 2: Cyan - Opacity set to exactly 47% */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-[0.47] animate-blob animation-delay-2000"></div>
      
      {/* Blob 3: Deep Blue - Opacity set to exactly 47% */}
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.47] animate-blob animation-delay-4000"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      
      {/* === BACKGROUND ENDS === */}


      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
            
            {/* Badge */}
            {/* <div className="inline-block mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)] transition hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
               <p className="text-sm font-medium text-purple-300">🎓 Graduating Class of 2025</p>
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Sudhadithya</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed font-light">
                A problem solver bridging the gap between <span className="text-white font-semibold"> data</span>, <span className="text-white font-semibold">algorithms </span> and <span className="text-white font-semibold">scalable systems</span>.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-white text-black py-3 px-8 rounded-full font-bold hover:bg-gray-200 transition transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                    View My Work
                </a>
                
                <a href="#contact" className="border border-white/30 text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition backdrop-blur-sm">
                    Let's Talk
                </a>
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;