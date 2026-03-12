const navLinks = [
  {
    name: "AI Projects",
    link: "#ai-projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
  {
    name: "Education",
    link: "#testimonials",
  },
];

const words = [
  { text: "Neural Networks", imgPath: "/images/ideas.svg" },
  { text: "Machine Learning", imgPath: "/images/concepts.svg" },
  { text: "Deep Learning", imgPath: "/images/designs.svg" },
  { text: "AI Models", imgPath: "/images/code.svg" },
  { text: "LLMs", imgPath: "/images/ideas.svg" },
  { text: "Data Science", imgPath: "/images/concepts.svg" },
  { text: "Neural Networks", imgPath: "/images/designs.svg" },
  { text: "Machine Learning", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    value: 5,
    suffix: "+",
    label: "AI Models Trained & Deployed",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years of AI/ML Specialization",
  },
  {
    value: 10,
    suffix: "+",
    label: "AI Projects Completed",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedicated to AI Innovation",
  },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Model Optimization",
    desc: "Expertise in fine-tuning neural networks, optimizing hyperparameters, and improving model performance through systematic experimentation and data-driven insights.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI Ethics & Bias Awareness",
    desc: "Committed to building responsible AI systems with awareness of algorithmic bias, fairness, and ethical considerations in model deployment.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning in AI",
    desc: "Staying current with latest AI research, frameworks, and techniques while actively contributing to the AI/ML community through projects and knowledge sharing.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "TensorFlow",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "PyTorch",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "FastAPI",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "LLMs",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
        "An intensive AI practitioner programme that strengthened my foundations in modern machine learning and practical AI deployment.",
    logoPath: "/images/logo3.png",
    title: "Artificial Intelligence: Practitioner Training Program",
    date: "Aug 2024 · MD Workforce Training Programme (MDEC)",
    responsibilities: [
      "Explored open-source AI tools and frameworks, including Ollama and ComfyUI.",
      "Implemented deep learning models and neural networks using TensorFlow and PyTorch.",
      "Deployed self-trained AI models with FastAPI and built custom chatbots for real use cases.",
      "Worked with large language models (LLMs) and applied core concepts of generative AI and prompt engineering.",
      "Discussed real-world AI deployment challenges such as scalability, bias and ethical considerations.",
    ],
  },
  {
    review:
        "Hands-on part-time role focused on FPV drone assembly, configuration and on-site technical support during events and trainings.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Part-Time Drone Technician",
    date: "Jan 2023 – Present · Futurise Sdn. Bhd.",
    responsibilities: [
      "Assemble FPV drones and configure flight controllers for stability, performance and custom flight profiles.",
      "Troubleshoot and debug flight control systems in real time to ensure safe, reliable operation.",
      "Support and co-facilitate hands-on training sessions on drone configuration, safety protocols and basic programming.",
      "Provide technical support and live demonstrations at events such as the Selangor Aviation Show.",
    ],
  },
  {
    review:
        "Freelance 3D modelling engagement that strengthened my skills in architectural visualisation and client communication.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.jpg",
    title: "Freelance 3D Modeller (Showroom Visualisation)",
    date: "Sept 2024 · Sailcott International Sdn. Bhd.",
    responsibilities: [
      "Created a detailed 3D showroom model for a proposed Perodua 3S Centre using real-world measurements and site context.",
      "Produced architectural visualisations in SketchUp to support client presentations and planning submissions.",
      "Collaborated with stakeholders to refine design requirements and iterate on both functional and aesthetic aspects.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "The National University of Malaysia (UKM), Bangi",
    mentions: "Bachelor of Software Engineering with Honours (Multimedia System Development)",
    date: "Oct 2022 – Present",
    review:
        "Bachelor of Software Engineering (Multimedia System Development) student, actively involved in interactive media initiatives, student activities and peer learning.",
    imgPath: "/images/ukm.png",
  },
  {
    name: "MARA University of Technology (UiTM), Dengkil",
    mentions: "Foundation in Science",
    date: "Aug 2021 – Aug 2022",
    review:
        "Completed Foundation in Science with a strong focus on analytical thinking, mathematics and collaborative teamwork.",
    imgPath: "/images/uitm-vector-logo.png",
  },

];



const certifications = [
  {
    title: "Artificial Intelligence: Practitioner Training Program",
    issuer: "MD Workforce Training Programme (MDEC)",
    date: "August 2024",
    description: "Intensive training in machine learning frameworks, model deployment, and AI ethics",
    logoPath: "/images/logo3.png",
    badge: "AI Practitioner",
  },
];

const aiProjects = [
  {
    title: "AI PDF Summariser Web App",
    description: "Full-stack AI application that summarizes uploaded PDFs using advanced LLM integration",
    techStack: ["Next.js", "TypeScript", "DeepSeek API", "Supabase", "Clerk"],
    imagePath: "/images/ai-project.png",
    highlights: [
      "Custom API routes for secure LLM interactions",
      "User authentication and data management",
      "Real-time PDF processing and summarization",
    ],
  },
  {
    title: "Custom Chatbot Development",
    description: "Built production-ready chatbots using FastAPI and trained models for real-world applications",
    techStack: ["Python", "FastAPI", "TensorFlow", "LLMs"],
    imagePath: "/images/chat.png",
    highlights: [
      "Model training and fine-tuning",
      "API deployment and integration",
      "Context-aware conversation handling",
    ],
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/zafrishaifull",
  },
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    link: "#",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  certifications,
  aiProjects,
};
