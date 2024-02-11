import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Projects from "./scenes/projects";
import Contact from "./scenes/contact";
import Lottie from "lottie-react";
import anim from "@/assets/Animation - 1707245519194.json";

import vid from '@/assets/pexels-cottonbro-9665235 (1080p).mp4'
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Lottie animation as the background */}
      <div className="lottie-background ">
        {/* <Lottie animationData={anim}
          // height={'100%'}
          // width={'100%'}
        /> */}
        {/* <img src={bg} alt="bg" /> */}
       
      </div>

      {/* Content on top of the background */}
      <div className="content">
        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Projects setSelectedPage={setSelectedPage}/>
        {/* <OurClasses setSelectedPage={setSelectedPage}/> */}
        <Contact setSelectedPage={setSelectedPage}/>
        <Footer />
      </div>
    </div>
   
  );
}

export default App;
