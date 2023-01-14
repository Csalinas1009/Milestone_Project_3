import React from 'react'
import Card from 'react-bootstrap/Card';


function Gallery() {

   
  // setting/testing Gallery, this should be an API call from BE once user uploads image? Pass down as a prop to this component from Parent? Need to look into this.
  const cardData = [
    {
      image: '',

      text: '',

    },
    {
      image: '',
      text: '',

    },
    {
      image: '',
      text: '',

    },
    {
      image: '',

      text: '',

    }
  ]

  //card component for Gallery. **needs styling for post layout, Possibly bootstrap grid?**
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "15rem" }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="gallery">{cardData.map(renderCard)}</div>
  )
};

export default Gallery;