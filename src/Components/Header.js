import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
    <Navbar style={{backgroundColor:"#1A838D"}}>
        <Container>
          <Navbar.Brand className='p-3 text-white fw-semibold'>NOTE KEEPER</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
