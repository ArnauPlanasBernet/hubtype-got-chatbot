import React, { useState, useEffect, useCallback } from 'react';
import { Text, Carousel } from '@botonic/react';
import HouseElement from '../components/HouseElement';
import { fetchHousesWithImages } from '../utils';

const Welcome = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetHouses = async () => {
      const houses = await fetchHousesWithImages();
      setHouses(houses);
      setLoading(false);
    };

    fetchAndSetHouses();
  }, []);

  const handleShowWords = useCallback(index => {
    setHouses(houses => 
      houses.map((house, i) => 
        i === index ? { ...house, showWords: !house.showWords } : house
      )
    );
  }, []);

  return (
    <>
      <Text>Hello, I'm Jon Snow. Welcome to my chatbot!</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Carousel>
          {houses.map((house, index) => (
            <HouseElement
              key={index}
              house={house}
              index={index}
              handleShowWords={handleShowWords}
            />
          ))}
        </Carousel>
      )}
      <Text>Ask me anything you wish, for I know nothing yet this bot shall reveal.</Text>
    </>
  );
};

export default Welcome;
