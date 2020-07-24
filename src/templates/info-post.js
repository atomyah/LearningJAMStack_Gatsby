import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const InformationPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
        <SEO title={post.frontmatter.title} />
            <Row>
                <Col className="space"></Col>
            </Row>
            <Row>
                <Col className="title-obi">
                    <h1 className="h1-font">{post.frontmatter.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="space"></Col>
            </Row>
            <Row>
                <Col>
                <p>{post.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Col>
            </Row>
            <Row>
            <Col className="space"></Col>
            </Row>
        </Layout>
    )
}

export default InformationPost;

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug }}) {
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
      }
    }
  }
`