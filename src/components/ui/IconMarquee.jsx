import PropTypes from "prop-types";

export default function IconMarquee({ icons, label }) {
  const row = [...icons, ...icons];

  return (
    <div className="overflow-hidden border-y border-surface-border bg-surface-raised/50 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((icon, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2 text-2xl text-brand/90"
          >
            {icon}
          </span>
        ))}
      </div>
      {label && (
        <p className="mt-2 text-center font-mono text-xs uppercase tracking-widest text-brand/70">
          {label}
        </p>
      )}
    </div>
  );
}

IconMarquee.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};
