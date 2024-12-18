import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = function() {
  return (
    <Form>
      <Form.Group className="Form" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="Input" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control className="Input2" as="textarea" rows={3} />
        </Form.Group>
        <Button className="contact" variant='primary' type="submit" >Submit</Button>
    </Form>
  );
}



