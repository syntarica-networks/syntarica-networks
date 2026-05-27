import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import NetworkBackground from "../components/ui/NetworkBackground";
import { SERVICES } from "../config/company";

export default function Services() {
  return (
    <div className="min-h-screen bg-surface pt-24">
      <section className="relative overflow-hidden section-pad pb-12">
        <NetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-neutral-text sm:text-5xl"
          >
            Our <span className="gold-gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral"
          >
            IT solutions delivered on request — scoped to your business, built
            for performance and security.
          </motion.p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.id}
                className="card-glass group relative overflow-hidden p-8"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                />
                <span className="relative text-5xl">{service.icon}</span>
                <h2 className="relative mt-6 font-display text-xl font-bold text-neutral-text transition-colors group-hover:text-brand">
                  {service.title}
                </h2>
                <p className="relative mt-3 text-neutral">{service.description}</p>
                <motion.div
                  className="relative mt-6 h-1 w-0 rounded-full bg-brand group-hover:w-full"
                  transition={{ duration: 0.4 }}
                />
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-16 rounded-2xl border border-brand/25 bg-brand/5 p-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-neutral-text">
              Need something specific?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-neutral">
              Describe your requirement — we&apos;ll propose the right solution.
            </p>
            <Link to="/contact" className="btn-primary mt-6 inline-flex">
              Submit a request
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
