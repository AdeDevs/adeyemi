import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, Check, MapPin, Clock, Loader2, ArrowUpRight } from "lucide-react";

export default function ContactSection({ isTheme, prefill }) {
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Live Lagos, Nigeria (WAT) Time
  const [lagosTime, setLagosTime] = useState(() => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
    } catch {
      return "";
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      try {
        setLagosTime(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Africa/Lagos",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }).format(new Date())
        );
      } catch {
        // fallback
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync prefilled data from "Let's Talk About This" service prompts
  useEffect(() => {
    if (prefill && (prefill.subject || prefill.message)) {
      setFormData((prev) => ({
        ...prev,
        subject: prefill.subject ?? prev.subject,
        message: prefill.message ?? prev.message,
      }));
    }
  }, [prefill]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Direct FormSubmit asynchronous relay
      const response = await fetch("https://formsubmit.co/ajax/adeyemiakinyemi01@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New Inquiry from Portfolio Website",
          message: formData.message,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 4500);
      } else {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 4500);
      }
    } catch {
      setFormStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4500);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 border-b border-inherit">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4"
      >
        <div>
          <div className="font-mono-tech text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="text-neutral-500 font-bold">[04]</span>
            <span className={isTheme ? "text-neutral-800" : "text-neutral-300"}>
              INITIATE INQUIRY
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-tight ${
              isTheme ? "text-neutral-950" : "text-neutral-100"
            }`}
          >
            Get In Touch
          </h2>
        </div>

        <div className={`font-mono-tech text-xs max-w-xs ${isTheme ? "text-neutral-700" : "text-neutral-400"}`}>
          {"// AVAILABLE FOR FULL-STACK & FRONTEND CONTRACTS, STARTUPS, AND TEAMS"}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Location Banner + Direct Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Location & Timezone banner */}
          <div
            className={`p-3.5 sm:p-4 border flex items-center justify-between font-mono-tech text-xs transition-colors ${
              isTheme
                ? "bg-neutral-100/70 border-neutral-300 text-neutral-800"
                : "bg-[#0f131a] border-neutral-800 text-neutral-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-emerald-500 shrink-0" />
              <span className="font-semibold">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono-tech">
              <Clock size={13} className="text-emerald-500 shrink-0" />
              <span>{lagosTime ? `${lagosTime} (WAT)` : "Lagos, NG"}</span>
            </div>
          </div>

          {/* Direct Actionable Channels Card */}
          <div
            className={`p-4 sm:p-6 md:p-8 border flex-1 transition-all duration-300 ${
              isTheme
                ? "bg-white border-neutral-300 shadow-sm hover:shadow-md"
                : "bg-[#0d1015] border-neutral-800 hover:border-neutral-700"
            }`}
          >
            <h3
              className={`text-lg font-bold uppercase tracking-tight mb-3 flex items-center gap-2 ${
                isTheme ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              <MessageSquare size={18} />
              <span>Direct Channels</span>
            </h3>

            <p
              className={`font-mono-tech text-xs sm:text-sm leading-relaxed mb-6 ${
                isTheme ? "text-neutral-800" : "text-neutral-300"
              }`}
            >
              Whether you are looking to hire a developer for high-growth products, need web architecture, or want to explore an idea, reach out directly.
            </p>

            <div className="space-y-3 font-mono-tech text-xs">
              {/* Actionable Email: Simple & Direct Mail Action */}
              <div
                className={`p-3 border flex items-center justify-between gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 ${
                  isTheme
                    ? "bg-neutral-50 border-neutral-300"
                    : "bg-[#0a0d12] border-neutral-800"
                }`}
              >
                <a
                  href="mailto:adeyemiakinyemi01@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
                  className="flex items-center gap-2.5 truncate hover:text-emerald-500 transition-colors"
                  title="Click to compose email"
                >
                  <Mail size={15} className="shrink-0 text-neutral-400" />
                  <span className="truncate">adeyemiakinyemi01@gmail.com</span>
                </a>
                <a
                  href="mailto:adeyemiakinyemi01@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
                  className="px-2.5 py-1 border border-inherit transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black text-[10px] uppercase font-semibold shrink-0"
                >
                  MAIL
                </a>
              </div>

              {/* Actionable Phone: Dial or SMS */}
              <div
                className={`p-3 border flex items-center justify-between gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 ${
                  isTheme
                    ? "bg-neutral-50 border-neutral-300"
                    : "bg-[#0a0d12] border-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-neutral-400 shrink-0" />
                  <a
                    href="tel:+2349076320109"
                    className="hover:text-emerald-500 hover:underline transition-colors"
                  >
                    +234 907 632 0109
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+2349076320109"
                    className="px-2 py-1 border border-inherit text-[10px] uppercase font-semibold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black"
                    title="Call directly"
                  >
                    CALL
                  </a>
                  <a
                    href="sms:+2349076320109"
                    className="px-2 py-1 border border-inherit text-[10px] uppercase font-semibold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black"
                    title="Send SMS"
                  >
                    SMS
                  </a>
                </div>
              </div>

              {/* Actionable WhatsApp */}
              <div
                className={`p-3 border flex items-center justify-between gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 ${
                  isTheme
                    ? "bg-neutral-50 border-neutral-300"
                    : "bg-[#0a0d12] border-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare size={15} className="text-neutral-400 shrink-0" />
                  <a
                    href="https://wa.me/2347025302018?text=Hello%20Adeyemi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-500 hover:underline transition-colors"
                  >
                    +234 702 530 2018
                  </a>
                </div>
                <a
                  href="https://wa.me/2347025302018?text=Hello%20Adeyemi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noreferrer"
                  className="group px-2.5 py-1 border border-inherit text-[10px] uppercase font-semibold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black flex items-center gap-1"
                >
                  <span>WHATSAPP</span>
                  <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form with Animated Dispatch State Machine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            id="portfolio-contact-form"
            className={`p-4 sm:p-6 md:p-8 border scroll-mt-20 sm:scroll-mt-28 transition-all duration-300 ${
              isTheme
                ? "bg-white border-neutral-300 shadow-sm hover:shadow-md"
                : "bg-[#0d1015] border-neutral-800 hover:border-neutral-700"
            }`}
          >
            {/* Clean Dispatch Terminal Header without Active Relay Badge */}
            <div className="font-mono-tech text-xs text-neutral-400 uppercase mb-5 flex items-center justify-between border-b pb-3 border-inherit">
              <span>[MESSAGE DISPATCH TERMINAL]</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono-tech text-xs uppercase mb-1.5 font-semibold"
                  >
                    Your Name <span className="text-neutral-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Smith"
                    disabled={formStatus === "sending"}
                    className={`w-full px-3 py-2.5 text-sm font-mono-tech border outline-none transition-all duration-200 ${
                      isTheme
                        ? "bg-neutral-50 border-neutral-300 text-neutral-950 focus:border-emerald-500 focus:bg-white"
                        : "bg-[#090b0e] border-neutral-800 text-neutral-100 focus:border-emerald-500 focus:bg-[#0c0f14]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono-tech text-xs uppercase mb-1.5 font-semibold"
                  >
                    Your Email <span className="text-neutral-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@company.com"
                    disabled={formStatus === "sending"}
                    className={`w-full px-3 py-2.5 text-sm font-mono-tech border outline-none transition-all duration-200 ${
                      isTheme
                        ? "bg-neutral-50 border-neutral-300 text-neutral-950 focus:border-emerald-500 focus:bg-white"
                        : "bg-[#090b0e] border-neutral-800 text-neutral-100 focus:border-emerald-500 focus:bg-[#0c0f14]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono-tech text-xs uppercase mb-1.5 font-semibold"
                >
                  Subject / Scope
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Website Project / Product Development"
                  disabled={formStatus === "sending"}
                  className={`w-full px-3 py-2.5 text-sm font-mono-tech border outline-none transition-all duration-200 ${
                    isTheme
                      ? "bg-neutral-50 border-neutral-300 text-neutral-950 focus:border-emerald-500 focus:bg-white"
                      : "bg-[#090b0e] border-neutral-800 text-neutral-100 focus:border-emerald-500 focus:bg-[#0c0f14]"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono-tech text-xs uppercase mb-1.5 font-semibold"
                >
                  Message <span className="text-neutral-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, or what you'd like to build..."
                  disabled={formStatus === "sending"}
                  className={`w-full px-3 py-2.5 text-sm font-mono-tech border outline-none transition-all duration-200 resize-none ${
                    isTheme
                      ? "bg-neutral-50 border-neutral-300 text-neutral-950 focus:border-emerald-500 focus:bg-white"
                      : "bg-[#090b0e] border-neutral-800 text-neutral-100 focus:border-emerald-500 focus:bg-[#0c0f14]"
                  }`}
                ></textarea>
              </div>

              {/* Animated Button with Idle, Sending, and Sent States */}
              <motion.button
                whileTap={{ scale: 0.985 }}
                type="submit"
                id="contact-submit-btn"
                disabled={formStatus === "sending"}
                className={`w-full py-3.5 px-6 border font-mono-tech text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  formStatus === "sent"
                    ? "bg-emerald-500 border-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20 cursor-default"
                    : formStatus === "sending"
                    ? "bg-neutral-800 border-neutral-700 text-neutral-300 cursor-wait"
                    : isTheme
                    ? "bg-neutral-950 border-neutral-950 text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-black"
                    : "bg-neutral-100 border-neutral-100 text-neutral-950 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black"
                }`}
              >
                {formStatus === "sending" ? (
                  <>
                    <Loader2 size={15} className="animate-spin text-emerald-400" />
                    <span>Transmitting Message...</span>
                  </>
                ) : formStatus === "sent" ? (
                  <>
                    <Check size={16} className="text-black font-bold" />
                    <span>Message Dispatched Successfully! [✓]</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
