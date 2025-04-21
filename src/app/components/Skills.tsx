import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      "7+ years in full software development lifecycle",
      "Java, Spring Boot, Node.js, Express.js",
      "Angular, React, TypeScript, JavaScript",
      "Microservices Architecture",
      "SOLID Principles & Design Patterns"
    ]
  },
  {
    title: "Frontend & UI",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    skills: [
      "Single Page Applications",
      "HTML5, CSS3, Tailwind, Bootstrap",
      "Redux, NgRx State Management",
      "Responsive Design",
      "Modern UI/UX Practices"
    ]
  },
  {
    title: "Backend & Database",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      "RESTful APIs & Microservices",
      "Oracle, MySQL, PostgreSQL",
      "MongoDB, NoSQL Databases",
      "JEE, Hibernate ORM",
      "SQL, PL/SQL, Stored Procedures"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    skills: [
      "AWS (EC2, S3, Lambda, EKS)",
      "Docker & Kubernetes",
      "CI/CD with GitLab & GitHub Actions",
      "Terraform Infrastructure as Code",
      "ELK Stack & Monitoring"
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50/30 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-indigo-50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-indigo-100/80 to-rose-100/80 rounded-lg text-indigo-600 flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 text-rose-500/70 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
