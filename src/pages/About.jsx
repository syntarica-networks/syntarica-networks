import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import NetworkBackground from "../components/ui/NetworkBackground";
import SectionHeading from "../components/ui/SectionHeading";
import { COMPANY, HIGHLIGHTS } from "../config/company";

const getInitials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function About() {
  return (
    <div className="min-h-screen bg-surface pt-24">
      <section className="relative overflow-hidden section-pad">
        <NetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-brand"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold text-neutral-text sm:text-5xl lg:text-6xl"
          >
            Leading the Digital Revolution
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-surface-raised/40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-neutral">
              {COMPANY.shortName} is a technology company focused on IT and
              networking solutions. We work with customers who bring us
              requirements — we design, build, and deliver solutions that are
              effective, scalable, and secure.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral">
              Incorporated in {COMPANY.incorporated}, we specialize in network
              infrastructure, cloud services, cybersecurity, and integrated IT
              systems. From startups to enterprises, we help organizations build
              robust digital foundations.
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Work with us
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                className="card-glass p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: "rgba(229,184,11,0.5)" }}
              >
                <p className="font-display text-3xl font-bold text-brand">{h.value}</p>
                <p className="mt-1 text-sm text-neutral">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="Request → Deliver → Support"
            subtitle="Our process is built around your needs, not off-the-shelf packages."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand",
                text: "You share goals, constraints, and timelines. We clarify scope and outcomes.",
              },
              {
                step: "02",
                title: "Design & Build",
                text: "We architect, implement, and test your network, cloud, or IT solution.",
              },
              {
                step: "03",
                title: "Deploy & Evolve",
                text: "We hand over with documentation and support options as you grow.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="card-glass relative overflow-hidden p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="font-display text-5xl font-bold text-brand/20">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-neutral-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-raised/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Leadership" subtitle="Experienced directors guiding delivery and strategy." />
          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            {COMPANY.directors.map((d, i) => (
              <motion.div
                key={d.name}
                className="card-glass flex flex-col items-center p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand/20 font-display text-2xl font-bold text-brand">
                  {getInitials(d.name)}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-text">{d.name}</h3>
                <p className="text-brand">{d.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
