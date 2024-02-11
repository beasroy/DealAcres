'use client';
import React, { useState } from 'react';
import Card from './Card';
import { GrLinkNext } from "react-icons/gr";

const Carousel = () => {
  const cardData = [
    { title: 'Card 1',imageUrl:'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg',description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam' },
    { title: 'Card 2',imageUrl:'https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg' ,description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'},
    { title: 'Card 3',imageUrl:'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg',description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam' },
    { title: 'Card 4',imageUrl:'https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg',description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'}
  ];

  const [position, setPosition] = useState(0);

  const handleNextClick = () => {
    setPosition((prevPosition) => (prevPosition + 1) % cardData.length);
  };

  return (
    <div className="carousel-container">
      <div className="cards-wrapper">
        {[position, position + 1, position + 2, position + 3].map((index) => (
          <Card key={index} imageUrl={cardData[index % cardData.length].imageUrl} title={cardData[index % cardData.length].title} description={cardData[index % cardData.length].description} />
        ))}
      </div>
      <button className="arrow" onClick={handleNextClick}>
        <GrLinkNext />
      </button>
    </div>
  );
};
export default Carousel;
