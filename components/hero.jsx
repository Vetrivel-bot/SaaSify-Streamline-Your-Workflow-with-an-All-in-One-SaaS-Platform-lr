"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const features = ["No setup fees", "Cancel anytime", "24/7 support"]

  const stats = [
    { value: "10k+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "Rating" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm font-medium"
            >
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span>Trusted by 10,000+ teams</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-tight"
            >
              Streamline Your{" "}
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Workflow
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transform your business with our all-in-one SaaS platform. Boost productivity, streamline processes, and
              scale effortlessly.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto bg-foreground text-background hover:bg-foreground/90 rounded-full"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4 md:size-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto rounded-full bg-transparent"
                >
                  <Play className="mr-2 size-4 md:size-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-6 md:pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border"
              >
                <Image
                  src="/placeholder.svg?height=600&width=800&text=SaaS+Dashboard"
                  alt="SaaS Dashboard Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />

                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-card border rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Analytics</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">+24%</div>
                  <div className="text-xs text-muted-foreground">Growth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
