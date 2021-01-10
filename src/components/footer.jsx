import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"

function Footer(){
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

    const defaultSiteTitle = site.siteMetadata?.title;
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <nav className="footer__wrapper__links">
                    <Link to="/page1">Page1</Link>
                    <Link to="/page2">Page2</Link>
                    <Link to="/page3">Page3</Link>
                </nav>
                <div className="footer__wrapper-title">
                    © Copyright 2021 {defaultSiteTitle} - All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer;