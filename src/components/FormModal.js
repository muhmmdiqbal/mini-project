import axios from 'axios'
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

  let fullName, email, password, confirmPassword

  const handleSubmitSignIn = e => {
    e.preventDefault()
    const dataSignIn = {
      email: email,
      password: password
    }

    axios.post('user/login', dataSignIn)
      .then(
        res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('email', email)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }

  const handleSubmitRegister = e => {
    e.preventDefault()
    const dataRegister = {
      nama: fullName,
      email: email,
      password: password,
      passwordConfirmation: confirmPassword
    }

    axios.post('user/signup', dataRegister)
      .then(
        res => {
          localStorage.setItem('token', res.data.token)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }

  return (
    <>
      <NavLink className='text-light' onClick={handleShowSignIn}>Sign in</NavLink>

      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Form onSubmit={handleSubmitSignIn}>
          <ModalHeader closeButton>
            <ModalTitle>Sign in</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='Email Address' onChange={e => email = e.target.value}  />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password' onChange={e => password = e.target.value}  />
            </FormGroup>
            
            <p>Don't have an account yet?<NavLink className='d-inline text-danger' onClick={handleShowRegister}>Register</NavLink></p>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' variant='danger'>Sign in</Button>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Form onSubmit={handleSubmitRegister}>
          <ModalHeader closeButton>
            <ModalTitle>Register</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <FormControl type='text' placeholder='Full Name' onChange={e => fullName = e.target.value} />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='Email Address' onChange={e => email = e.target.value} />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password' onChange={e => password = e.target.value} />
            </FormGroup>

            <FormGroup>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl type='password' placeholder='Confirm Password' onChange={e => confirmPassword = e.target.value} />
            </FormGroup>

            <p>Already have an account?<NavLink className='d-inline text-danger' onClick={handleShowSignIn}>Sign in</NavLink></p>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' variant='danger'>Register</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default FormModal