import React, { useState } from 'react';
import CharDisplay from './CharDisplay';
import { useDispatch } from 'react-redux'

import { inputChar } from './actions/index'


function StarWars2() {
  const [id, setId] = useState('');
  const [charList, setCharList] = useState([])

  const dispatch = useDispatch()

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault()
          dispatch( inputChar(id) )
        }}
      >
        <input 
          value={id}
          type='number'
          onChange={e => setId(e.target.value)}
        />
        <button type='submit'>Search!</button>
      </form>
      {/* {data ? <CharDisplay /> : <p>Search a number to start :)</p>} */}
      <CharDisplay/>
    </div>
  )
}

export default StarWars2;
