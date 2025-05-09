import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [src,setSrc] = useState("/icons/sun.png")

  const handleMode = () => {
    if(darkMode){
      setSrc("/icons/night-mode.png");
    }else{
      setSrc("/icons/sun.png");
    }

    setDarkMode(prev => !prev)
  }


  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="/brandimg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="home">SoftSell</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav className='d-flex gap-2 align-items-center cursor-pointer'>
              <Nav.Item onClick={handleMode} className=''>
                <img src={src}  alt="" />
              </Nav.Item>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">How it works</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </>
  )
}

export default TopBar;