import { useSelector } from 'react-redux'

function SaveCharList() {
  const getCharacter = useSelector(state => state.savedList)

  if (getCharacter === null) {
    return null
  }

  return (
    <div>
      {getCharacter.map((obj, index) => {
        return (
          <div key={index}>
            <h3>{obj.name} </h3> 
            <p>Height: {obj.height}</p>
            <p>Mass: {obj.mass}</p>
            <p>Hair Color: {obj.hair_color}</p>
            <p>Eye Color: {obj.eye_color}</p>

            {/* Maybe add another component that does async Promise.All */}
            <h4>{obj.homeworld}</h4>
            {/* {obj.films.map(i => <p key={i.title}>Film: {i.title}</p>)} */}

            <hr />
          </div>
        )
      }
      )}
    </div>
  );
}













export default SaveCharList
