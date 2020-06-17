import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class StudentTableComponent extends React.Component {

	state = {
		students: [],
		newStudent: {
			role: "STUDENT"
		}
	}

	componentDidMount() {
		UserService.findStudents().then(students => {
			this.setState({students: students})
		})
	}

	createStudent() {
		UserService.register(this.state.newStudent)
		window.location.reload();
		return false;
	}

	render() {
		return (
			<div>
				<h1>Student {this.state.students.length}</h1>
				<table className="table table-striped">
					<thead>
					<tr>
						<th>Username</th>
						<th>Password</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th>Date of Birth</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{
						this.state.students.map(student =>
							<tr key={student.id}>
								<td>{student.username}</td>
								<td>***</td>
								<td>{student.email}</td>
								<td>{student.phone}</td>
								<td>{student.dob}</td>
								<td>
									{/*<Link to={`/profile/${student.id}`} className="btn btn-primary text-white">Edit</Link>*/}
								</td>
							</tr>
						)}
					<tr>
						<td>
							<input className="form-control" value={this.state.newStudent.username}
										 onChange={(e) => {
											 const newUsername = e.target.value
											 this.setState(prevState => ({
												 newStudent: {
													 ...prevState.newStudent,
													 username: newUsername
												 }
											 }))
										 }}/>
						</td>
						<td>
							<input className="form-control" type="password" value={this.state.newStudent.password}
										 onChange={(e) => {
											 const newPassword = e.target.value
											 this.setState(prevState => ({
												 newStudent: {
													 ...prevState.newStudent,
													 password: newPassword
												 }
											 }))
										 }}/>
						</td>
						<td>
							<input className="form-control" type="email" value={this.state.newStudent.email}
										 onChange={(e) => {
											 const newEmail = e.target.value
											 this.setState(prevState => ({
												 newStudent: {
													 ...prevState.newStudent,
													 email: newEmail
												 }
											 }))
										 }}/>
						</td>
						<td>
							<input className="form-control" value={this.state.newStudent.phone}
										 onChange={(e) => {
											 const newPhone = e.target.value
											 this.setState(prevState => ({
												 newStudent: {
													 ...prevState.newStudent,
													 phone: newPhone
												 }
											 }))
										 }}/>
						</td>
						<td>
							<input className="form-control" type="date" value={this.state.newStudent.dob}
										 onChange={(e) => {
											 const newDob = e.target.value
											 this.setState(prevState => ({
												 newStudent: {
													 ...prevState.newStudent,
													 dob: newDob
												 }
											 }))
										 }}/>
						</td>
						<td>
							<a className="btn btn-primary text-white"
								 onClick={() => this.createStudent()}>Create</a>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default StudentTableComponent