import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = function() {
  return (
    <div>
    <Form>
      <Form.Group className="Form" controlId="exampleForm.ControlInput1">
        <Form.Label className="Label">Email address</Form.Label>
        <Form.Control className="Input" type="email" placeholder="name@example.com" required/>
       </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='Form-Message'>Message</Form.Label>
        <Form.Control className="Input2" as="textarea" rows={3} required/>
        </Form.Group>
        <Button className="contact" variant='primary' type="submit" >Submit</Button>
        <p className='New-Paragraph'>We would love to hear from you!</p>
    </Form>

    </div>
  );

}


 
