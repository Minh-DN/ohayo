import AnchorLink from "react-anchor-link-smooth-scroll"

import * as helper from "@/shared/helper"
import { Pages } from "@/shared/types"

type Props = {
  page: Pages;
  selectedPage: Pages;
  setSelectedPage: (value: Pages) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage
}: Props) => {
  
  return (
    <AnchorLink
      className={`${selectedPage === page ? 'text-primary-500' : ''}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {helper.formatPageName(page)}
    </AnchorLink>
  )
}

export default Link