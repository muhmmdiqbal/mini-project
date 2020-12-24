import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, Image, Button, FormFile } from 'react-bootstrap'

function Profile() {
  const src = 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
  
  return (
    <div className='d-flex justify-content-center my-5'>
      <Form>
        <FormGroup>
          <Image src={src} className='photo rounded-circle' />
          <FormFile></FormFile>
        </FormGroup>

        <FormGroup>
          <FormLabel>Full Name</FormLabel>
          <FormControl type='text' placeholder='Full Name' />
        </FormGroup>

        <FormGroup>
          <FormLabel>Email Address</FormLabel>
          <FormControl type='email' placeholder='Email Address' />
        </FormGroup>
        
        <Button type='submit' variant='danger'>Edit Profile</Button>
      </Form>
    </div>
  )
}

export default Profile
