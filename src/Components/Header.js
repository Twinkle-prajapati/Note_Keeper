import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='p-3' href="#home">NOTE KEEPER</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
