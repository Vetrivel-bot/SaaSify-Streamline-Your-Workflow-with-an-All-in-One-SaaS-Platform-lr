"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Logos() {
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

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-8 md:py-12 border-y bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <p className="text-xs md:text-sm font-medium text-muted-foreground">
            Trusted by innovative companies worldwide
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16"
          >
            {[
              { name: "TechCorp", width: 120 },
              { name: "InnovateLab", width: 140 },
              { name: "DataFlow", width: 110 },
              { name: "CloudSync", width: 130 },
              { name: "DevTools", width: 125 },
            ].map((logo, i) => (
              <motion.div
                key={i}
                variants={logoVariants}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-6 md:h-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={`/placeholder.png?height=32&width=${logo.width}&text=${logo.name}`}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
