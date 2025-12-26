// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import { projects } from '../data/projects'; // Importing the data we made earlier

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-slate-950">
//       <div className="max-w-5xl mx-auto px-4">
        
//         {/* Section Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//           Featured <span className="text-blue-500">Projects</span>
//         </h2>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import { projects } from '../data/projects';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-32 bg-slate-950 relative">
      
//       {/* 1. Subtle Divider Line (Visual Separation) */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50"></div>

//       <div className="max-w-5xl mx-auto px-4">
        
//         {/* 2. The "Bridge" - Motivating Intro */}
//         <div className="mb-16 max-w-2xl">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Turning data into <span className="text-blue-500">decisions</span>.
//           </h2>
//           <p className="text-slate-400 text-lg leading-relaxed">
//             I don't just write code; I build tools that solve specific problems. 
//             Below are a few selected projects where I applied technical skills to create real-world impact.
//           </p>
//         </div>

//         {/* 3. The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import { projects } from '../data/projects';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-black text-white relative">
      
//       {/* Background Glow for this section */}
//       <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      
//       <div className="max-w-5xl mx-auto px-4">
        
//         <RevealOnScroll>
//           <div className="mb-16 text-center lg:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured <span className="text-blue-500">Projects</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl">
//               A selection of my recent work in Data Science and Web Development. 
//               Hover over cards to see details.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <ProjectCard key={index} project={project} />
//             ))}
//           </div>
//         </RevealOnScroll>

//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import { projects } from '../data/projects';
// import { RevealOnScroll } from '../components/RevealOnScroll';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-black relative">
      
//       <div className="max-w-5xl mx-auto px-4 relative z-10">
//         <RevealOnScroll>
//           <div className="mb-16 text-center lg:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//               Featured <span className="text-blue-500">Projects</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl">
//               A selection of my recent work in Data Science and Web Development. 
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <ProjectCard key={index} project={project} />
//             ))}
//           </div>
//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              Featured <span className="text-blue-500">Work</span>
            </h2>
            <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto">
              Deep dives into data analysis, machine learning, and Artificial Intelligence.
            </p>
          </div>

          {/* THE BIG CHANGE: md:grid-cols-2 (Was 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;