import React, { useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button, NavLink, Modal, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const FormModal = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleCloseSignIn = () => setShowSignIn(false)
  const handleCloseRegister = () => setShowRegister(false)

  const handleShowSignIn = () => {
    setShowSignIn(true)
    setShowRegister(false)
  }
  const handleShowRegister = () => {
    setShowSignIn(false)
    setShowRegister(true)
  }

  const isLoggedIn = () => {
    setShowSignIn(false)
  }
  const isRegistered = () => {
    setShowRegister(false)
  }

  return (
    <>
      <NavLink className='text-dark' onClick={handleShowSignIn}>Sign in</NavLink>

      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Form>
          <ModalHeader closeButton>
            <ModalTitle>Sign in</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='Email Address' />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password' />
            </FormGroup>
            
            <p>Don't have an account yet?<NavLink className='d-inline' onClick={handleShowRegister}>Register</NavLink></p>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' variant='dark' onClick={isLoggedIn}>Sign in</Button>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Form>
          <ModalHeader closeButton>
            <ModalTitle>Register</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <FormControl type='text' placeholder='Full Name' />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='Email Address' />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password' />
            </FormGroup>

            <FormGroup>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl type='password' placeholder='Confirm Password' />
            </FormGroup>

            <p>Already have an account?<NavLink className='d-inline' onClick={handleShowSignIn}>Sign in</NavLink></p>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' variant='dark' onClick={isRegistered}>Register</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default FormModal