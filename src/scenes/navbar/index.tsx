import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

import OhayoLogo from "@/assets/OhayoLogo.png"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { Pages } from "@/shared/types"

import Link from "./Link"


type Props = {
  selectedPage: Pages;
  setSelectedPage: (value: Pages) => void;
  isTopOfPage: boolean;
}

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow-lg'

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 `}>
            {/* Left Side */}
            <img src={OhayoLogo} alt='logo' className="w-32"/>

            {/* Right Side */}
            {isAboveMediumScreens ? (

              // On Desktop Screen
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {Object.values(Pages).map((page, index) => {
                    return <Link
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      key={index}
                    />
                  })}
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p className="cursor-pointer">Member Login</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>) : (
              
              // On Mobile Screen
              <button 
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col gap-10 text-2xl pl-[25%]">
              {Object.values(Pages).map((page, index) => {
                return <Link
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  key={index}
                />
              })}
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar