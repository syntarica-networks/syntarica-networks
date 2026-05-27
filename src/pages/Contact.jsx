import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import Footer from "../components/layout/Footer";
import NetworkBackground from "../components/ui/NetworkBackground";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { COMPANY } from "../config/company";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solution request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-surface pt-24">
      <section className="relative overflow-hidden section-pad">
        <NetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-neutral-text sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg text-neutral"
          >
            Get in touch — tell us what you need delivered.
          </motion.p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {[
              { Icon: MapPin, label: "Address", value: COMPANY.address },
              { Icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="card-glass flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 text-neutral hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-neutral">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="card-glass lg:col-span-3 p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="font-display text-2xl font-bold text-neutral-text">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-neutral">
              Describe your IT or networking requirement. We&apos;ll respond via email.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <Label htmlFor="name" className="text-neutral-text">
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 border-surface-border bg-surface text-neutral-text"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-neutral-text">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 border-surface-border bg-surface text-neutral-text"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-neutral-text">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 border-surface-border bg-surface text-neutral-text"
                  placeholder="Tell us about your project or IT needs..."
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-brand py-6 font-semibold text-surface hover:bg-brand-light"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              {sent && (
                <p className="text-center text-sm text-brand">
                  Opening your email client…
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
