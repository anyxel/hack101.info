import React from "react"
import styled from "@emotion/styled"

const CurveContainer = styled.div`
  background: ${props => props.color};
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const Curve = ({ children, color= "#fff" }) => {
  return <CurveContainer color={color}>{children}</CurveContainer>
}

export { Curve }
