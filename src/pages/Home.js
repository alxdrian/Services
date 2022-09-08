import NavBar from "../common/sharedComponents/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceList from "../features/services/ServiceList";
import ServiceForm from "../features/services/ServiceForm";

export function Home () {

  return (
    <>
      <NavBar />
      <Container className="p-4">
        <Row>
          <Col xs={9}>
            <ServiceList></ServiceList>
          </Col>
          <Col xs={3}>
            <ServiceForm />
          </Col>
        </Row>
      </Container>
      
    </>
  )
}