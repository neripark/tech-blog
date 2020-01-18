import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"

const TestLinkButton = props => <_Link to={props.href}>{props.children}</_Link>

const _Link = styled(Link)`
  display: inline-block;
  border: 1px solid #777;
  background: #eee;
  padding: 10px;
  color: #333;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    opacity: 0.7;
  }
`

export default TestLinkButton
