import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiFacebook } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual API endpoint or Firebase function
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FiMail, href: "mailto:evolutioncalculation@gmail.com", label: "Email" },
    { icon: FiGithub, href: "https://github.com/mohmmedalkhatim", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/mk4ut/", label: "LinkedIn" },
    { icon: FiFacebook, href: "https://web.facebook.com/profile.php?id=100076305147091", label: "Facebook" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg
                    bg-slate-800/50 border
                    ${errors.name ? "border-red-500" : "border-slate-700"}
                    text-slate-200 placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500
                    transition-colors
                  `}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg
                    bg-slate-800/50 border
                    ${errors.email ? "border-red-500" : "border-slate-700"}
                    text-slate-200 placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500
                    transition-colors
                  `}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg
                    bg-slate-800/50 border
                    ${errors.subject ? "border-red-500" : "border-slate-700"}
                    text-slate-200 placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500
                    transition-colors
                  `}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`
                    w-full px-4 py-3 rounded-lg
                    bg-slate-800/50 border
                    ${errors.message ? "border-red-500" : "border-slate-700"}
                    text-slate-200 placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500
                    transition-colors resize-none
                  `}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full px-6 py-3 rounded-lg
                  bg-gradient-to-r from-sky-500 to-sky-600
                  text-white font-medium
                  hover:from-sky-600 hover:to-sky-700
                  focus:outline-none focus:ring-2 focus:ring-sky-500/50
                  transition-all duration-200
                  flex items-center justify-center gap-2
                  ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm"
                >
                  Failed to send message. Please try again or contact me directly via email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold text-slate-200 mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="
                      flex items-center gap-4 p-4 rounded-lg
                      bg-slate-800/30 border border-slate-700
                      hover:border-sky-500/50 hover:bg-slate-800/50
                      transition-all duration-200 group
                    "
                  >
                    <div className="
                      w-12 h-12 rounded-full
                      bg-gradient-to-br from-sky-500/20 to-sky-600/20
                      border border-sky-500/30
                      flex items-center justify-center
                      group-hover:border-sky-500/50
                      transition-colors
                    ">
                      <link.icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-200 group-hover:text-sky-400 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-slate-500">
                        {link.label === "Email" ? "Send me an email" : `Follow on ${link.label}`}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-sky-500/5 to-sky-600/5 border border-sky-500/20">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                Let's Collaborate
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you within 24-48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
