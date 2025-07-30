"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Basic integrations",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "All integrations",
        "Custom workflows",
        "API access",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "1TB storage",
        "Enterprise analytics",
        "24/7 phone support",
        "Mobile app access",
        "All integrations",
        "Custom workflows",
        "Full API access",
        "SSO integration",
        "Custom branding",
      ],
      popular: false,
      cta: "Contact Sales",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your team. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full relative border-border bg-card hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-foreground scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-foreground text-background px-3 py-1">
                      <Star className="size-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm md:text-base text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0">
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="size-4 md:size-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-sm md:text-base py-2 md:py-3 ${
                      plan.popular
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
