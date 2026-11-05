import {
  FaUsers,
  FaTrophy,
  FaHeart,
  FaFutbol,
  FaLaptopCode,
  FaMicrophone,
  FaGuitar,
  FaMusic,
} from "react-icons/fa";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";

// `icon` values accepted in portfolioData.js → extracurricular.items[].icon
const ICONS = {
  users: FaUsers,
  trophy: FaTrophy,
  heart: FaHeart,
  ball: FaFutbol,
  code: FaLaptopCode,
  mic: FaMicrophone,
  guitar: FaGuitar,
  music: FaMusic,
};

const ActivityCard = ({ item, featured, orphan }) => {
  const Icon = ICONS[item.icon] ?? FaUsers;
  const hasHighlights = item.highlights?.length > 0;

  return (
    <article
      className={`glass-card relative overflow-hidden rounded-3xl p-6 sm:p-7 flex flex-col gap-5 ${
        featured
          ? "md:col-span-2 xl:col-span-3 sm:flex-row sm:gap-8 sm:items-start border-pink/40!"
          : orphan
            ? "md:col-span-2 xl:col-span-1"
            : ""
      }`}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-pink/25 blur-3xl pointer-events-none"
        />
      )}

      {/* Icon (+ placing, when the activity has one) */}
      <div className="relative flex items-start justify-between gap-4 shrink-0">
        <div
          className={`grid place-items-center rounded-2xl border ${
            featured
              ? "w-16 h-16 bg-pink text-black border-pink shadow-glow-pink"
              : "w-12 h-12 bg-lime/10 text-lime border-lime/25"
          }`}
        >
          <Icon className={featured ? "w-7 h-7" : "w-5 h-5"} />
        </div>
        {item.position && (
          <div className="text-right">
            <p className="font-display text-5xl leading-none text-lime">{item.position}</p>
            <p className="mt-1 text-xs font-medium text-text-muted">place</p>
          </div>
        )}
      </div>

      {/* Copy */}
      <div className="relative min-w-0 flex-1 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="glass-chip px-2.5 py-0.5 rounded-full text-xs font-semibold text-lime">
            {item.category}
          </span>
          <span className="text-xs font-medium text-text-muted">{item.period}</span>
        </div>

        <div>
          <h3
            className={`font-display font-normal text-text-primary leading-snug ${
              featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-pink">{item.role}</p>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>

        {hasHighlights && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {item.highlights.map((h) => (
              <li
                key={h}
                className="glass-chip inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium text-text-primary"
              >
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-lime" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export const Extracurricular = () => {
  const { extracurricular } = PORTFOLIO_DATA;

  return (
    <section id="extracurricular" className="scroll-mt-28">
      <SectionHeader
        title={extracurricular.heading}
        subtitle={extracurricular.subheading}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {extracurricular.items.map((item, i) => (
          <ActivityCard
            key={item.id}
            item={item}
            featured={i === 0}
            orphan={i > 0 && i === extracurricular.items.length - 1 && i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};
