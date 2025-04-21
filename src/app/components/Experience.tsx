import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Insight Global @ Western Governors University",
    role: "Senior Full Stack Engineer",
    period: "Dec 2024 - Present",
    location: "Dallas, TX",
    description: "Full-stack development for WGU's Student Portal, focusing on financial systems integration and student experience enhancement.",
    projects: [
      {
        name: "Student Financial Portal",
        description: "Integrated comprehensive financial aid tracking, FAFSA processing, and payment management system into WGU's Student Portal.",
        tech: ["Angular", "Java", "Express.js", "AWS"],
        achievements: [
          "Implemented real-time payment tracking and processing",
          "Integrated FAFSA application workflow",
          "Built responsive dashboard for financial aid tracking"
        ]
      }
    ],
    highlights: [
      "Led development of microservices using Spring Boot and Node.js, improving system modularity and scalability",
      "Developed responsive user interfaces using Angular and used NgRx for state management",
      "Mentored junior developers and conducted code reviews to maintain high code quality"
    ]
  },
  {
    company: "Creospan @ Northern Trust Bank",
    role: "Full Stack Developer",
    period: "Oct 2023 - Dec 2024",
    location: "Chicago, IL",
    description: "Developed and maintained enterprise-level financial management applications with focus on cash management solutions.",
    projects: [
      {
        name: "Cash Management System",
        description: "Built a comprehensive cash management application for enterprise clients, handling multi-currency transactions and real-time reporting.",
        tech: ["React", "Spring Boot", "PostgreSQL", "Redis"],
        achievements: [
          "Implemented real-time cash flow monitoring",
          "Built automated reconciliation system",
          "Developed custom reporting dashboard"
        ]
      }
    ],
    highlights: [
      "Architected and developed RESTful APIs using Spring Boot",
      "Implemented OAuth2 authentication and role-based access control",
      "Implemented multithreading to optimize application performance, reducing processing time by 60% and improving responsiveness in high-concurrency environments."
    ]
  },
  {
    company: "ITC Infotech @ Goldman Sachs",
    role: "Software Engineer",
    period: "Sep 2022 - June 2023",
    location: "Dallas, TX",
    description: "Worked in Payment Engineering team, developing high-performance payment processing systems handling millions of transactions daily.",
    projects: [
      {
        name: "Payment Processing Engine",
        description: "Developed core payment processing infrastructure handling cross-border transactions and multi-currency settlements.",
        tech: ["Java", "Spring Boot", "Oracle", "Kafka"],
        achievements: [
          "Built scalable payment processing pipeline",
          "Implemented real-time transaction monitoring",
          "Developed automated settlement system"
        ]
      }
    ],
    highlights: [
      "Designed and implemented high-throughput payment processing systems",
      "Developed real-time transaction monitoring and fraud detection features",
      "Improved system reliability with comprehensive error handling and recovery mechanisms"
    ]
  },
  {
    company: "Thulotechnology Pvt. Ltd.",
    role: "Full Stack Java Developer",
    period: "Feb 2020 - Sep 2021",
    location: "Kathmandu, Nepal",
    description: "Worked as full-stack developer of financial software, implementing microservices architecture and optimizing system performance.",
    projects: [
      {
        name: "Financial Software Platform",
        description: "Developed and maintained a comprehensive financial software platform with microservices architecture.",
        tech: ["Java", "Spring Boot", "NodeJS", "AngularJS", "Kafka", "ELK Stack"],
        achievements: [
          "Reduced transaction response times by 15% using Java multithreading",
          "Implemented microservices with Spring Boot and NodeJS",
          "Integrated ELK stack for centralized logging and monitoring"
        ]
      }
    ],
    highlights: [
      "Designed and developed microservices using Spring Boot, Spring Security, and Spring Webflux",
      "Implemented advanced Java 8 features including Parallel Streams, Lambdas, and functional interfaces",
      "Set up CI/CD pipeline with Jenkins and integrated with Slack for automated notifications",
      "Utilized ELK stack for real-time log analysis and troubleshooting",
      "Developed expertise in J2EE technologies and contributed to technical documentation"
    ]
  },
  {
    company: "Alpha Teds",
    role: "Software Engineer",
    period: "Apr 2017 - Jan 2020",
    location: "Kathmandu, Nepal",
    description: "Developed and maintained various web applications including e-commerce and e-learning platforms, focusing on microservices architecture and performance optimization.",
    projects: [
      {
        name: "E-commerce & E-learning Platforms",
        description: "Built scalable web applications using microservices architecture, implementing robust data management and API integrations.",
        tech: ["Java", "Spring Boot", "NodeJS", "Angular", "AWS", "GraphQL"],
        achievements: [
          "Implemented efficient data storage using DynamoDB and Snowflake",
          "Integrated multiple third-party APIs and microservices",
          "Optimized database performance with proper ER relationships"
        ]
      }
    ],
    highlights: [
      "Designed and implemented applications using Spring MVC, Spring IOC, and Hibernate",
      "Optimized performance using Java collections and multi-threading for real-time financial data processing",
      "Managed CI/CD deployments to AWS environments using Terraform",
      "Implemented monitoring solutions using DataDog and PagerDuty",
      "Developed robust data access layer using DAO pattern with JPA and Hibernate ORM"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Company Info */}
                <div className="lg:w-1/3 backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 lg:p-0 lg:bg-transparent lg:shadow-none">
                  <div className="sticky top-24">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 mt-2">{exp.role}</p>
                    <p className="text-gray-600 mt-1">{exp.period}</p>
                    <p className="text-gray-600">{exp.location}</p>
                    <p className="text-gray-700 mt-4">{exp.description}</p>
                  </div>
                </div>

                {/* Projects and Highlights */}
                <div className="lg:w-2/3 space-y-8">
                  {/* Projects */}
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (pIndex * 0.05) }}
                      className="backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-indigo-50"
                    >
                      <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-4 space-y-2">
                        {project.achievements.map((achievement, aIndex) => (
                          <li
                            key={aIndex}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <svg className="w-4 h-4 text-rose-500/70 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                  
                  {/* Role Highlights */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                    className="backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-rose-50"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-indigo-600">Key Highlights</h4>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <svg className="w-4 h-4 text-rose-500/70 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}