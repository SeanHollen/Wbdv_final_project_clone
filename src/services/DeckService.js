const findAllDecks = () => {
  return fetch("http://localhost:8080/api/decks")
    .then(response => response.json())
}

const findDeckById = (deckId) => {
  return fetch(`http://localhost:8080/api/decks/${deckId}`)
    .then(response => response.json())
}

const deleteDeck = (deckId) => {
  return fetch("http://localhost:8080/api/decks/" + deckId, {
    method: 'DELETE'
  })
}

const updateDeck = (deckId, newDeck) =>
  fetch(`http://localhost:8080/api/decks/${deckId}`, {
    method: 'PUT',
    body: JSON.stringify(newDeck),
    headers: {
      'content-type': 'application/json'
    }
  })

const createDeck = (deck) =>
  fetch(`http://localhost:8080/api/decks`, {
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