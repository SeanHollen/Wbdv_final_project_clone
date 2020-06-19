const findAllDecks = () => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/decks")
		.then(response => response.json())
}

const findMyDecks = () => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/mydecks", {
		method: 'POST',
		credentials: "include"
	})
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

const createDeck = (userId, deck) =>
	fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/users/${userId}/decks`, {
		method: 'POST',
		body: JSON.stringify(deck),
		headers: {
			'content-type': 'application/json'
		}
	})

const searchKeyword = (keyword) => {
	return fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/search/${keyword}`,{
		method: 'GET',
		credentials: "include"
	})
		.then(response => response.json())
}

const addToMyDecks = (did) =>
	fetch(`https://cs4550-final-project-kdsh.herokuapp.com/api/mydecks/${did}`, {
		method: 'POST',
		credentials: "include"
	})


export default {
	findAllDecks,
	deleteDeck,
	createDeck,
	updateDeck,
	findDeckById,
	findMyDecks,
	searchKeyword,
	addToMyDecks
}