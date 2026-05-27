import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { COMPANY } from "../config/company";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <motion.img
        src={COMPANY.logo}
        alt={COMPANY.shortName}
        className="mb-8 h-32 w-32 object-contain"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.h1
        className="font-display text-6xl font-bold text-brand"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        404
      </motion.h1>
      <p className="mt-4 text-lg text-neutral">This page could not be found.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
