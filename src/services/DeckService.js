const findAllDecks = () => {
  return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/decks")
    .then(response => response.json())
}

const findDeckById = (deckId) => {
  return fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/decks/${deckId}`)
    .then(response => response.json())
}

const deleteDeck = (deckId) => {
  return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/decks/" + deckId, {
    method: 'DELETE'
  })
}

const updateDeck = (deckId, newDeck) =>
  fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/decks/${deckId}`, {
    method: 'PUT',
    body: JSON.stringify(newDeck),
    headers: {
      'content-type': 'application/json'
    }
  })

const createDeck = (deck) =>
  fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/decks`, {
    method: 'POST',
    body: JSON.stringify(deck),
    headers: {
      'content-type': 'application/json'
    }
  })


export default {
  findAllDecks,
  deleteDeck,
  createDeck,
  updateDeck,
  findDeckById
}