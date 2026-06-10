import type { Project, SkillCategory, Experience } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Go Gaia',
    description:
      'Hackathon project from NJIT GirlsHack 2025 that won the Avanade Best Use of Microsoft Azure AI award. An AI-powered application leveraging Azure cognitive services.',
    category: 'AI Modeling',
    technologies: ['Microsoft Azure AI', 'Python', 'AI Modeling'],
    status: 'In Progress',
    featured: true,
    link: 'https://gogaia.tech',
    date: '2025-09-27',
    award: 'Avanade Best Use of Microsoft Azure AI',
  },
  {
    id: 2,
    name: 'FinRL',
    descriptionHtml: `<strong>FinRL</strong> is an open-source framework for deep reinforcement learning in finance.
      It provides an end-to-end pipeline from data preprocessing to agent training, backtesting, and evaluation.
      I integrated a custom trading environment into the FinRL pipeline and evaluated PPO agents under the new setup.`,
    description:
      'Contributed to an open-source deep reinforcement learning framework for finance. Integrated a custom trading environment and evaluated PPO agents.',
    category: 'Reinforcement Learning',
    technologies: ['Python', 'StableBaselines3', 'PPO', 'FinRL', 'Pandas'],
    status: 'Completed',
    featured: true,
    link: 'https://github.com/Open-Finance-Lab/FinAI-Contest',
    date: '2025-12-05',
  },
  {
    id: 3,
    name: 'DataPulse',
    description:
      'A financial data search and visualization tool for exploring large-scale stock market datasets without a database. Supports flexible time ranges, interactive charts, and fast CSV export across millions of rows.',
    category: 'Data Analysis',
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    status: 'In Progress',
    featured: true,
    link: 'https://github.com/Jason-Z1/DataPulse',
    date: '2025-12-02',
  },
  {
    id: 5,
    name: 'SyllabusAI',
    description:
      'Full-stack RAG application that parses unformatted syllabus data into normalized, queryable tables via REST endpoints. Includes a token-based rate limiting system with IP fallback to prevent abuse while maintaining UX for authenticated users.',
    category: 'Full Stack Web App',
    technologies: ['FastAPI', 'Next.js', 'NextAuth', 'Groq', 'Gemini', 'RAG'],
    status: 'Completed',
    featured: true,
    link: 'https://github.com/Jason-Z1/SyllabusAI',
    date: '2026-01-01',
  },
  {
    id: 4,
    name: 'Scrappy',
    description:
      'A social media application for creatively archiving and sharing memories. Inspired by Pinterest and Instagram, it organizes posts into "scrapbooks." My first full-stack application built from scratch.',
    category: 'Full Stack Web App',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express'],
    status: 'Completed',
    featured: true,
    link: 'https://github.com/RPI-ITWS/ITWS1100-S25-team05',
    date: '2025-04-25',
  },
]

export const experience: Experience[] = [
  {
    id: 1,
    company: 'AgileRadioCom',
    role: 'Software Development Intern',
    technologies: ['Python', 'Flask', 'Socket.IO', 'SSH/SFTP', 'Raspberry Pi', 'FPGA', 'RTL-SDR'],
    bullets: [
      'Built a Python Flask web server with Socket.IO to orchestrate 5+ networked devices, managing complex workflows between Raspberry Pi, FPGA, and RTL-SDR hardware.',
      'Implemented SSH/SCP/SFTP automation layer with robust error handling, status monitoring, and health checks for multi-device coordination.',
      'Designed a bidirectional real-time communication system managing state across distributed devices to prevent interference and ensure message ordering.',
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'AI & ML',
    items: ['PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Reinforcement Learning', 'Azure AI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Azure', 'Linux', 'Vite', 'VS Code'],
  },
]
