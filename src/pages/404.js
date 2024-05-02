import React from "react"

import ErrorContainer from "../components/layout/ErrorContainer"

import { Button } from "../components/common"

import errorBanner from "../assets/images/lost.svg"

const NotFound = () => (
  <ErrorContainer>
    <img src={errorBanner} alt="error" />
    <h2>Nothing found here!</h2>
    <p>
      You can add a new cheat sheet or let us know.
      And if you think this is a bug, don't forget to report it.
    </p>
    <div className="action-btn">
      <Button bgColor="#5e7986" to="/">
        Home
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#4caf50"
        href="https://github.com/anyxel/hack101.info/issues/new"
      >
        Add new cheat sheet
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#f44336"
        className="btn btn-bug"
        href="https://github.com/anyxel/hack101.info/issues/new"
      >
        Report a bug
      </Button>
    </div>
  </ErrorContainer>
)

export default NotFound
