import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteService } from './serviceSlice';

export default function Service ({name, description, id}) {
  const dispatch = useDispatch()

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="link" >Editar</Button>
        <Button variant="link" onClick={(e) => dispatch(deleteService(id))}>Eliminar</Button>
      </Card.Footer>
    </Card>
  )
}