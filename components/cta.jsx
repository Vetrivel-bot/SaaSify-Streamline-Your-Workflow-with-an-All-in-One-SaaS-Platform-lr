"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const benefits = ["14-day free trial", "No setup fees", "Cancel anytime"]

  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gradient-to-br from-foreground to-foreground/90">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 md:space-y-8 lg:space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-background">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-background/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams already using SaaSify to streamline their workflow and boost productivity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm md:text-base text-background/90"
              >
                <CheckCircle className="size-4 md:size-5 text-green-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 md:pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto bg-background text-foreground hover:bg-background/90"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-4 md:size-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto border-background/20 text-background hover:bg-background/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-background/70 pt-4"
          >
            No credit card required • Setup in minutes • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
