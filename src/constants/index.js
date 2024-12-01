import {
  DS,
  MLOps,
  prototyping,
  html,
  css,
  git,
  docker,
  python,
  kuber,
  postgresql,  
  alarm,
  bms,
  cyber,
  labview,
  slm,
  wsn,
  elastic,
  aws,
  cpp,
  pytorch,
  sklearn,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'papers',
    title: 'Publications',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// const services = [
//   {
//     title: 'Data Science',
//     icon: DS,
//   },
//   {
//     title: 'MLOps',
//     icon: MLOps,
//   },
//   {
//     title: 'Software Prototyping',
//     icon: prototyping,
//   },
// ];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'Scikit Learn',
    icon: sklearn,
  },
  {
    name: 'Pytorch',
    icon: pytorch,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Elastic Search',
    icon: elastic,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: kuber,
  },
  {
    name: 'AWS',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Sr. Data Scientist',
    company_name: 'MicroFocus',
    // icon: coverhunt,
    iconBg: '#333333',
    date: 'Since Sep 2021',
  },
  {
    title: 'Postdoctoral Fellow',
    company_name: 'University of Alberta',
    // icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2021 - Sep 2021',
  },
  // {
  //   title: 'Software Developer',
  //   company_name: 'Faculty of Rehabilitation Medicine, University of Alberta',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'March 2017 - Sep 2017',
  // },
  {
    title: 'Embedded System Developer',
    company_name: 'SarvNet Telecommunication Inc',
    // icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2011 - Sep 2015',
  },
];


const projects_sw = [
  { 
    id: 'project-cyber',
    shortName: 'Anomaly Detection',
    name: 'Anomaly Detection for Cyber Security',
    description: 'As a data scientist, I have designed and optimized behavioral analytics and anomaly detection modules ' +
    'using machine learning. Our solution leverages advanced algorithms to identify and mitigate potential threats in real-time, ' +
    'ensuring the security of digital assets.',
    image: cyber,
  },
  {
    id: 'project-alarm',
    shortName: 'Industrial Alarm',
    name: 'Industrial Alarm Management Systems',
    description: 'I have had the privilege of contributing to the development of an Alarm Management System for the oil and gas industries. ' +
    'During my involvement, I worked on various algorithms aimed at improving alarm systems, including filters, root cause analysis, ' +
    'interplay of control and alarm systems, and alarm flood classification. These efforts were driven by a desire to enhance operational ' +
    'safety and efficiency in critical industrial environments.',
    image: alarm,
  },
  {
    id: 'project-labview',
    shortName: 'Data Aquizition',
    name: 'Data Acquisition using LabVIEW',
    description: 'I have developed software using LabVIEW for data acquisition in rehabilitation research. ' +
    'DThis software enables researchers to efficiently collect and analyze data, aiding in the advancement of rehabilitation methodologies.',
    image: labview,
  },
];


const projects_hw = [
  { 
    id: 'project-wsn',
    shortName: 'WSN for a Power Plant',
    name: 'Wireless Senso Network for a Power Plant',
    description: 'We developed a wireless sensor network and data aquizition solution specifically designed for power plants. '+
    'It enables precise and continuous measurement of diverse parameters crucial for plant operations. '+
    'By seamlessly transmitting data to a centralized monitoring system, it empowers plant operators to gain real-time insights, '+ 
    'enhance decision-making, and optimize overall performance, ensuring the reliable and efficient operation of power generation facilities.',
    image: wsn,
  },
  {
    id: 'project-bms',
    shortName: 'Inteligent Lighting System',
    name: 'Inteligent Building Lighting Managment System',
    description: "Our team has collaborated on a project to develop a lighting management network that integrates a mobile app, "+
    "software, and connected devices. By harnessing the power of motion detection, our system provides intelligent lighting solutions " + 
    "that automatically respond to users' presence, resulting in enhanced energy efficiency and personalized lighting experiences.",
    image: bms,
  },
  {
    shortName: 'Metal 3D Printer',
    name: 'Selective Laser Melting Printer',
    description: 'I have been involved in the development of a Selective Laser Melting (SLM) Printer, ' +
    'focusing on both hardware and control system advancements. By leveraging cutting-edge technology, ' +
    'our printer enables precise and efficient metal 3D printing. With meticulous attention to detail, we ' +
    'have contributed to enhancing the hardware components and control system, ensuring exceptional print quality and reliability.',
    image: slm,
  },
];

const papers = [
  {
    id: 'project-1',
    shortName: '--',
    name: '--',
    description: 'This research paper studies oscillations in populations of decision makers who are either coordinators or anticoordinators. The results show that the population can admit complex oscillations in the absence of noise and population structure, shedding light on reported oscillations in nature and human societies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: wsn,
    repo: 'https://arxiv.org/pdf/2202.00223.pdf',
  },
  {
    id: 'project-2',
    shortName: 'Characterizing oscillations',
    name: 'Characterizing oscillations in heterogeneous populations of coordinators and anticoordinators',
    description: 'This research paper studies oscillations in populations of decision makers who are either coordinators or anticoordinators. The results show that the population can admit complex oscillations in the absence of noise and population structure, shedding light on reported oscillations in nature and human societies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: wsn,
    repo: 'https://arxiv.org/pdf/2202.00223.pdf',
  },
];

// export { services, technologies, experiences, projects , papers };
export { technologies, experiences, projects_sw, projects_hw , papers };
