"use client"
import { motion } from "framer-motion"

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up in seconds with just your email. No credit card required to get started.",
    },
    {
      step: "02",
      title: "Configure Workspace",
      description: "Customize your workspace to match your team's unique workflow and requirements.",
    },
    {
      step: "03",
      title: "Boost Productivity",
      description: "Start using our powerful features to streamline processes and achieve your goals.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden flex justify-center">
      <div className="section-content">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                How It Works
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              Simple Process, Powerful Results
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Get started in minutes and see the difference our platform can make for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <motion.div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="contents"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={stepVariants}
                  className="relative z-10 flex flex-col items-center text-center space-y-3 md:space-y-4"
                >
                  <motion.div
                    className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-lg md:text-xl font-bold shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base px-4">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
