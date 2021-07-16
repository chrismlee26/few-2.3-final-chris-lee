import { useSelector } from 'react-redux'

function SaveCharList() {
  const getCharacter = useSelector(state => state.savedList)
  // useSelector(state => console.log(state))

  if (getCharacter === null) {
    return null
  }

  return (
    <div> 
      {getCharacter.map((obj, index) => {
        return (
          <div key={index} className="char_list_display">
            <h3>{obj.name} </h3> 
            <p>Height: {obj.height}</p>
            <p>Mass: {obj.mass}</p>
            <p>Hair Color: {obj.hair_color}</p>
            <p>Eye Color: {obj.eye_color}</p>
            <p>Homeworld: {obj.worldJSON.name}</p>
            {obj.filmsJSON.map(film => <p key={film.title}>Film: {film.title}</p>)}
          </div>
        )
      }
      )}
    </div>
  );
}













export default SaveCharList
