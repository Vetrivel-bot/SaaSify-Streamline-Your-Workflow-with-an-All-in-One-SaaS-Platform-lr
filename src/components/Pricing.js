"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly")

  const monthlyPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams and startups.",
      features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses.",
      features: ["Up to 20 team members", "Advanced analytics", "25GB storage", "Priority email support", "API access"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "Unlimited storage",
        "24/7 phone & email support",
        "Advanced API access",
        "Custom integrations",
      ],
      cta: "Contact Sales",
    },
  ]

  const annualPlans = [
    {
      name: "Starter",
      price: "$23",
      description: "Perfect for small teams and startups.",
      features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$63",
      description: "Ideal for growing businesses.",
      features: ["Up to 20 team members", "Advanced analytics", "25GB storage", "Priority email support", "API access"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$159",
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "Unlimited storage",
        "24/7 phone & email support",
        "Advanced API access",
        "Custom integrations",
      ],
      cta: "Contact Sales",
    },
  ]

  const plans = activeTab === "monthly" ? monthlyPlans : annualPlans

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden flex justify-center"
    >
      <div className="section-content">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                Pricing
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="mx-auto max-w-6xl">
            <motion.div
              className="flex justify-center mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center rounded-full p-1 bg-muted/50 backdrop-blur">
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`rounded-full px-4 md:px-6 py-2 text-sm md:text-base transition-all ${
                    activeTab === "monthly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab("annually")}
                  className={`rounded-full px-4 md:px-6 py-2 text-sm md:text-base transition-all ${
                    activeTab === "annually"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annually (Save 20%)
                </button>
              </div>
            </motion.div>

            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {plans.map((plan, i) => (
                <motion.div key={i} variants={cardVariants}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      rotateY: plan.popular ? 0 : 2,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div
                      className={`relative overflow-hidden h-full transition-all duration-300 rounded-lg ${
                        plan.popular
                          ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-primary/5 to-background"
                          : "border border-border/40 shadow-md hover:shadow-lg bg-gradient-to-b from-background to-muted/10"
                      } backdrop-blur`}
                    >
                      {plan.popular && (
                        <motion.div
                          className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          Most Popular
                        </motion.div>
                      )}
                      <div className="p-4 sm:p-6 flex flex-col h-full">
                        <motion.h3
                          className="text-xl md:text-2xl font-bold"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {plan.name}
                        </motion.h3>
                        <motion.div
                          className="flex items-baseline mt-3 md:mt-4"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1 text-sm md:text-base">/month</span>
                        </motion.div>
                        <motion.p
                          className="text-muted-foreground mt-2 text-sm md:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {plan.description}
                        </motion.p>
                        <motion.ul
                          className="space-y-2 md:space-y-3 my-4 md:my-6 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {plan.features.map((feature, j) => (
                            <motion.li
                              key={j}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + j * 0.1 }}
                            >
                              <Check className="mr-1 size-3 md:size-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            className={`w-full mt-auto rounded-full text-sm md:text-base h-10 md:h-11 transition-colors ${
                              plan.popular
                                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                            }`}
                          >
                            {plan.cta}
                          </button>
                        </motion.div>
                      </div>
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

export default Pricing
