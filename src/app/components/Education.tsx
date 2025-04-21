import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "Maharishi International University",
    period: "2021 - 2023",
    location: "Fairfield, Iowa, USA",
    gpa: "3.14",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Tribhuvan University",
    period: "2012 - 2016",
    location: "Kathmandu, Nepal",
    gpa: "3.6",
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600">{edu.period}</p>
                  <p className="text-gray-500">{edu.location}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">GPA: {edu.gpa}</span>
                <svg className="w-12 h-12 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.721 1.596a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm3.691 3.195L9 13.12l3.26-1.396a6.3 6.3 0 001.74 3.537 1 1 0 01-.12 1.409c-1.44 1.2-3.64 1.2-5.08 0a1 1 0 01-.12-1.409 6.3 6.3 0 001.74-3.537z" />
              </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
