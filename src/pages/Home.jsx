import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../components/layout/Footer";
import NetworkBackground from "../components/ui/NetworkBackground";
import IconMarquee from "../components/ui/IconMarquee";
import SectionHeading from "../components/ui/SectionHeading";
import {
  COMPANY,
  SERVICES,
  HIGHLIGHTS,
  SECTORS,
} from "../config/company";

const FLOAT_ICONS = ["🌐", "🔗", "📡", "💻", "🔒", "📶", "🌍", "💡", "⚡", "🛡️"];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
        <NetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-brand"
          >
            {COMPANY.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-neutral-text sm:text-6xl lg:text-7xl"
          >
            <span className="gold-gradient-text">Syntarica</span>
            <br />
            Networks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-neutral sm:text-xl"
          >
            Delivering cutting-edge IT and networking solutions with innovation
            and expertise. We take customer requests, architect the right
            approach, and deliver end-to-end solutions — from enterprise
            networks to cloud and security.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-neutral"
          >
            From enterprise networks to cloud solutions, we build the future of
            connectivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/services" className="btn-primary group">
              Explore Services
              <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Request a Solution
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-neutral"
          >
            {[
              "Custom IT delivery",
              "On-request projects",
              "Secure & scalable design",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-brand/40 p-1">
            <motion.div
              className="mx-auto h-2 w-1 rounded-full bg-brand"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* <IconMarquee icons={FLOAT_ICONS} label="Optimizing networks..." /> */}

      {/* Highlights */}
      <section className="section-pad relative">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.label}
              className="card-glass p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: "rgba(229,184,11,0.4)" }}
            >
              <p className="font-display text-4xl font-bold text-brand">{item.value}</p>
              <p className="mt-2 text-sm text-neutral">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="section-pad bg-surface-raised/50">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we deliver"
            title="Our Services"
            subtitle="End-to-end IT solutions tailored to your requirements."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((s, i) => (
              <motion.article
                key={s.id}
                className="card-glass group p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-text group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 text-neutral">{s.description}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors preview */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we work with"
            title="Industries We Serve"
            subtitle="Partnering with organizations across sectors for reliable digital infrastructure."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.slice(0, 3).map((c, i) => (
              <motion.div
                key={c.title}
                className="card-glass flex items-start gap-4 p-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-text">{c.title}</h3>
                  <p className="mt-1 text-sm text-neutral">{c.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/clients" className="btn-primary">
              See industries
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <motion.div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/20 via-surface-card to-surface p-12 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <NetworkBackground className="opacity-40" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-neutral-text sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-neutral">
              Tell us what you need. We&apos;ll scope, propose, and deliver your
              IT solution.
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Start your request
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
