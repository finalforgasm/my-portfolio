// import React from 'react';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
      
//       {/* This renders your new Navbar at the top */}
//       <Navbar />

//       {/* This is a temporary container so you can see the text below the navbar */}
//       <div className="pt-32 px-4 max-w-5xl mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-4">
//           Hello! 👋
//         </h1>
//         <p className="text-xl">
//           If you see the blue "MyPortfolio" bar at the top, everything is working perfectly.
//         </p>
//       </div>

//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero'; // <--- Import the new section

// function App() {
//   return (
//     <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
//       <Navbar />
      
//       {/* Sections */}
//       <Hero />
      
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills'; // <--- We import the new section here

// function App() {
//   return (
//     <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
//       <Navbar />
      
//       {/* Page Sections */}
//       <Hero />
//       <Projects />
//       <Skills />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact'; // <--- Import Contact
// import Footer from './components/Footer'; // <--- Import Footer

// function App() {
//   return (
//     <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
//       <Navbar />
//       <Hero />
//       <Projects />
//       <Skills />
//       <Contact /> {/* <--- Add Contact */}
//       <Footer />  {/* <--- Add Footer */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact';
// import Footer from './components/Footer';

// function App() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div className="bg-black min-h-screen text-gray-100">
//             <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//             <Hero />
//             <Projects />
//             <Skills />
//             <Contact />
//             <Footer />
//         </div>
//     );
// }

// export default App;

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero';
// import About from './sections/About'; // <--- Import About
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact';
// import Footer from './components/Footer';

// function App() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div className="bg-black min-h-screen text-gray-100">
//             <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//             <Hero />
//             <About />    {/* <--- Add it here, right after Hero */}
//             <Projects />
//             <Skills />
//             <Contact />
//             <Footer />
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        // Removed 'bg-black' here because we handled it in index.css
        <div className="min-h-screen text-gray-100">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <Hero />
            
            <About />
            
            <Projects />
            
            {/* <Skills /> */}
            
            <Contact />
            
            <Footer />
        </div>
    );
}

export default App;