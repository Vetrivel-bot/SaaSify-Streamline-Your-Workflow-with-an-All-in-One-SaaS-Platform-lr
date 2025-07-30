"use client"
import { motion } from "framer-motion"

const Logos = () => {
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

  const companies = [
    { name: "TechCorp", width: 120 },
    { name: "InnovateLab", width: 140 },
    { name: "DataFlow", width: 110 },
    { name: "CloudSync", width: 130 },
    { name: "DevTools", width: 125 },
  ]

  return (
    <section className="w-full py-8 md:py-12 border-y bg-muted/30 flex justify-center">
      <div className="section-content">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
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
              {companies.map((company, i) => (
                <motion.div
                  key={i}
                  variants={logoVariants}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center h-6 md:h-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <div
                    className="bg-muted-foreground/20 rounded px-3 py-1 text-xs md:text-sm font-medium text-muted-foreground flex items-center justify-center"
                    style={{ width: `${company.width}px`, minHeight: "24px" }}
                  >
                    {company.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Logos
