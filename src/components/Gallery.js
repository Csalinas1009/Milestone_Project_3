import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/styles.css'



function Gallery({pic}) {
  

  
    return (
      <div className='gallery'>
      <Row xs={2} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pic.imageUrl}/>
          </Card>
        </Col>
      ))}
    </Row>
    </div>


      

    );
  };


export default Gallery;











