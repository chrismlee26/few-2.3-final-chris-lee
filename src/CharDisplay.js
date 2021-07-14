import { useSelector, useDispatch } from 'react-redux'

function CharDisplay() {
  // const { name, height, mass, hair_color, eye_color, birth_year } = useSelector(state => state.starWars)

  const starWars = useSelector(state => state.starWars)

  if (starWars === null) {
    return null
  }

  const { name, height, mass, hair_color, eye_color, birth_year } = starWars

  return (
    <div>
      <button>save</button>
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
