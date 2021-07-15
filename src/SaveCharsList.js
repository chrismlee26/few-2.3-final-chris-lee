import { useSelector } from 'react-redux'
import { saveToList } from './actions'

async function SaveCharList() {
  const getCharacter = useSelector(state => state.starWars)

  const { name, height, mass, hair_color, eye_color, birth_year, homeworld, films } = getCharacter

  const filmsList = await films.map(item => fetch(item))
  console.log(filmsList)

  return (
    <div>
      <h3>{name} </h3> 
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Birth Year: {birth_year}</p>
      <p>{homeworld}</p>
      <p>{filmsList}</p>
    </div>
  )
}

export default SaveCharList
