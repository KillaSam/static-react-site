import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const defaultSiteTitle = site.siteMetadata?.title

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-title">
          <Link to="/">{defaultSiteTitle}</Link>
        </div>
        <nav className="header__wrapper__links">
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/page3">Page3</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
