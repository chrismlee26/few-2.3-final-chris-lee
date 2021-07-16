import { useSelector, useDispatch } from 'react-redux'
import { saveToList } from './actions'

function CharDisplay() {
  const getCharacter = useSelector(state => state.starWars)
  const dispatch = useDispatch()

  if (getCharacter === null) {
    return null
  }

  const { name, height, mass, hair_color, eye_color, birth_year } = getCharacter

  return (
    <div>
      <br />
      <button onClick={() => { dispatch(saveToList(getCharacter)) }} //&& console.log(getCharacter, 'charDisplay')
      >SAVE TO LIST</button>
      <h3>{name} </h3> 
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Birth Year: {birth_year}</p>
    </div>
  )
}

export default CharDisplay
