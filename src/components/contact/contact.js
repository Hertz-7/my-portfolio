import Button from 'react-bootstrap/Button';
import './contact.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const sendEmail = async () => {
    const mailOptions = {
      from: email,
      to: 'mohammadaosaf@gmail.com',
      subject: subject,
      text: body,
    };
    try {
      await emailjs.send('service_k0ovioq', 'template_8ips00k', mailOptions,'NxD4uxxUqJiVccJ8f');
      return(<Toast>
        <Toast.Body>Email sent successfully.</Toast.Body>
        </Toast>);
      } catch (error) {
        return(<Toast>
          <Toast.Body>Error sending email.</Toast.Body>
          </Toast>);
      }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="Contact-section">
        <ScrollAnimation animateIn="animate__fadeIn">
          <h1 id='contact' className='Contact-heading'>Contact</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn">
          <Form>
          <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control className='input w-100' name='user_email' type="email" onChange={handleEmail} placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3 w-50 " controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control className='input w-w-100' name='user_subject' type="text" onChange={handleSubject} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 w-50 " controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email body</Form.Label>
              <Form.Control className='input w-w-100' name='message' as="textarea" onChange={handleBody}  rows={3} />
          </Form.Group>
          </Form>
          <Button variant="dark" className="submit-btn" onClick={sendEmail}>Send</Button>
      </ScrollAnimation>
    </div>
  );
}

export default Contact;