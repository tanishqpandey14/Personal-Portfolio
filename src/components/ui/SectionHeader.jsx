/**
 * Shared heading block for every section.
 * Left-aligned display title, a short pink→lime rule, one supporting line.
 */
export const SectionHeader = ({ title, subtitle, icon }) => (
  <header className="mb-8 sm:mb-10 max-w-3xl">
    <div className="flex items-center gap-3">
      {icon && (
        <span className="glass-chip grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl text-lime shrink-0">
          {icon}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-text-primary leading-[1]">
        {title}
      </h2>
    </div>
    <span
      aria-hidden="true"
      className="block mt-4 h-1 w-14 rounded-full bg-linear-to-r from-pink to-lime"
    />
    {subtitle && (
      <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
        {subtitle}
      </p>
    )}
  </header>
);
