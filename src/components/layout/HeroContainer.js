import React from "react"
import styled from "@emotion/styled"

import Header from "../header"
import HeroHome from "../Home/HeroHome"
import HeroItem from "../Item/HeroItem"

import { Container, ThinContainer } from "../common"

const Hero = styled.div`
  background: ${props => props.colorpref};
`

const HeroContainer = ({
  data,
  filename,
  islightcolor,
  colorpref = "var(--accentwhite)",
  contributors,
}) => {
  return (
    <Hero colorpref={colorpref}>
      <Container>
        <Header
          filename={filename}
          colorpref={colorpref}
          islightcolor={islightcolor}
        />
        <ThinContainer>
          {!data ? (
            <HeroHome />
          ) : (
            <HeroItem
              islightcolor={islightcolor}
              data={data}
              contributors={contributors}
            />
          )}
        </ThinContainer>
      </Container>
    </Hero>
  )
}

export default HeroContainer
