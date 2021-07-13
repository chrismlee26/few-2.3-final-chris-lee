import React, { useState } from 'react'


function StarWars() {
  // Do we need a placeholder value?
  const [id, setId] = useState();

  // input validator

  // api call
  async function getPerson(id) {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`)
    const json = await res.json()
    console.log(json)
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
    </div>
  )
}

export default StarWars
