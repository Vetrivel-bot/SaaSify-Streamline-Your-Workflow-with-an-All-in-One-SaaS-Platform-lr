"use client"

import { motion } from "framer-motion"
import { UserPlus, Settings, Rocket, BarChart } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in seconds with our simple onboarding process.",
    },
    {
      icon: Settings,
      title: "Configure",
      description: "Customize your workspace and integrate with your existing tools.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Start collaborating with your team and boost productivity immediately.",
    },
    {
      icon: BarChart,
      title: "Analyze",
      description: "Track progress with detailed analytics and optimize your workflow.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started in minutes with our simple 4-step process
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="relative mb-6 md:mb-8">
                <div className="flex items-center justify-center size-16 md:size-20 lg:size-24 rounded-full bg-foreground text-background mx-auto mb-4">
                  <step.icon className="size-8 md:size-10 lg:size-12" />
                </div>
                <div className="absolute -top-2 -right-2 size-8 md:size-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-foreground">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
