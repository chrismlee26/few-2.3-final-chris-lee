import React, { useState } from 'react'


function StarWars() {
  const [id, setId] = useState();

  // something here to validate input 

  return (
    <div>
      <input
        placeholder="Enter ## 1-16, 18-83"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <button>Search!</button>
    </div>
  )
}

export default StarWars
