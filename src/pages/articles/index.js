import React from "react"
import { Link } from "gatsby"

const array = [
  {
    "title": "test1",
    "content": "content 1",
  },
  {
    "title": "test2",
    "content": "content 2"
  }
]

export default () => ( 
  <div>
    {array.map((el, index) => {
      return (
        <div
          key={index}
          className="test-class"
        >
          <h2>{el.title}</h2>
          <p>{el.content}</p>
        </div>
      )
    })}
    <Link to="/">Top page.</Link>
  </div>
)
