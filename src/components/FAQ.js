"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a limit to how many users I can add?",
      answer:
        "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer:
        "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="section-content">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: 90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                FAQ
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Find answers to common questions about our platform.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-2"
            >
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <motion.div whileHover={{ scale: 1.01, x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="border border-border/40 rounded-lg bg-gradient-to-r from-background to-muted/5 hover:from-muted/10 hover:to-muted/20 transition-all duration-300">
                      <button
                        onClick={() => setOpenItem(openItem === i ? null : i)}
                        className="w-full px-4 md:px-6 py-4 text-left font-medium hover:no-underline text-sm md:text-base flex items-center justify-between"
                      >
                        {faq.question}
                        <motion.div animate={{ rotate: openItem === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="size-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openItem === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
