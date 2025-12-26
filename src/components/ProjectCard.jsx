// import React from 'react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group">
      
//       {/* Title & Link Icon */}
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
//           {project.title}
//         </h3>
//         <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
//           GitHub ↗
//         </a>
//       </div>

//       {/* Description */}
//       <p className="text-slate-400 mb-6 text-sm leading-relaxed">
//         {project.description}
//       </p>

//       {/* Tech Stack Tags */}
//       <div className="flex flex-wrap gap-2 mt-auto">
//         {project.tech.map((tech, index) => (
//           <span 
//             key={index} 
//             className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default ProjectCard;





// import React from 'react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-300 group">
      
//       {/* 1. Header Area */}
//       <div className="p-6 pb-4">
//         <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
//               {project.title}
//             </h3>
            
//             {/* Github Link with Icon */}
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//               </svg>
//             </a>
//         </div>

//         {/* 2. Description */}
//         <p className="text-gray-400 text-sm leading-relaxed mb-4">
//           {project.description}
//         </p>

//         {/* 3. Tech Stack Tags */}
//         <div className="flex flex-wrap gap-2 pt-2">
//           {project.tech.map((tech, index) => (
//             <span 
//               key={index} 
//               className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300 group h-full">
      
      {/* 1. Visual Header (The "Thumbnail") */}
      {/* Uses a different gradient based on hover/active state to feel dynamic */}
      <div className="h-48 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black group-hover:from-blue-600/20 group-hover:via-purple-600/20 transition-colors relative overflow-hidden">
        
        {/* Decorative Blur Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[50px] rounded-full translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/30 blur-[40px] rounded-full -translate-x-5 translate-y-5"></div>
        
        {/* Optional: Add an icon or large text here if you want */}
      </div>

      {/* 2. Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            {/* Github Icon */}
            <a href={project.github} className="text-gray-400 hover:text-white transition-colors opacity-70 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
        </div>

        <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack - Bigger & clearer */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm font-medium text-blue-200 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;