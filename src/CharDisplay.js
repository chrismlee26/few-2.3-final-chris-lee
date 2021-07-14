import { useDispatch } from 'react-redux'

function CharDisplay(props) {
  const {name, height, mass, hair_color, eye_color, birth_year } = props
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => {}}
        >SAVE</button>
        <h3>{name} </h3> 
      </div>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Birth Year: {birth_year}</p>
    </div>
  )
}

export default CharDisplay
