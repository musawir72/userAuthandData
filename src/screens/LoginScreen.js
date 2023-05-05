import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {userLogin} from '../slice/authActio'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { loading, userInfo, error } = useSelector((state) => state.user)
  

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    let data = {username,password}
    dispatch(userLogin(data))
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
      {error && <span>{error}</span>}
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            value={username}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={loading}>
        Login
        </Button>
      </Form>
    </>
  )
}

export default LoginScreen