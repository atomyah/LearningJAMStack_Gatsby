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
        © {new Date().getFullYear()},
        {` `}
        Atom Yah (このサイトは書籍「JAMStackを学ぼう Gatsby+ReactBootstrap+Netlifyでつくる企業サイト」用のサンプルです)
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
