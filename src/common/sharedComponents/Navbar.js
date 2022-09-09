import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAll, getCategoryServices, setCategoryFilter } from '../../features/services/serviceSlice';

export default function NavBar () {
  const dispatch = useDispatch()

  const setAllFilter = () => {
    dispatch(getAll())
    dispatch(setCategoryFilter('all'))
  }

  const setCarsFilter = () => {
    dispatch(getCategoryServices('cars'))
    dispatch(setCategoryFilter('cars'))
  }

  const setHealthFilter = () => {
    dispatch(getCategoryServices('health'))
    dispatch(setCategoryFilter('health'))
  }

  const setHomeFilter = () => {
    dispatch(getCategoryServices('home'))
    dispatch(setCategoryFilter('home'))
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#all" onClick={setAllFilter}>Todos</Nav.Link>
            <Nav.Link href="#cars" onClick={setCarsFilter}>Autos</Nav.Link>
            <Nav.Link href="#health" onClick={setHealthFilter}>Salud</Nav.Link>
            <Nav.Link href="#home" onClick={setHomeFilter}>Hogar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}