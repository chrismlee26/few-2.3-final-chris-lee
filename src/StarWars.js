import React, { useState } from 'react';
import CharDisplay from './CharDisplay';


function StarWars() {
  // Do we need a placeholder value?
  const [id, setId] = useState('');
  const [data, setData] = useState(null);

  // input validator

  // api call
  async function getPerson(id) {
    try {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const json = await res.json();

    //  success properties
    const name = json.name
    const height = json.height
    const mass = json.mass
    const hair_color = json.hair_color
    const eye_color = json.eye_color
    const birth_year = json.birth_year

    // check
    // console.log(name, height, mass, hair_color, eye_color, birth_year)

    // setData
    setData({
      name,
      height,
      mass,
      hair_color,
      eye_color,
      birth_year,
    })
  } catch(error) {
    console.log(error)
  }
}


  return (
    <div className="starWars">
      <input
        placeholder="Enter ## 1-16, 18-83"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <button 
        className="submitButton"
        onClick={() => getPerson(id)}
      >Search!</button>

    
    {data ? <CharDisplay {...data} /> : <p>Submit a number to start :)</p> }
    </div>
  )
}

export default StarWars
