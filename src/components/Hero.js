"use client"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const Hero = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section className="w-full py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-8 md:mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground mb-4 md:mb-6">
              Launching Soon
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Elevate Your Workflow with SaaSify
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            The all-in-one platform that helps teams collaborate, automate, and deliver exceptional results. Streamline
            your processes and focus on what matters most.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 md:h-12 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto flex items-center justify-center gap-2 transition-colors">
                Start Free Trial
                <ArrowRight className="size-4" />
              </button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full h-11 md:h-12 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto transition-colors">
                Book a Demo
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 md:mt-6 text-xs sm:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              <Check className="size-3 md:size-4 text-primary" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-3 md:size-4 text-primary" />
              <span>14-day trial</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-3 md:size-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="relative mx-auto max-w-6xl px-4"
        >
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="SaaSify dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <motion.div
            className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 -z-10 h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -top-4 md:-top-6 -left-4 md:-left-6 -z-10 h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
