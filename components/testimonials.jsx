"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "SaaSify has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The analytics dashboard is incredible. We can now make data-driven decisions faster than ever before. The ROI has been outstanding.",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, ScaleUp",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Security and reliability are top-notch. We've had zero downtime since switching to SaaSify. Their support team is also exceptional.",
    },
    {
      name: "David Kim",
      role: "Founder, StartupXYZ",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The mobile app is fantastic. I can manage everything on the go. The real-time collaboration features have been a game-changer for our remote team.",
    },
    {
      name: "Lisa Thompson",
      role: "Operations Director, GrowthCo",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Implementation was seamless, and the onboarding process was smooth. The platform scales perfectly with our growing business needs.",
    },
    {
      name: "Alex Martinez",
      role: "VP Engineering, TechFlow",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The API integration capabilities are excellent. We were able to connect all our existing tools without any issues. Highly recommended!",
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
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust SaaSify
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4 md:size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 size-6 md:size-8 text-muted-foreground/20" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-border">
                    <Avatar className="size-10 md:size-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-muted text-foreground">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
