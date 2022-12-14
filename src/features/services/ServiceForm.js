import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addService, editService, setFormField, setResetForm } from './serviceSlice';

export default function ServiceForm () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.service)
  const form = store.form.fields
  const selectedService = store.form.selected
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (form.checkValidity() && store.form.mode.creation) {
      dispatch(addService(store.form.fields))
      dispatch(setResetForm())
    }
    if (form.checkValidity() && store.form.mode.edition) {
      dispatch(editService({
        id: selectedService.id, 
        ...store.form.fields
      }))
      dispatch(setResetForm())
    }
    setValidated(true);
  };

  return (
    <Card>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card.Body>
          <Card.Title>{store.form.mode.creation ? 'Crear Servicio' : `Editar ${selectedService.name}`}</Card.Title>
            <Form.Group className="mb-3" controlId="nameServiceForm">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text" value={form.name} onChange={(e) => dispatch(setFormField({field: 'name', value: e.target.value}))}/>
              <Form.Control.Feedback type="invalid">
                Por favor indique un nombre.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionServiceForm">
              <Form.Label>Descripción</Form.Label>
              <Form.Control required type="text" value={form.description} onChange={(e) => dispatch(setFormField({field: 'description', value: e.target.value}))}/>
              <Form.Control.Feedback type="invalid">
                Por favor indique una descripción.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryServiceForm">
              <Form.Label>Categoría</Form.Label>
              <Form.Select required value={form.category} onChange={(e) => dispatch(setFormField({field: 'category', value: e.target.value}))}>
                <option value="cars">Autos</option>
                <option value="health">Salud</option>
                <option value="home">Hogar</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor indique una categoría.
              </Form.Control.Feedback>
            </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-success" type="submit">Grabar</Button>
          <Button variant="outline-danger" onClick={(e) => dispatch(setResetForm())}>Cancelar</Button>
        </Card.Footer>
      </Form>
    </Card>    
  )
}