import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Service from './Service';
import { getAll, getCategoryServices } from "./serviceSlice";

export default function ServiceList () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.service)
  const services = store.services
  const category = store.category 

  useEffect(() => {
    if (services.status.idle) {
      if (category == 'all') {
        dispatch(getAll())
      }
      if (category == 'cars') {
        dispatch(getCategoryServices('cars'))
      }
      if (category == 'home') {
        dispatch(getCategoryServices('home'))
      }
      if (category == 'health') {
        dispatch(getCategoryServices('health'))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.status])
  

  return (
    <Container>
      {services.status.error && 
        <Alert variant="danger" onClose={(e) => window.location.reload(false)} dismissible>
          <Alert.Heading>Oh! Tuvimos un error!</Alert.Heading>
          <p>Code: {services.status.error.code}</p>
          <p>Message: {services.status.error.message}</p>
        </Alert>
      }
      {services.status.loading && <Spinner animation="border" variant="primary" className='position-absolute top-50 start-50 translate-middle' />}
      {services.list.length > 0 &&
        <Row xs={1} md={3} className="g-4">
          {services.list.map(service => 
            <Col key={`service-${service.id}`}>
              <Service name={service.name} description={service.description} id={service.id} category={service.category}/>
            </Col>
          )}
        </Row>
      }
    </Container>
    
  )
}