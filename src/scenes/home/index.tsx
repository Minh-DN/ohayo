import { motion } from "framer-motion";

import BannerAboardInJapan from "@/assets/BannerAbroadInJapan.png";
import BannerJapanTimes from "@/assets/BannerJapanTimes.png";
import BannerJNTO from "@/assets/BannerJNTO.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageHeader from "@/assets/HomePageHeader.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { Pages } from "@/shared/types";

type Props = {
  setSelectedPage: (page: Pages) => void 
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={`${Pages.Home}`}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* Main Header and Image */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(Pages.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-36 before:-left-24 before:z-[-1] md:before:content-shadowText">
                <img src={HomePageHeader} alt="home-page-header" className="w-5/6"/>
              </div>
            </div>

            <p className="mt-8 text-sm ml-1 lg:text-base">
              Step into the land of the rising sun through our Japanese classes.
              From mastering kanji to conversational fluency,
              our language lessons will equip you with the skills to confidently embrace the Japanese way of life.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 ml-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Learn More
            </ActionButton>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end xs:mt-12 pb-20">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* Banner */}
      {isAboveMediumScreens && (
        <div className="h-1/6 w-full bg-primary-100 flex items-center justify-center gap-20">  
          <img alt="banner-jnto" src={BannerJNTO} className="h-20"/> 
          <img alt="banner-japan-times" src={BannerJapanTimes} className="h-20"/>
          <img alt="banner-abroad-in-japan" src={BannerAboardInJapan} className="h-20"/>    
        </div>
      )}
    </section>
  )
}

export default Home