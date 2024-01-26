import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardComp.scss"

function CardComp() {
  return (
    <Card className='card'>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;