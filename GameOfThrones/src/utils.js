import axios from 'axios';

const GOT_API_URL = 'https://anapioficeandfire.com/api/houses';
const DALLE_API_URL = 'https://api.openai.com/v1/images/generations';
const OPENAI_API_KEY = 'PRIVATE KEY';

export const getRandomHouses = (housesData, count) => {
  const shuffledHouses = housesData.sort(() => 0.5 - Math.random());
  return shuffledHouses.slice(0, count).map(house => ({
    name: house.name,
    coatOfArms: house.coatOfArms,
    words: house.words,
    url: house.url,
    showWords: false,
    imageUrl: null,
  }));
};

export const fetchDalleImage = async (coatOfArms) => {
  try {
    const response = await axios.post(
      DALLE_API_URL,
      {
        prompt: `Create an image based on the following description of a Game Of Thrones coat of arms: ${coatOfArms} WITHOUT ANY TEXT. It has to be a banner-like image, with a solid color background. Minimalist`,
        n: 1,
        size: '256x256',
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.data[0].url;
  } catch (error) {
    console.error('Error fetching DALL-E image:', error);
    return null;
  }
};

export const fetchHousesWithImages = async () => {
  try {
    const response = await axios.get(`${GOT_API_URL}?pageSize=50`);
    const housesWithWords = response.data.filter(house => house.words && house.words.length > 0);
    const randomHouses = getRandomHouses(housesWithWords, 3);

    const housesWithImages = await Promise.all(
      randomHouses.map(async (house) => {
        const imageUrl = await fetchDalleImage(house.coatOfArms);
        return { ...house, imageUrl };
      })
    );

    return housesWithImages;
  } catch (error) {
    console.error('Error fetching houses:', error);
    return [];
  }
};
