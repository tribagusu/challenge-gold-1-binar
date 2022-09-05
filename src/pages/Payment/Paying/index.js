import React from "react"

//# components
import HeaderHero from "../../../components/HeaderHero"
import Navigation from "../../../components/Navigation"
import Footer from "../../../components/Footer"
import { NavMenu } from "../../../components/Navigation/data"
import { socialMediaLogo } from "../../../const/staticData"

const props = {
  NavMenu,
  socialMediaLogo,
}

const PayingProcess = () => {
  return (
    <section>
      <Navigation {...props} />
      <HeaderHero />
      <Footer {...props} />
    </section>
  )
}

export default PayingProcess