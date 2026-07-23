import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";
import { HiOutlinePaperAirplane, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    } catch (err) {
      setStatus("error");
      setResponseMsg("Failed to send message. Please check your network connection.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="scroll-mt-28 pt-4 pb-12">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
          Let's Build Something Together
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
          Have a project in mind, a job opportunity, or just want to say hello? Drop a message below!
        </p>
      </div>

      {/* Two-Column Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* Left Column: Contact Info Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 bg-bg-card rounded-3xl p-6 sm:p-7 border border-border-light shadow-card flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Feel free to reach out directly via email or connect through my social profiles.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {/* Email Info Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-bg-secondary/60 border border-border-light/50">
                <div className="p-2.5 rounded-2xl bg-brand-badge text-brand-secondary shrink-0">
                  {getIcon("email", "w-5 h-5")}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-text-primary hover:text-brand-primary transition-colors truncate block mt-0.5"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Location Info Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-bg-secondary/60 border border-border-light/50">
                <div className="p-2.5 rounded-2xl bg-brand-badge text-brand-secondary shrink-0">
                  {getIcon("location", "w-5 h-5")}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-text-primary mt-0.5">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Web3Forms Contact Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 bg-bg-card rounded-3xl p-6 sm:p-7 border border-border-light shadow-card"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-[11px] font-bold text-text-primary uppercase tracking-wider"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-border-light text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-secondary transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-[11px] font-bold text-text-primary uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-border-light text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-secondary transition-colors"
                required
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-[11px] font-bold text-text-primary uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-border-light text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-secondary transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Status Feedback Message */}
            {status === "success" && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4 shrink-0" />
                <span>{responseMsg}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium flex items-center gap-2">
                <HiExclamationCircle className="w-4 h-4 shrink-0" />
                <span>{responseMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover disabled:opacity-60 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-card transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              {status === "loading" ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <HiOutlinePaperAirplane className="w-4 h-4 rotate-45" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};