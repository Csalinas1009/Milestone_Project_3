import React from 'react'
import Card from 'react-bootstrap/Card';


function Gallery() {

    // setting/testing Gallery, this should be an API call from BE once user uploads image? Pass down as a prop to this component from Parent? Need to look into this.
    const cardData = [
        {
            image: 'https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg',
            title: 'test',
            text: 'test',

        }
    ]

    //card component for Gallery. **needs styling for post layout, Possibly bootstrap grid?**
    const renderCard = (card, index) => {
        return (  
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      };
    
      return(
        <div className="">{cardData.map(renderCard)}</div>
      ) 
    };

export default Gallery;