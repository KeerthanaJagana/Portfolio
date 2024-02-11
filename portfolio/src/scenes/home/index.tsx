import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Name from "@/shared/Name";
import Lottie from "lottie-react";
import anim from "@/assets/Animation - 1707245519194.json";
import resume from "@/assets/Keerthana_Jagana_res_WebDev.pdf"
import lk from "@/assets/link.png";
import git from "@/assets/git.png"
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
     <div >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-15 before:z-[-1]">
                {/* <img alt="home-page-text" src={HomePageText} /> */}
                <Name>Keerthana Jagana</Name>

              </div>
            </div>

            <p className="mt-5 text-4xl text-secondary-500">
              Front-End Developer and UX Designer
            </p>

            {/* <p className="mt-8 text-2xl">
            I specialize in front-end development using modern technologies such as HTML, CSS, JavaScript, and frameworks like React.js. 
            My expertise also extends to UX/UI design, where I focus on creating intuitive interfaces and seamless user experiences.
            </p> */}
            <a href={resume} target="_blank"><button className="mt-5 rounded-lg bg-gray-50 px-7 py-1 hover:text-white text-white text-1xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-500 duration-300"
         >Resume</button></a>
         <div className="flex space-x-2"> 
         <a href="https://www.linkedin.com/in/keerthana-jagana-14304b1b3/" target="_blank"> <img className="mt-5 h-6 w-6" src={lk} alt="lk" /></a>
          <a href="https://github.com/KeerthanaJagana" target="_blank"> <img className="mt-5 h-6 w-6" src={git} alt="lk" /></a>

         </div>
         
          </motion.div>

          
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >    
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-4/5 justify-center md:z-10 md:ml-10 md:mt-16 md:justify-items-end h-25  ">
          {/* <img alt="me" className="rounded-full "src={me} /> */}
          {/* <div className="lottie-background-home"> */}
        <Lottie animationData={anim}/>
       
      {/* </div> */}
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Home;
