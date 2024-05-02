import React from "react"

import AppContainer from "../components/layout/AppContainer"
import HeroContainer from "../components/layout/HeroContainer"
import ContentContainer from "../components/layout/ContentContainer"

import Footer from "../components/footer"
import { Seo } from "../components/common"

const Index = () => {
  return (
    <AppContainer>
      <HeroContainer />
      <ContentContainer />
      <Footer />
    </AppContainer>
  )
}

export default Index

export const Head = () => (
  <Seo
    title={process.env.APP_TITLE}
    description={process.env.APP_DESCRIPTION}
  />
)
