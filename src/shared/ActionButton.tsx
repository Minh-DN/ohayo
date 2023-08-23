import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Pages } from "./types";


type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: Pages) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
      className="rounded-md bg-primary-500 text-white px-10 py-2 hover:bg-primary-500 hover:shadow-xl"
      onClick={() => setSelectedPage(Pages.ContactUs)}
      href={`#${Pages.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton