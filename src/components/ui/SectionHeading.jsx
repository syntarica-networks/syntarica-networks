import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-14 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-neutral-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-neutral">{subtitle}</p>
      )}
    </motion.div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
};
