import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="プロフィール"/>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">プロフィール</h1>
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
              <td>名前</td>
              <td>雨宮夫婦（雨宮婦夫）</td>
            </tr>
            <tr>
              <td>住まい</td>
              <td>地球上のどこか</td>
            </tr>
            <tr>
              <td>生年月日</td>
              <td>アラサー</td>
            </tr>
            <tr>
              <td>所属</td>
              <td>夫：時価総額10兆円越え日系企業／妻：GAFA</td>
            </tr>
            <tr>
              <td>得意分野</td>
              <td>資産運用/語学(妻)/仕事/転職/婚活/筋トレ(夫)</td>
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
