import { useState } from "react";
import {
  HiOutlinePaperAirplane,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";
import { SectionHeader } from "../ui/SectionHeader";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-pink focus:ring-2 focus:ring-pink/30 transition-colors";
const labelClass = "text-xs font-semibold text-text-secondary";

const InfoRow = ({ icon, label, children }) => (
  <div className="glass-chip flex items-center gap-3.5 p-3.5 rounded-2xl">
    <div className="grid place-items-center w-11 h-11 rounded-xl bg-lime/10 border border-lime/25 text-lime shrink-0">
      {getIcon(icon, "w-5 h-5")}
    </div>
    <div className="min-w-0">
      <p className="text-xs font-medium text-text-muted">{label}</p>
      {children}
    </div>
  </div>
);

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d91273dc-b0f2-4abd-8698-ac5dd5b5d2b8",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Failed to send message. Please check your network connection.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 pb-6">
      <SectionHeader
        title="Let's Build Something Together"
        subtitle="Have a project in mind, a job opportunity, or just want to say hello? Drop a message below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Contact info */}
        <div className="glass-card lg:col-span-5 rounded-3xl p-6 sm:p-7 space-y-6">
          <div>
            <h3 className="font-display text-2xl font-normal text-text-primary">
              Contact information
            </h3>
            <p className="text-sm text-text-secondary mt-1.5">
              Reach out directly by email, or connect through my social profiles.
            </p>
          </div>

          <div className="space-y-3">
            <InfoRow icon="email" label="Email">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-semibold text-text-primary hover:text-pink transition-colors truncate block mt-0.5"
              >
                {personal.email}
              </a>
            </InfoRow>
            <InfoRow icon="location" label="Location">
              <p className="text-sm font-semibold text-text-primary mt-0.5">
                {personal.location}
              </p>
            </InfoRow>
            <InfoRow icon="github" label="GitHub">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-primary hover:text-pink transition-colors truncate block mt-0.5"
              >
                {personal.socials.github.replace("https://", "")}
              </a>
            </InfoRow>
            <InfoRow icon="linkedin" label="LinkedIn">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-primary hover:text-pink transition-colors truncate block mt-0.5"
              >
                {personal.socials.linkedin.replace("https://www.", "").replace(/\/$/, "")}
              </a>
            </InfoRow>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card lg:col-span-7 rounded-3xl p-6 sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className={labelClass}>Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className={labelClass}>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="p-3 rounded-xl bg-lime/10 border border-lime/30 text-lime text-sm font-medium flex items-center gap-2"
              >
                <HiCheckCircle className="w-5 h-5 shrink-0" />
                <span>{responseMsg}</span>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-rose-500/10 border border-rose-400/30 text-rose-300 text-sm font-medium flex items-center gap-2"
              >
                <HiExclamationCircle className="w-5 h-5 shrink-0" />
                <span>{responseMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-5 rounded-xl bg-pink text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-glow-pink hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span>Sending message...</span>
              ) : (
                <>
                  <span>Send message</span>
                  <HiOutlinePaperAirplane className="w-4 h-4 rotate-45" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
