// export const projects = [
//   {
//     title: "AI News Intelligence Platform",
//     description: "Built a Retrieval-Augmented Generation (RAG) system that answers questions about news articles. Leveraged LangChain and FAISS for vector storage and OpenAI embeddings for semantic search.",
//     tech: ["LangChain", "FAISS", "OpenAI API", "Python"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Mini Go Game AI",
//     description: "Developed a Go game engine using PyGame with implemented core mechanics like liberties and captures. Designed a baseline AI agent to make legal strategic moves, setting the foundation for reinforcement learning.",
//     tech: ["Python", "PyGame", "Game AI", "Reinforcement Learning"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "OCR Web Application",
//     description: "Designed a text extraction system using Flask and OpenCV. Implemented advanced image preprocessing techniques like noise reduction and grayscale conversion to optimize Optical Character Recognition accuracy.",
//     tech: ["Python", "Flask", "OpenCV", "Gunicorn"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Robotic Arm Kinematics (NN)",
//     description: "Created neural networks using PyTorch to predict joint angles for 2R/3R/7R robotic manipulators. Performed hyperparameter tuning and visualized inverse kinematics data to improve prediction models.",
//     tech: ["PyTorch", "NumPy", "Matplotlib", "Neural Networks"],
//     link: "#",
//     github: "#"
//   },
//   {
//     title: "Full-Stack E-Commerce App",
//     description: "Developed a platform enabling customer and seller workflows. Engineered the MySQL database schema and stored procedures to optimize inventory management and order processing.",
//     tech: ["Flask", "MySQL", "SQL", "Web Dev"],
//     link: "#",
//     github: "#"
//   }
// ];


export const projects = [
  {
    title: "RAG News Intelligence", // formerly "Intelligent News Article QA System" [cite: 32]
    description: "Built an AI-powered news retrieval system using LangChain and FAISS. It ingests web articles, vectorizes them with OpenAI embeddings, and allows users to ask context-aware questions.",
    tech: ["LangChain", "FAISS", "OpenAI", "RAG"],
    link: "#",
    github: "#"
  },
  {
    title: "Neural Robotic Kinematics", // formerly "Inverse Kinematics... using Neural Networks" [cite: 36]
    description: "Developed a Deep Learning model to solve inverse kinematics for robotic manipulators (2R/3R/7R). Used PyTorch to predict joint angles with high precision, optimizing robotic control.",
    tech: ["PyTorch", "Robotics", "Neural Networks", "Python"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Game Agent (Go)", // formerly "Mini Go Game with AI Agents" [cite: 23]
    description: "Designed a strategic game engine with an AI agent capable of making legal, tactical moves. Built on PyGame, setting the foundation for advanced Reinforcement Learning experiments.",
    tech: ["Game AI", "Reinforcement Learning", "PyGame", "Python"],
    link: "#",
    github: "#"
  },
  {
    title: "Real-Time OCR Engine", // formerly "OCR and image processing web application" [cite: 28]
    description: "Engineered a text extraction system using OpenCV and Flask. Implemented advanced image preprocessing (noise reduction, grayscale) to maximize recognition accuracy on raw input.",
    tech: ["OpenCV", "Flask", "Computer Vision", "Python"],
    link: "#",
    github: "#"
  },
  {
    title: "Scalable E-Commerce Platform", // formerly "E-Commerce Site Development" 
    description: "Developed a full-stack marketplace with optimized database schemas. Implemented stored procedures in MySQL for efficient inventory management and order processing.",
    tech: ["Full Stack", "MySQL", "Flask", "Database Design"],
    link: "#",
    github: "#"
  }
];