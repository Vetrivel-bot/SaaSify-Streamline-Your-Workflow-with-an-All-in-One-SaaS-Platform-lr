import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Logos from "./components/Logos"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="main-wrapper bg-background">
          <Header />
          <main className="flex-1 w-full bg-background">
            <Hero />
            <Logos />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
