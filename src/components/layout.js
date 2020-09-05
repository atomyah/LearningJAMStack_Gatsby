import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container className="justify-content-md-center">{children}</Container>
      </main>
      <footer className="footer mt-auto py-3 bg-light text-black text-center">
        © 2020 - {new Date().getFullYear()},
        {` `}
        バリキャリ夫婦雨宮のブログ All rights reserved.
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
