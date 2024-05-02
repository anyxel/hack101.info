import React from "react"
import styled from "@emotion/styled"

import SearchResult from "./SearchResult"

import { ThinContainer, Description } from "../common"

const HeroHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    padding-bottom: 240px;
`

const HeroHome = () => {
  const title = "Hacking Cheat Sheets"
  const description = "A vault of ethical hacking, and cybersecurity cheat sheets."

  return (
    <ThinContainer>
      <HeroHomeContainer>
        <Description
          title={title}
          description={description}
        />
        <SearchResult />
      </HeroHomeContainer>
    </ThinContainer>
  )
}

export default HeroHome
