import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service from './Service';

export default function ServiceList () {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Service />
        </Col>
        <Col>
          <Service />
        </Col>
        <Col>
          <Service />
        </Col>
        <Col>
          <Service />
        </Col>
        <Col>
          <Service />
        </Col>
        <Col>
          <Service />
        </Col>
      </Row>
    </Container>
  )
}