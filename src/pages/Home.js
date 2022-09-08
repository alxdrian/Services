import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../common/sharedComponents/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceList from "../features/services/ServiceList";
import ServiceForm from "../features/services/ServiceForm";
import { getAll } from "../features/services/serviceSlice";

export function Home () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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