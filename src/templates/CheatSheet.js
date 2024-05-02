import React from "react"

import AppContainer from "../components/layout/AppContainer"
import HeroContainer from "../components/layout/HeroContainer"
import ContentContainer from "../components/layout/ContentContainer"

import Footer from "../components/footer"
import { isItDark } from "../utils"
import { Seo } from "../components/common"

const CheatSheet = ({ pageContext: { data, filename, contributors } }) => {
  const { colorPref } = data
  const islightcolor = isItDark(colorPref)
  return (
    <AppContainer>
      <HeroContainer
        islightcolor={islightcolor.toString()}
        colorpref={colorPref}
        filename={filename}
        data={data}
        contributors={contributors}
      />
      <ContentContainer data={data} colorPref={colorPref} />
      <Footer />
    </AppContainer>
  )
}

export default CheatSheet

export const Head = ({ location, params, data, pageContext }) => (
  <Seo
    title={pageContext.data.title + " Cheat Sheet"}
  />
)
