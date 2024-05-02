import React from "react"
import styled from "@emotion/styled"
import { FiPlus, FiEdit, FiStar } from "react-icons/fi"

import { Logo } from "./common"

const MenuList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    li {
        margin-left: 15px;
        font-weight: bolder;

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: ${props =>
                    props.islightcolor === "true"
                            ? "var(--accentlight)"
                            : "var(--accentdark)"};

            svg {
                margin-right: 5px;
            }

            @media (max-width: 480px) {
                span {
                    display: none;
                }
            }
        }
    }
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
`

const Header = ({ children, colorpref, filename, islightcolor }) => (
  <HeaderContainer>
    <div>
      <Logo colorpref={colorpref} islightcolor={islightcolor} />
    </div>
    <MenuList islightcolor={islightcolor}>
      <li>
        {filename ? (
          <a
            target="__blank"
            rel="noopener noreferrer"
            href={`https://github.com/anyxel/hack101.info/blob/main/data/${filename}.json`}
          >
            <FiEdit /> <span>Edit</span>
          </a>
        ) : (
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/anyxel/hack101.info#contribute"
          >
            <FiPlus /> <span>Contribute</span>
          </a>
        )}
      </li>
      <li>
        <a
          target="__blank"
          rel="noopener noreferrer"
          href="https://github.com/anyxel/hack101.info"
        >
          <FiStar /> <span>Give Star</span>
        </a>
      </li>
    </MenuList>
  </HeaderContainer>
)

export default Header
