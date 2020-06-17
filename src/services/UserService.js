const profile = () => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/profile", {
		method: 'POST',
		credentials: "include"
	})
		.then(response => {
			console.log(response)
			return response.json()
		})
}

const updateProfile = (profile) => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/profile", {
		body: JSON.stringify(profile),
		headers: {
			'content-type': 'application/json'
		},
		method: 'PUT',
		credentials: "include"
	})
		.then(response => response.json())
}

const login = (creds) => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/login", {
		body: JSON.stringify(creds),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		credentials: "include"
	}).then(response => response.json())
}

const logout = () => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/logout", {
		method: 'POST',
		credentials: "include"
	})
}

const register = (profile) => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/register", {
		body: JSON.stringify(profile),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		credentials: "include"
	}).then(response => response.json())
}

const findStudents = () => {
	return fetch("https://cs4550-final-project-kdsh.herokuapp.com/api/students", {
		method: 'GET',
	}).then(response => response.json())
}

export default {
	profile,
	updateProfile,
	login,
	logout,
	register,
	findStudents
}