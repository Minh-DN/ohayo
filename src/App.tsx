import { useEffect, useState } from "react"

import Benefits from "@/scenes/benefits"
import Home from "@/scenes/home"
import Navbar from "@/scenes/navbar"

import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer"
import { Pages } from "./shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(Pages.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage} 
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App
