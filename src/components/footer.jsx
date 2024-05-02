import React from "react"
import styled from "@emotion/styled"

import { Container, Curve, Section } from "./common"

const FooterContainer = styled.footer`
    background: var(--accentlight);
    text-align: center;
    @media print {
        visibility: hidden;
    }
`

const FooterArea = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    text-align: left;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }

    > div {
        flex: 1;
        @media (max-width: 480px) {
            flex: 1 1 100%;
            margin: 0;
            margin-bottom: 15px;
            text-align: center;
            ul {
                list-style: none;
                margin-left: 0 !important;
            }
        }
        margin: 0 15px;

        :nth-of-type(2n + 2) {
            @media (max-width: 991px) {
                margin-left: 0;
            }
        }

        :first-of-type {
            margin-left: 0;
            @media (max-width: 991px) {
                flex: 1 1 100%;
                margin-bottom: 15px;
            }
        }

        :last-of-type {
            margin-right: 0;
        }

        ul {
            margin-left: 20px;

            li {
                a {
                    position: relative;
                    color: #fff;
                    text-decoration: none;

                    :after {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 2px;
                        bottom: 3px;
                        left: 0;
                        background: #fff;
                    }
                }
            }
        }
    }
`

const Footer = () => (
  <FooterContainer>
    <Curve color="var(--accentdark)">
      <Container>
        <Section>
          <FooterArea>
            <div>
              <h3>About</h3>
              <p>
                The goal of Hack101 is to build a big cheatsheet platform for ethical hackers, and cybersecurity researchers. It is an open-source project and anyone can contribute to it.
              </p>
            </div>
            <div>
              <h3>Community</h3>
              <ul>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/anyxel/hack101.info"
                  >
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/anyxel/hack101.info/issues"
                  >
                    GitHub Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Links</h3>
              <ul>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://anyxel.com"
                  >
                    Anyxel Playground
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://spider.anyxel.com/"
                  >
                    Anyxel Spider
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Sponsor</h3>
              <ul>
                <li>
                  Domain -{" "}
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://bio.link/obydul"
                  >
                    Md Obydullah
                  </a>
                </li>
              </ul>
            </div>
          </FooterArea>
        </Section>
      </Container>
    </Curve>
  </FooterContainer>
)

export default Footer
