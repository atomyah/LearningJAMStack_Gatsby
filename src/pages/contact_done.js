import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'

const ContactDone = () => (
    <Layout>
      <SEO title="お問い合わせ送信完了" />
      <Container fluid="md" style={{width:`80%`}}>
        <Row>
        <Col className="space"></Col>
        </Row>
        <h1 style={{fontSize:`1.2rem`}}>お問い合わせ送信完了</h1>
          <p>お問い合わせありがとうございます。弊社担当者より２～３営業日中にご連絡致します。</p>
        <h2 style={{fontSize:`1.2rem`}}>Message sent Success!</h2>
          <p>Thank you your inquiry. We will contact you by within 2~3 business days.</p>
        <Row>
        <Col className="space"></Col>
        </Row>
      </Container>
    </Layout>
)

export default ContactDone