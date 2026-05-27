import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import { SECTORS } from "../config/company";

export default function Clients() {
  return (
    <div className="min-h-screen bg-surface pt-24">
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partnerships"
            title="Industries We Serve"
            subtitle="We deliver IT solutions across sectors — each engagement tailored to your environment and goals."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.title}
                className="card-glass group p-8"
                initial={{ opacity: 0, rotateX: -8, y: 20 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(229,184,11,0.08)",
                }}
              >
                <motion.span
                  className="inline-block text-4xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                >
                  {sector.icon}
                </motion.span>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-text group-hover:text-brand">
                  {sector.title}
                </h3>
                <p className="mt-2 text-neutral">{sector.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 card-glass p-10 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-neutral-text">
              Your industry, your solution
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-neutral">
              Whether you need a campus network, cloud migration, or full
              infrastructure rollout — share your request and we&apos;ll deliver.
            </p>
            <Link to="/contact" className="btn-primary mt-6 inline-flex">
              Become a client
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
