import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="お問い合わせ" />
            <Row>
            <Col className="space"></Col>
            </Row>
            <Row>
            <Col className="title-obi">
                <h1 className="h1-font">お問い合わせ</h1>
            </Col>
            </Row>
            <Row>
            <Col className="space"></Col>
            </Row>
            <Container className="" style={{width:`80%`}}>
            <Row>
                <Col>
                <Form method="post" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group controlId="formBasicText">
                    <Form.Control type="text" as="input" placeholder="お名前" name="name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" as="input" placeholder="メールアドレス" name="email" required />
                </Form.Group>
                <Form.Group controlId="formTextarea">
                    <Form.Control as="textarea" placeholder="メッセージ" rows="3" name="message" required />
                </Form.Group>
                <Form.Group>
                    <Form.File id="FormControlFile" name="file" lang="ja" label="ファイル添付" />
                </Form.Group>
                    <Button variant="light" type="submit">送信</Button>
                </Form>
                </Col>
            </Row>
            </Container>
            <Row>
            <Col className="space"></Col>
            </Row>
  </Layout>
);

export default ContactPage;
