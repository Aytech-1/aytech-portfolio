// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  TailwindCSS,
  TypescriptIcon,
  LaravelIcon,
  MsqlIcon,
  HtmlIcon,
  CssIcon,
  JqueryIcon,
  DotnetIcon,
} from '../utils/icons'

import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaTools, FaSitemap } from 'react-icons/fa'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Online Bookshop System',
    shortDescription:
      'A full-featured e-commerce platform that enables students and institutions to browse, purchase, and manage academic books online with secure ordering, receipt generation, and administrative management.',
    cover: '/projects/bookshop.jpg',
    type: 'Featured',
    livePreview: '',
    githubLink: 'https://github.com/Aytech-1/Web-Loan-Application.git',
    technologies: [
      'Next.js',
      'TypeScript',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'REST API',
    ],
  },

  {
    priority: 2,
    title: 'Authentication & User Management System',
    shortDescription:
      'A secure authentication platform featuring user registration, login, role-based access control, password management, and account administration.',
    cover: '/projects/auth-system.jpg',
    type: 'Security',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/Authentication-And-User-Management-System.git',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
    ],
  },

  {
    priority: 3,
    title: 'AfooTECH Microfinance Bank System',
    shortDescription:
      'A digital banking platform designed for microfinance operations, supporting account management, transactions, customer records, and financial services.',
    cover: '/projects/bank.jpg',
    type: 'Enterprise',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/AfooTECH-Microfinance-Bank.git',
    technologies: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'jQuery',
    ],
  },

  {
    priority: 4,
    title: 'LeadersTutos Educational Platform',
    shortDescription:
      'An educational website that provides tutorials, learning resources, and digital content with a user-friendly and responsive interface.',
    cover: '/projects/leaderstutos.jpg',
    type: 'Web Platform',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/leaderstutos.com.git',
    technologies: [
      'HTML',
      'CSS',
      'Jquery',
      'Bootstrap',
      'PHP',
      'MySQL',
    ],
  },

  {
    priority: 5,
    title: 'Multifunction Console Application',
    shortDescription:
      'A command-line application containing multiple utilities and management modules built with object-oriented programming principles.',
    cover: '/projects/console-app.jpg',
    type: 'Desktop',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/Multifunction-Console-Application.git',
    technologies: [
      'vb.NET',
      'OOP',
      'Console Application',
    ],
  },

  {
    priority: 6,
    title: 'Multifunction Windows Application',
    shortDescription:
      'A desktop application featuring multiple integrated modules with an intuitive graphical interface for efficient task management.',
    cover: '/projects/windows-app.jpg',
    type: 'Desktop',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/Multifunction-windows-Application.git',
    technologies: [
      'VB.NET',
      '.NET Framework',
      'Windows Forms',
      'SQL Server',
    ],
  },

  {
    priority: 7,
    title: 'Automobile Management System',
    shortDescription:
      'A desktop solution for managing automobile records, maintenance information, and operational workflows through a user-friendly interface.',
    cover: '/projects/automobile.jpg',
    type: 'Desktop',
    livePreview: '',
    githubLink:
      'https://github.com/Aytech-1/auto-system-windows.git',
    technologies: [
      'VB.NET',
      'Windows Forms',
      'SQL Server',
      'ADO.NET',
    ],
  },

  {
    priority: 8,
    title: 'Smart Parking Management System',
    shortDescription:
      'An intelligent parking management solution designed to automate parking operations, vehicle tracking, and fee management.',
    cover: '/projects/parking.jpg',
    type: 'IoT',
    livePreview: '',
    githubLink: '',
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript',
      'Bootstrap',
    ],
  },

]

