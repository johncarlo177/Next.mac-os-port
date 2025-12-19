import { writable } from 'svelte/store';
import type { ExperienceData } from '../types/experienceType';

const initialExperiences: ExperienceData[] = [
  {
    id: 'riseapps-2021-2025',
    period: '2021-2025',
    title: 'Senior Python & AI developer',
    company: 'Riseapps',
    location: 'United States',
    description: [
      '-Developed and deployed machine learning models using Python, leveraging libraries like TensorFlow, PyTorch, and Scikit-learn to solve complex problems such as predictive analytics and natural language processing.',
      '-Built end-to-end data pipelines, from data collection and cleaning to model training, evaluation, and deployment using cloud platforms like AWS and Azure.',
      '-Integrated AI models into production environments, optimizing performance and accuracy, and collaborated with cross-functional teams to implement data-driven solutions that improved business outcomes.',
      '-Automated tasks and workflows using Python scripts, streamlining processes and enhancing operational efficiency.'
    ]
  },
  {
    id: 'insurnest-2017-2021',
    period: '2017-2021',
    title: 'Backend Developer',
    company: 'Insurnest',
    location: 'Sweden',
    description: [
      '-Built and maintained high-performance, scalable backend services using Node.js, Express, and MongoDB, enabling seamless data flow between users and databases. Designed and implemented RESTful APIs, integrating third-party services such as Stripe and Twilio to enhance functionality.',
      '-Created deployment pipelines on AWS for development and production deployment to build Docker containers, run tests, and deploy to the server/Elastic Beanstalk.',
      '-Designed a solution allowing seamless processing of compute-intensive data to and from the application.',
      '-Developed an integration with third-party services (NWEA, Easybridge, Powerschool, Clever, Lexia, etc.).'
    ]
  },
  {
    id: 'tallium-2014-2017',
    period: '2014-2017',
    title: 'Junior Full Stack Developer',
    company: 'Tallium',
    location: 'Philippines',
    description: [
      '-Worked alongside senior developers to build and optimize responsive web applications, learned best practices for database management and API integration.',
      '-Collaborated with cross-functional teams to design and implement scalable and responsive solutions using technologies like React, Node.js, Laravel and Python.',
      '-Architected and implemented complex database solutions with SQL Server and PostgreSQL, optimizing data storage, retrieval, and manipulation, which enhanced data processing efficiency by 30%.'
    ]
  }
];

export const experiences = writable<ExperienceData[]>(initialExperiences);

