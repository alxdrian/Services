import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ServiceForm () {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Card>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card.Body>
          <Card.Title>Servicio</Card.Title>
            <Form.Group className="mb-3" controlId="nameServiceForm">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback type="invalid">
                Por favor indique un nombre.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionServiceForm">
              <Form.Label>Descripción</Form.Label>
              <Form.Control required type="text"/>
              <Form.Control.Feedback type="invalid">
                Por favor indique una descripción.
              </Form.Control.Feedback>
            </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-success" type="submit">Grabar</Button>
          <Button variant="outline-danger">Cancelar</Button>
        </Card.Footer>
      </Form>
    </Card>    
  )
}