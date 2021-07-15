export const INPUT_CHAR = 'INPUT_CHAR'
export const SAVE_TO_LIST = 'SAVE_TO_LIST'

export const inputChar = (id) => {
  return async (dispatch) => {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const json = await res.json();
    const { name, height, mass, hair_color, eye_color, birth_year, homeworld, films  } = json

    dispatch({ type: INPUT_CHAR, payload: { name, height, mass, hair_color, eye_color, birth_year, homeworld, films }})
  }
}

export const saveToList = ( listObj ) => {
  return async (dispatch) => {
    // const listOfFilms = await listObj.films
    const filmsList = await listObj.films.map(item => fetch(item))

    return Promise.all(filmsList)

    dispatch({ type: SAVE_TO_LIST, payload: { listObj }})
  }
}
