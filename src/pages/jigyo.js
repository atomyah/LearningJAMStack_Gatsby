import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const JigyoPage = () => (
  <Layout>
    <SEO title="事業内容" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">事業内容</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
          <Col md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo1Img} />
              <Card.Body>
                <Card.Title>軌道上デブリ除去</Card.Title>
                <Card.Text>
                    軌道上または航行導線上のデブリを安全除去します。弊社が開発した「次元蒸発粉砕除去法」により、物質空間にデブリの残骸を残しません。
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo2Img} />
              <Card.Body>
                <Card.Title>テレポーテーションゲート開設</Card.Title>
                <Card.Text>
                    テレポーテーション用のトンネルゲート開設業務を承ります。管轄当局への手続き全般もすべて弊社にお任せください。
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo3Img} />
              <Card.Body>
                <Card.Title>業子力学による量子コントロール</Card.Title>
                <Card.Text>
                    弊社ラボでは業子力学による量子コントロール実験を科学庁からの委託され、実績をあげております。
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default JigyoPage;
