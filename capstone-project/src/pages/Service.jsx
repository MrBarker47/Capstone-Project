import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Service = function() {

return(
        <div className='Center'>
        <Card className="Card-Background" style={{ width: '20rem' }}>
        <Card.Img variant="top" src="/images/Food2.png" className="picture" style={{width: "140px"}} />
        <Card.Body>
        <Card.Title>Bacon Burger</Card.Title>
        <Card.Text>
         14.99
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        </Card.Body>
        </Card>
        <br />
         <Card className="Card-Background" style={{ width: '20rem' }}>
         <Card.Img variant="top" src="/images/Steak.png" className="picture" style={{width: "140px"}} />
        <Card.Body>
        <Card.Title>Steak</Card.Title>
        <Card.Text>
         22.99
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        </Card.Body>
        </Card>
        <br />
         <Card className="Card-Background" style={{ width: '20rem' }}>
          <Card.Img variant="top" src="/images/Wings.png" className="picture" style={{width: "140px", height: "190px"}} />
           <Card.Body>
           <Card.Title> 10 Wings</Card.Title>
           <Card.Text>
            16.99
          </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

