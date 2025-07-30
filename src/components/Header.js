"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <motion.div
                className="size-7 md:size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-sm md:text-base"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                S
              </motion.div>
              <span className="text-sm md:text-base">SaaSify</span>
            </motion.div>

            {/* Navigation - rest remains the same */}
            <nav className="hidden lg:flex gap-6 xl:gap-8">
              {["Features", "Testimonials", "Pricing", "FAQ"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Right section - rest remains the same */}
            <div className="hidden md:flex gap-2 lg:gap-4 items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </motion.div>
                  <span className="sr-only">Toggle theme</span>
                </button>
              </motion.div>
              <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hidden lg:block">
                Log in
              </button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm px-4 lg:px-6 h-8 md:h-9 flex items-center gap-1 transition-colors">
                  Get Started
                  <ChevronRight className="size-3 md:size-4" />
                </button>
              </motion.div>
            </div>

            {/* Mobile menu button - rest remains the same */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors">
                  {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileMenuOpen ? "close" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                    </motion.div>
                  </AnimatePresence>
                  <span className="sr-only">Toggle menu</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - remains the same */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-14 inset-x-0 bg-background/95 backdrop-blur-lg border-b shadow-lg"
          >
            <div className="w-full max-w-[1400px] mx-auto py-4 px-4 flex flex-col gap-1">
              {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="py-3 px-2 text-sm font-medium block hover:bg-muted/50 rounded-md transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-2 border-t mt-2">
                <button className="py-3 px-2 text-sm font-medium block hover:bg-muted/50 rounded-md transition-colors w-full text-left">
                  Log in
                </button>
              </motion.div>
              <motion.div variants={menuItemVariants} className="px-2">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-2 h-10 flex items-center justify-center gap-1 transition-colors">
                  Get Started
                  <ChevronRight className="size-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
