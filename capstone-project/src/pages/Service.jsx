import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Service = function() {
    return(
        <div className='Center'>
        <Card className="Card-Background" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/Food2.png" style={{width: "140px"}} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <br />
         <Card className="Card-Background" style={{ width: '18rem' }}>
         <Card.Img variant="top" src="/images/Steak.png" style={{width: "140px"}} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <br />
         <Card className="Card-Background" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/Wings.png" style={{width: "140px", height: "190px"}} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    )
}
