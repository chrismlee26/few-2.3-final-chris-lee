import React, { useState } from 'react';
import CharDisplay from './CharDisplay';
import { useDispatch } from 'react-redux'

import { inputChar } from './actions/index'


function StarWars() {
  // Do we need a placeholder value?
  const [id, setId] = useState('');
  const [charList, setCharList] = useState([])
  const [data, setData] = useState(null);

  // api call
  async function getPerson(id) {
    try {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const json = await res.json();

    // success properties
    const name = json.name
    const height = json.height
    const mass = json.mass
    const hair_color = json.hair_color
    const eye_color = json.eye_color
    const birth_year = json.birth_year

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
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >

        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ## 1-16, 18-83"
          type="number"
        />
        <button 
          className="submitButton"
          type="submit"
          onClick={() => getPerson(id)}
        >Search!</button>
      </form>
      {data ? <CharDisplay {...data} /> : <p>Search a number to start :)</p>}
    </div>
  )
}

export default StarWars;
