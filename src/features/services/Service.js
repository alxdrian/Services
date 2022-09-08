import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Service ({name, description}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="link">Editar</Button>
        <Button variant="link">Eliminar</Button>
      </Card.Footer>
    </Card>
  )
}