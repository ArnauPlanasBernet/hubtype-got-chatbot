import React from 'react';
import { Element, Pic, Title, Button, Text } from '@botonic/react';

const HouseElement = ({ house, index, handleShowWords }) => (
  <Element key={index} style={{ display: 'flex', flexDirection: 'column' }}>
    <Pic src={house.imageUrl || 'default_image_url'} />
    <div style={{ flex: 1, backgroundColor: '#404040', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
      <Title style={{ color: 'white', textAlign: 'center', margin: '0 auto' }}>{house.name}</Title>
    </div>
    <Button onClick={() => handleShowWords(index)}>
      {house.showWords ? 'Hide Words' : 'Show Words'}
    </Button>
    {house.showWords && <Text>{house.words}</Text>}
  </Element>
);

export default HouseElement;

