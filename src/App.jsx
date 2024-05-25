import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlowSection from "./components/WorkFlowSection"
import PricingSection from "./components/PricingSection"
import TestimonialSection from "./components/TestimonialSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkFlowSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </div>

    </>
  )
}

export default App