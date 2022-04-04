import { React, useState, useEffect } from 'react';
import { Card } from './Card';
const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character/?page=';

async function getDataAll(page) {
  const result = await fetch(API_RICK_MORTHY + page);
  const data = await result.json();
  //console.log('result', data.results);
  return data.results;
}

export const Gallery = (props) => {
    const { page } = props;
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(API_RICK_MORTHY + page)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setCharacters(data.results))
    });

    return (
        <div className='gallery-container'>
            {characters.map((elm, index) => (
              <Card
                key={index}
                name={elm.name}
                url={elm.image}
                gender={elm.gender}
                status={elm.status}
            ></Card>
            ))}
        </div>
    );
}