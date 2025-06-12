
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Data Scientist",
    company: "BeamX TechLabs, Hyderabad",
    date: "Oct 2024 – Present",
    description: "Worked on Podcast Summarizer, PDF summarization, LLM deployments, text-to-SQL demos, model quantization, fine-tuning, and vLLM serving.",
  },
  {
    role: "Intern Data Scientist",
    company: "GeekBull Consulting",
    date: "Jun 2024 – Sept 2024",
    description: "Built RAG pipelines for chatbots, financial doc processing, and designed interactive Streamlit UIs.",
  },
  {
    role: "Content Specialist",
    company: "Thomson Reuters",
    date: "Jun 2020 – Jul 2022",
    description: "Handled page inspection and correction with 100% quality metrics.",
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        {experiences.map((exp, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="mb-6 p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.date}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
