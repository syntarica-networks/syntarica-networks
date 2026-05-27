import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NODES = [
  { x: "12%", y: "22%", delay: 0 },
  { x: "78%", y: "18%", delay: 0.4 },
  { x: "88%", y: "62%", delay: 0.8 },
  { x: "22%", y: "72%", delay: 1.2 },
  { x: "52%", y: "48%", delay: 0.6 },
  { x: "35%", y: "38%", delay: 1 },
];

export default function NetworkBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-brand/8 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden>
        <motion.line
          x1="12%"
          y1="22%"
          x2="52%"
          y2="48%"
          stroke="#E5B80B"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <line x1="52%" y1="48%" x2="78%" y2="18%" stroke="#E5B80B" strokeWidth="0.5" opacity="0.5" />
        <line x1="52%" y1="48%" x2="88%" y2="62%" stroke="#E5B80B" strokeWidth="0.5" opacity="0.5" />
        <line x1="22%" y1="72%" x2="52%" y2="48%" stroke="#E5B80B" strokeWidth="0.5" opacity="0.5" />
      </svg>
      {NODES.map((node, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#E5B80B]"
          style={{ left: node.x, top: node.y }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: node.delay }}
        />
      ))}
    </div>
  );
}

NetworkBackground.propTypes = {
  className: PropTypes.string,
};
