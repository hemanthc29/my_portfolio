import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Mock API call to simulate email delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Automatically hide success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-bg-darker/10 theme-transition">
      {/* Background decoration */}
      <div className="absolute right-1/10 bottom-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none theme-transition" />
      <div className="absolute left-1/10 top-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none theme-transition" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Details Cards (5 Cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-text-primary theme-transition">Let's discuss opportunities!</h3>
              <p className="text-text-muted text-sm leading-relaxed theme-transition">
                Whether you're looking for an entry-level SDE, backend engineering intern, full-stack engineer, or want to discuss optimization algorithms and systems design, I'm always open to talking.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-4 flex-1 mt-6 lg:mt-0">
              {/* Email Card */}
              <motion.a 
                variants={itemVariants}
                href={`mailto:${email}`} 
                className="p-5 glassmorphism rounded-2xl border border-border-glass hover:border-purple-500/30 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5 group theme-transition"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 theme-transition">
                  <FiMail />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-mono tracking-wider font-semibold theme-transition">Email Address</p>
                  <p className="text-sm font-semibold text-text-secondary group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mt-0.5 theme-transition">{email}</p>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a 
                variants={itemVariants}
                href={`tel:${phone}`} 
                className="p-5 glassmorphism rounded-2xl border border-border-glass hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5 group theme-transition"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 theme-transition">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-mono tracking-wider font-semibold theme-transition">Phone Contact</p>
                  <p className="text-sm font-semibold text-text-secondary group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mt-0.5 theme-transition">{phone}</p>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div 
                variants={itemVariants}
                className="p-5 glassmorphism rounded-2xl border border-border-glass flex items-center gap-4 theme-transition"
              >
                <div className="w-11 h-11 rounded-xl bg-bg-dark border border-border-glass flex items-center justify-center text-text-muted text-lg theme-transition">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-mono tracking-wider font-semibold theme-transition">Current Location</p>
                  <p className="text-sm font-semibold text-text-secondary mt-0.5 theme-transition">{location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Panel */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-6 border-t border-border-glass text-text-muted justify-center lg:justify-start theme-transition"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted theme-transition">Find Me:</span>
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-bg-dark hover:bg-purple-500/10 hover:text-purple-400 border border-border-glass flex items-center justify-center transition-all duration-300 theme-transition"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-bg-dark hover:bg-purple-500/10 hover:text-purple-400 border border-border-glass flex items-center justify-center transition-all duration-300 theme-transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </motion.div>
          </motion.div>

          {/* Form Content (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-2xl glassmorphism border border-border-glass shadow-2xl relative theme-transition">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Dual Input: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-text-muted theme-transition">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-bg-darker border rounded-xl text-text-primary text-sm focus:outline-none focus:border-purple-500/50 transition-colors theme-transition ${formErrors.name ? "border-rose-500/50" : "border-border-glass"}`}
                    />
                    {formErrors.name && <p className="text-[10px] text-rose-500 font-mono mt-0.5">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-text-muted theme-transition">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-bg-darker border rounded-xl text-text-primary text-sm focus:outline-none focus:border-purple-500/50 transition-colors theme-transition ${formErrors.email ? "border-rose-500/50" : "border-border-glass"}`}
                    />
                    {formErrors.email && <p className="text-[10px] text-rose-500 font-mono mt-0.5">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-muted theme-transition">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-bg-darker border rounded-xl text-text-primary text-sm focus:outline-none focus:border-purple-500/50 transition-colors theme-transition ${formErrors.subject ? "border-rose-500/50" : "border-border-glass"}`}
                  />
                  {formErrors.subject && <p className="text-[10px] text-rose-500 font-mono mt-0.5">{formErrors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-text-muted theme-transition">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-bg-darker border rounded-xl text-text-primary text-sm focus:outline-none focus:border-purple-500/50 transition-colors theme-transition ${formErrors.message ? "border-rose-500/50" : "border-border-glass"}`}
                  />
                  {formErrors.message && <p className="text-[10px] text-rose-500 font-mono mt-0.5">{formErrors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-bg-card/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10 theme-transition"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-3xl mb-4 shadow-xl theme-transition">
                      <FiCheckCircle />
                    </div>
                    <h4 className="font-display text-xl font-bold text-text-primary mb-2 theme-transition">Message Sent!</h4>
                    <p className="text-text-muted text-xs leading-relaxed max-w-xs mb-6 theme-transition">
                      Thank you for contacting me. I will review your inquiry and respond to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-4 py-2 bg-bg-darker border border-border-glass hover:border-purple-500/50 text-text-secondary hover:text-text-primary rounded-xl text-xs font-semibold transition-colors cursor-pointer theme-transition"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
