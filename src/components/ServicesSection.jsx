import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function ServicesSection({ isTheme, onSelectService }) {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const faqItems = [
    {
      id: "01",
      question: "Need a brand-new website or modern web app built from scratch?",
      answer:
        "I'm your guy. Whether you're launching a new venture, an agency site, or a software product, I turn your ideas into a lightning-fast, high-converting digital experience. Every page is custom-built, responsive across all screen sizes, and optimized for instant load times.",
      prefillSubject: "Brand-New Website / Web App Project",
      prefillMessage:
        "Hi Adeyemi, I'm looking to build a brand-new website/web app from scratch. Here are a few details about what I have in mind: ",
    },
    {
      id: "02",
      question: "Want to redesign an existing website to be modern, sleek, and mobile-friendly?",
      answer:
        "I'm your guy. If your current website feels dated, clunky on mobile devices, or no longer reflects the quality of your brand, I rebuild it with clean typography, smooth modern interactions, and intuitive navigation that immediately earns visitor trust.",
      prefillSubject: "Website Redesign & Modernization",
      prefillMessage:
        "Hi Adeyemi, I have an existing website that I would like to modernize and make mobile-friendly. My current site link is: ",
    },
    {
      id: "03",
      question: "Looking to sell products online or set up an order-taking system?",
      answer:
        "I'm your guy. Depending on your business model and budget, we can build a complete e-commerce experience with direct online payments (via Paystack/cards), or implement a lean, budget-friendly setup where customer orders and inquiries route straight to your WhatsApp or inbox for instant follow-up.",
      prefillSubject: "E-Commerce / Order System Inquiry",
      prefillMessage:
        "Hi Adeyemi, I'd like to set up an online store or order-taking system (e-commerce or direct orders to WhatsApp/inbox). Here is what I sell or plan to sell: ",
    },
    {
      id: "04",
      question: "Want to improve your website speed, fix annoying bugs, or boost your SEO?",
      answer:
        "I'm your guy. Slow load times hurt sales and push you down Google search results. I audit your website, eliminate sluggish bottlenecks, fix broken layout issues, and implement proper search engine optimization (SEO) best practices so your target audience can actually find and enjoy using your site.",
      prefillSubject: "Website Speed, Bug Fixes & SEO",
      prefillMessage:
        "Hi Adeyemi, I need help speeding up my website, fixing bugs, or boosting our search ranking. Here are the issues we're facing: ",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleCtaClick = (e, item) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService({
        subject: item.prefillSubject,
        message: item.prefillMessage,
      });
    } else {
      const formElem = document.getElementById("portfolio-contact-form") || document.getElementById("contact");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 border-b border-inherit">
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
            <span className="text-neutral-500 font-bold">[03]</span>
            <span className={isTheme ? "text-neutral-800" : "text-neutral-300"}>
              COMMON INQUIRIES & CAPABILITIES
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-tight ${
              isTheme ? "text-neutral-950" : "text-neutral-100"
            }`}
          >
            How I Can Help You
          </h2>
        </div>

        <div className={`font-mono-tech text-xs max-w-sm ${isTheme ? "text-neutral-700" : "text-neutral-400"}`}>
          {"// REAL-WORLD SOLUTIONS FOR FOUNDERS, BUSINESSES, AND CREATIVE TEAMS"}
        </div>
      </motion.div>

      {/* Clean Borderless Accordion List with Subtle Dividing Rules */}
      <div className="divide-y divide-inherit">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`transition-colors duration-200 ${
                isOpen
                  ? isTheme
                    ? "bg-neutral-100/40"
                    : "bg-[#0c0f14]/50"
                  : isTheme
                  ? "hover:bg-neutral-50/60"
                  : "hover:bg-[#0c0f14]/25"
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="w-full py-5 sm:py-6 px-1 sm:px-2 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer group"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-5 min-w-0">
                  <span className="font-mono-tech text-xs sm:text-sm font-bold text-neutral-500 shrink-0">
                    [{item.id}]
                  </span>

                  {/* Reduced font weight on mobile: font-normal sm:font-semibold */}
                  <h3
                    className={`text-base sm:text-lg font-normal sm:font-semibold tracking-tight transition-colors ${
                      isOpen
                        ? "text-emerald-500 font-medium sm:font-bold"
                        : isTheme
                        ? "text-neutral-950 group-hover:text-black"
                        : "text-neutral-100 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                {/* Right Action Indicator: Minimalist + / - with smooth rotation */}
                <div className="shrink-0">
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-7 h-7 border flex items-center justify-center transition-colors ${
                      isOpen
                        ? "border-emerald-500 text-emerald-500 bg-emerald-500/10"
                        : isTheme
                        ? "border-neutral-300 text-neutral-700 bg-white group-hover:border-neutral-400"
                        : "border-neutral-800 text-neutral-300 bg-[#0d1015] group-hover:border-neutral-700"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </motion.div>
                </div>
              </button>

              {/* AnimatePresence for silky accordion expand/collapse */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 sm:px-2 pb-6 sm:pb-8 pt-1 sm:pt-2 space-y-5">
                      {/* Natural Conversational Response */}
                      <p
                        className={`text-sm sm:text-base leading-relaxed max-w-4xl ${
                          isTheme ? "text-neutral-800" : "text-neutral-200"
                        }`}
                      >
                        {item.answer}
                      </p>

                      {/* Dedicated Call To Action: Prefills Contact Form & Smooth Transitions Arrow */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => handleCtaClick(e, item)}
                          className={`group inline-flex items-center gap-2 py-3 px-6 border font-mono-tech text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black active:scale-[0.98] ${
                            isTheme
                              ? "bg-neutral-950 border-neutral-950 text-white"
                              : "bg-neutral-100 border-neutral-100 text-neutral-950"
                          }`}
                        >
                          <span>Let&apos;s Talk About This</span>
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:rotate-45"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
