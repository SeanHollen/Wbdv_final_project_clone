const findAllFlashcards = () => {
  return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/flashcards")
    .then(response => response.json())
}

const findFlashcardForDeck = (deckId) =>
  fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/decks/${deckId}/flashcards`)
    .then(response => response.json())


const deleteFlashcard = (flashcardId) => {
  return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/flashcards/" + flashcardId, {
    method: 'DELETE'
  })
}

const updateFlashcard = (flashcardId, newFlashcard) =>
  fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/flashcards/${flashcardId}`, {
    method: 'PUT',
    body: JSON.stringify(newFlashcard),
    headers: {
      'content-type': 'application/json'
    }
  })

const createFlashcard = (deckId, flashcard) =>
  fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/decks/${deckId}/flashcards`, {
    method: 'POST',
    body: JSON.stringify(flashcard),
    headers: {
      'content-type': 'application/json'
    }
  })


export default {
  findAllFlashcards,
  deleteFlashcard,
  createFlashcard,
  updateFlashcard,
  findFlashcardForDeck
}