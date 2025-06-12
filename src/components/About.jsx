
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          To utilize my advanced proficiency in AI, ML, and LLM optimization to architect innovative solutions
          that tackle intricate challenges and elevate organizational performance. Passionate about NLP,
          model deployment, and crafting intelligent tools for the future.
        </p>
      </motion.div>
    </section>
  );
}
