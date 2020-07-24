import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="会社概要" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">会社概要</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>社名</td>
              <td>ヤー・スペーステクノロジー合同会社</td>
            </tr>
            <tr>
              <td>本社</td>
              <td>123 Nirvana St. San Francisco, CA, USA 94103</td>
            </tr>
            <tr>
              <td>設立</td>
              <td>2123年1月2日</td>
            </tr>
            <tr>
              <td>資本金</td>
              <td>$200,000</td>
            </tr>
            <tr>
              <td>代表者</td>
              <td>ヤー アトム</td>
            </tr>
            <tr>
              <td>従業員</td>
              <td>33名</td>
            </tr>
            <tr>
              <td>売上高</td>
              <td>$4,111,950（2131年12月決算）</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default AboutPage;
