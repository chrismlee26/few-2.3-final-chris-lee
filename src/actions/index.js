export const INPUT_CHAR = 'INPUT_CHAR'
export const SAVE_TO_LIST = 'SAVE_TO_LIST'

export const inputChar = (id) => {
  return async (dispatch) => {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const json = await res.json();

    const { name, height, mass, hair_color, eye_color, birth_year, homeworld, films  } = json

    const filmsList = await Promise.all(json.films.map(film => fetch(film)))
    const filmsJSON = await Promise.all(filmsList.map(res => res.json()))
    console.log(filmsJSON)

    dispatch({ type: INPUT_CHAR, payload: { name, height, mass, hair_color, eye_color, birth_year, homeworld, films, filmsJSON }})
  }
}

export const saveToList = (obj) => ({
  type: SAVE_TO_LIST, 
  payload: { obj },
})
