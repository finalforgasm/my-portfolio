// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 py-4">
//       <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
//         <a href="#home" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition">
//           MyPortfolio
//         </a>
//         <div className="flex gap-6">
//           <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
//           <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
//           <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
//           <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* <a href="#home" className="font-mono text-xl font-bold text-white tracking-tighter">
            {"<YourName />"} 
            <span className="text-blue-500">.</span>
          </a> */}
            <a href="#home" className="font-mono text-xl font-bold text-white flex items-center gap-0.5">
            Adithya
            <span className="w-2.5 h-5 bg-blue-500 animate-pulse block ml-1"></span>
            </a>

          {/* Mobile Menu Toggle */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;