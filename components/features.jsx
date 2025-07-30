"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart3, Users, Clock, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.",
      benefits: ["99.9% uptime", "Global CDN", "Auto-scaling"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
      benefits: ["256-bit encryption", "SOC 2 certified", "GDPR compliant"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with real-time analytics, custom dashboards, and predictive intelligence.",
      benefits: ["Real-time data", "Custom reports", "AI insights"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools with real-time editing, comments, and project management features.",
      benefits: ["Real-time editing", "Team chat", "Project tracking"],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert support with live chat, phone support, and comprehensive documentation.",
      benefits: ["Live chat", "Phone support", "Knowledge base"],
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Native mobile apps for iOS and Android with offline sync and push notifications.",
      benefits: ["Native apps", "Offline sync", "Push notifications"],
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
    <section id="features" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to streamline your workflow and boost productivity in one comprehensive platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                <CardHeader className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <feature.icon className="size-6 md:size-7 text-foreground" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle className="size-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Button variant="ghost" className="p-0 h-auto text-foreground hover:text-foreground/80">
                      Learn more
                      <ArrowRight className="ml-1 size-4" />
                    </Button>
                  </motion.div>
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
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto rounded-full">
              Explore All Features
              <ArrowRight className="ml-2 size-4 md:size-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
