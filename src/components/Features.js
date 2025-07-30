"use client"
import { motion } from "framer-motion"
import { Zap, BarChart, Users, Shield, Layers, Star } from "lucide-react"

const Features = () => {
  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="size-4 md:size-5" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="size-4 md:size-5" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with integrated communication tools.",
      icon: <Users className="size-4 md:size-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="size-4 md:size-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="size-4 md:size-5" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="size-4 md:size-5" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="section-content">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                Features
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Our comprehensive platform provides all the tools you need to streamline your workflow, boost
              productivity, and achieve your goals.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className="h-full overflow-hidden border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:border-primary/20 rounded-lg">
                    <div className="p-4 sm:p-6 flex flex-col h-full">
                      <motion.div
                        className="size-8 md:size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-3 md:mb-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
