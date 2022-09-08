import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Service () {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Electricidad</Card.Title>
        <Card.Text>Lorem ipsum, dolor sit atmet consectur adpiscing eit</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="link">Editar</Button>
        <Button variant="link">Eliminar</Button>
      </Card.Footer>
    </Card>
  )
}