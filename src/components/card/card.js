import './card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Appcard(props) {
  return (
    <div className="Appcard">
        <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} alt='test' />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="Dark" className='go-btn' href={props.link}>View demo</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default Appcard;
