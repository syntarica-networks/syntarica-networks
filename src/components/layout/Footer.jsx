import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "../../config/company";

const social = [
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-raised">
      <div className="section-pad mx-auto max-w-7xl !py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img
              src={COMPANY.logo}
              alt={COMPANY.shortName}
              className="mb-4 h-14 w-14 object-contain"
            />
            <h3 className="font-display text-xl font-bold text-neutral-text">
              {COMPANY.shortName}
            </h3>
            <p className="mt-3 max-w-md text-neutral">
              We deliver custom IT and networking solutions on request — from
              design through deployment and ongoing support.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-brand">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-brand">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral">
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-lg border border-surface-border p-2 text-neutral hover:border-brand hover:text-brand"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-border pt-8 text-center text-sm text-neutral">
          <p>
            © {year} {COMPANY.name} All rights reserved.
          </p>
          <p className="mt-1 opacity-70">
            {COMPANY.legalName} · CIN {COMPANY.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}
