import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Mensaje</Form.Label>
        <Form.Control style={{ height: '200px' }} type='text' placeholder='' />
      </Form.Group>
      <Button variant='danger' type='submit'>
        Enviar
      </Button>
    </Form>
  )
}

export default Formulario
