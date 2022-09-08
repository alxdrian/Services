import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service from './Service';

export default function ServiceList () {
  const store = useSelector(state => state.service)
  const list = store.list

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {list.length && list.map(service => 
          <Col key={`service-${service.id}`}>
            <Service name={service.name} description={service.description}/>
          </Col>
        )}
      </Row>
    </Container>
  )
}