// Service Data
export const serviceData = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    shortDescription:
      'Building responsive, scalable, and secure web applications using Laravel, Next.js, TypeScript, PHP, and MySQL.',
  },
  {
    icon: FaLaptopCode,
    title: 'Custom Software Solutions',
    shortDescription:
      'Developing tailored software systems that streamline business operations and solve real-world challenges.',
  },
  {
    icon: FaServer,
    title: 'API Development & Integration',
    shortDescription:
      'Designing and integrating RESTful APIs to connect applications and automate workflows.',
  },
  {
    icon: FaDatabase,
    title: 'Database Design',
    shortDescription:
      'Creating efficient database structures, optimization strategies, and secure data management solutions.',
  },
  {
    icon: FaSitemap,
    title: 'System Architecture',
    shortDescription:
      'Designing scalable software architectures that ensure maintainability and long-term growth.',
  },
  {
    icon: FaTools,
    title: 'Maintenance & Support',
    shortDescription:
      'Providing bug fixes, performance optimization, and ongoing technical support.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'HTML',
    icon: HtmlIcon,
  },
  {
    name: 'CSS',
    icon: CssIcon,
  },
  {
    name: 'TailwindCSS',
    icon: TailwindCSS,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'JQuery',
    icon: JqueryIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'laravel',
    icon: LaravelIcon,
  },
  {
    name: 'MySQL',
    icon: MsqlIcon,
  },
  {
    name: ' Vb.NET',
    icon: DotnetIcon,
  },
]

// Skill List
export const skills = [
  {
    icon: FaCode,
    title: 'Frontend Development',
    technologies: ['Next.js', 'TypeScript', 'Jquery', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    technologies: ['Laravel', 'PHP', 'REST APIs'],
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    technologies: ['MySQL'],
  },
  {
    icon: FaTools,
    title: 'Tools & Deployment',
    technologies: ['Git', 'GitHub', 'Vercel'],
  },
  {
    icon: FaLaptopCode,
    title: 'Software Development',
    technologies: ['VB.NET', 'Console Applications', 'Windows Applications'],
  },
  {
    icon: FaSitemap,
    title: 'System Design',
    technologies: ['Architecture', 'API Design', 'Scalability'],
  },
]

export const experiences = [
  {
    title: 'Software Director',
    organization: 'Computer Science Department',
    duration: '2024 - 2025',
    description:
      'Served as Software Director for the Computer Science Department. Led software development initiatives, coordinated technology projects, and supported fellow students in programming and software engineering activities.',
  },

  {
    title: 'SIWES Internship',
    organization: 'The Gateway ICT Polytechnic, Saapade',
    duration: '2023',
    description:
      'Completed a four-month Student Industrial Work Experience Scheme (SIWES), acquiring practical skills in software development, web technologies, problem-solving, and professional workplace collaboration.',
  },

  {
    title: 'Industrial Training (IT)',
    organization: 'The Gateway ICT Polytechnic, Saapade',
    duration: '2024 - 2025',
    description:
      'Completed a one-year Industrial Training program focused on Full Stack Web and Software Development, gaining hands-on experience with Laravel, PHP, Next.js, TypeScript, MySQL, and modern development workflows.',
  },

  // {
  //   title: 'NYSC ICT Officer',
  //   organization: 'The Gateway ICT Polytechnic, Saapade',
  //   duration: '2025 - 2026',
  //   description:
  //     'Serving within the ICT Unit, supporting institutional technology operations, software systems, digital transformation initiatives, and IT-related services.',
  // },
]

export const educationData = [
  {
    degree: 'Higher National Diploma (HND)',
    field: 'Computer Science',
    institution: 'The Gateway ICT Polytechnic, Saapade',
    location: 'Ogun State, Nigeria',
    duration: '2023 - 2025',
  },

  {
    degree: 'National Diploma (ND)',
    field: 'Computer Science',
    institution: 'The Gateway ICT Polytechnic, Saapade',
    location: 'Ogun State, Nigeria',
    duration: '2020 - 2022',
  },
]

export const achievements = [
  {
    title: '1st Position - NCS FinTech Competition',
    organization: 'Nigeria Computer Society (NCS)',
    year: '2025',
    description:
      'Developed an innovative FinTech solution and emerged overall winner among tertiary institutions across Ogun State.',
  },

  {
    title: 'Best Project Recognition',
    organization: 'Computer Science Department',
    year: '2025',
    description:
      'Recognized for developing innovative software solutions addressing real-world challenges.',
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
