"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.",
      author: "Sarah Johnson",
      role: "Project Manager, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      rating: 5,
    },
    {
      quote:
        "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Couldn't ask for better service.",
      author: "Emily Rodriguez",
      role: "Operations Lead, StartupX",
      rating: 5,
    },
    {
      quote:
        "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
      author: "David Kim",
      role: "CEO, InnovateNow",
      rating: 5,
    },
    {
      quote:
        "The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across different time zones.",
      author: "Lisa Patel",
      role: "HR Director, RemoteFirst",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 30% since switching to SaaSify.",
      author: "James Wilson",
      role: "COO, ScaleUp Inc",
      rating: 5,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="section-content">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                Testimonials
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              Loved by Teams Worldwide
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Don't just take our word for it. See what our customers have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="h-full overflow-hidden border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:border-primary/20 rounded-lg">
                    <div className="p-4 sm:p-6 flex flex-col h-full">
                      <motion.div
                        className="flex mb-3 md:mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <motion.div
                              key={j}
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.4 + j * 0.1 }}
                            >
                              <Star className="size-3 md:size-4 text-yellow-500 fill-yellow-500" />
                            </motion.div>
                          ))}
                      </motion.div>
                      <p className="text-sm sm:text-base lg:text-lg mb-4 md:mb-6 flex-grow leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <motion.div
                        className="flex items-center gap-3 md:gap-4 mt-auto pt-3 md:pt-4 border-t border-border/40"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <motion.div
                          className="size-8 md:size-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground font-medium text-sm md:text-base"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          {testimonial.author.charAt(0)}
                        </motion.div>
                        <div>
                          <p className="font-medium text-sm md:text-base">{testimonial.author}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </motion.div>
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

export default Testimonials
