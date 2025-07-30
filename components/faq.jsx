"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is SaaSify and how does it work?",
      answer:
        "SaaSify is an all-in-one SaaS platform designed to streamline your workflow and boost productivity. It combines project management, team collaboration, analytics, and automation tools in one unified platform. Simply sign up, configure your workspace, and start collaborating with your team immediately.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial for all our plans. No credit card is required to start your trial. You'll have access to all features during the trial period, and you can upgrade to a paid plan at any time.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. If you cancel, you'll continue to have access to your account until the end of your current billing period.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We support over 100+ integrations including popular tools like Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, Zapier, and many more. Our API also allows for custom integrations if you need to connect with proprietary systems.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use bank-grade encryption, are SOC 2 compliant, and implement advanced threat protection. Your data is stored in secure, redundant data centers with regular backups. We also offer SSO integration for enterprise customers.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. Our support team is highly trained and committed to helping you succeed with SaaSify.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. We'll prorate any charges accordingly.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes! We offer custom enterprise solutions including dedicated infrastructure, custom integrations, advanced security features, and personalized onboarding. Contact our sales team to discuss your specific requirements.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about SaaSify
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
