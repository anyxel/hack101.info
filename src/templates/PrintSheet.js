import React from "react"

import AppContainer from "../components/layout/AppContainer"
import PrintContent from "../components/Print/PrintContent"
import { Seo } from "../components/common"

const PrintSheet = ({ pageContext: { data, filename, contributors } }) => (
  <AppContainer data={data} noFooter>
    <PrintContent filename={filename} data={data} contributors={contributors} />
  </AppContainer>
)

export default PrintSheet

export const Head = ({ location, params, data, pageContext }) => (
  <Seo
    title={pageContext.data.title + " Cheat Sheet"}
  />
)
