import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteService, setEditionMode, setFormField, setSelectedService } from './serviceSlice';

export default function Service ({name, description, id, category}) {
  const dispatch = useDispatch()

  const editService = () => {
    dispatch(setSelectedService({name: name, id: id}))
    dispatch(setEditionMode())
    dispatch(setFormField({field: 'name', value: name}))
    dispatch(setFormField({field: 'description', value: description}))
    dispatch(setFormField({field: 'category', value: category}))
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="link" onClick={editService}>Editar</Button>
        <Button variant="link" onClick={(e) => dispatch(deleteService(id))}>Eliminar</Button>
      </Card.Footer>
    </Card>
  )
}