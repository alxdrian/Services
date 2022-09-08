import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service from './Service';
import { getAll } from "./serviceSlice";

export default function ServiceList () {
  const dispatch = useDispatch();
  const store = useSelector(state => state.service)
  const services = store.services

  useEffect(() => {
    if (services.status.idle) {
      dispatch(getAll())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.status])
  

  return (
    <Container>
      {services.status.loading && <div>loading</div>}
      {services.list.length > 0 &&
        <Row xs={1} md={3} className="g-4">
          {services.list.map(service => 
            <Col key={`service-${service.id}`}>
              <Service name={service.name} description={service.description}/>
            </Col>
          )}
        </Row>
      }
    </Container>
  )
}