const findAllFlashcards = () => {
  return fetch("http://localhost:8080/api/flashcards")
    .then(response => response.json())
}

const findFlashcardForDeck = (deckId) =>
  fetch(`http://localhost:8080/api/decks/${deckId}/flashcards`)
    .then(response => response.json())


const deleteFlashcard = (flashcardId) => {
  return fetch("http://localhost:8080/api/flashcards/" + flashcardId, {
    method: 'DELETE'
  })
    .then(response => response.json())
}

const updateFlashcard = (flashcardId, newFlashcard) =>
  fetch(`http://localhost:8080/api/flashcards/${flashcardId}`, {
    method: 'PUT',
    body: JSON.stringify(newFlashcard),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const createFlashcard = (deckId, flashcard) =>
  fetch(`http://localhost:8080/api/decks/${deckId}/flashcards`, {
    method: 'POST',
    body: JSON.stringify(flashcard),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())


export default {
  findAllFlashcards,
  deleteFlashcard,
  createFlashcard,
  updateFlashcard,
  findFlashcardForDeck
}