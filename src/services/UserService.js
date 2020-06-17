const profile = () => {
	return fetch("http://localhost:8080/api/profile", {
		method: 'POST',
		credentials: "include"
	})
		.then(response => {
			console.log(response)
			return response.json()
		})
}

const updateProfile = (profile) => {
	return fetch("http://localhost:8080/api/profile", {
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
	return fetch("http://localhost:8080/api/login", {
		body: JSON.stringify(creds),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		credentials: "include"
	}).then(response => response.json())
}

const logout = () => {
	return fetch("http://localhost:8080/api/logout", {
		method: 'POST',
		credentials: "include"
	})
}

const register = (profile) => {
	return fetch("http://localhost:8080/api/register", {
		body: JSON.stringify(profile),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		credentials: "include"
	}).then(response => response.json())
}

const findStudents = () => {
	return fetch("http://localhost:8080/api/students", {
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