import Guide from '@/components/Guide/Guide'
import Herosection from '@/components/HeroSection/Herosection.jsx'
import Why_Choose from '@/components/Why_Choose/Why_Choose'
import About from '@/components/About/About'
import FAQ from '@/components/FAQ/FAQ'
import Footer from '@/components/Footer/Footer'
import InterestingReads from '@/components/InterestingReads/InterestingReads.jsx'

const Home = () => {
  return (
    <>
    <Herosection />
    <Guide />
    <Why_Choose />
    <About />
    <FAQ />
    <InterestingReads />
    <Footer />
    </>
  )
}

export default Home