import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class StudentTableComponent extends React.Component {

	state = {
		students: [],
		newStudent: {
			role: "STUDENT"
		},
		editingStudent: {}
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

	updateStudent() {
		UserService.updateProfile(this.state.editingStudent)
		window.location.reload()
	}

	deleteStudent() {

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

							<tr>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										student.username
									}
									{
										this.state.editingStudent.id === student.id &&
										<input className="form-control" value={this.state.editingStudent.username} placeholder="Username"
													 onChange={(e) => {
														 const newUsername = e.target.value
														 this.setState(prevState => ({
															 editingStudent: {
																 ...prevState.editingStudent,
																 username: newUsername
															 }
														 }))
													 }}/>
									}
								</td>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										<a>***</a>
									}
									{
										this.state.editingStudent.id === student.id &&
										<input className="form-control" type="password" value={this.state.editingStudent.password}
													 placeholder="Password"
													 onChange={(e) => {
														 const newPassword = e.target.value
														 this.setState(prevState => ({
															 editingStudent: {
																 ...prevState.editingStudent,
																 password: newPassword
															 }
														 }))
													 }}/>
									}
								</td>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										student.email
									}
									{
										this.state.editingStudent.id === student.id &&
										<input className="form-control" type="email" value={this.state.editingStudent.email}
													 placeholder="Email"
													 onChange={(e) => {
														 const newEmail = e.target.value
														 this.setState(prevState => ({
															 editingStudent: {
																 ...prevState.editingStudent,
																 email: newEmail
															 }
														 }))
													 }}/>
									}
								</td>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										student.phone
									}
									{
										this.state.editingStudent.id === student.id &&
										<input className="form-control" value={this.state.editingStudent.phone}
													 placeholder="Phone Number"
													 onChange={(e) => {
														 const newPhone = e.target.value
														 this.setState(prevState => ({
															 editingStudent: {
																 ...prevState.editingStudent,
																 phone: newPhone
															 }
														 }))
													 }}/>
									}
								</td>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										student.dob
									}
									{
										this.state.editingStudent.id === student.id &&
										<input className="form-control" type="date" value={this.state.editingStudent.dob}
													 onChange={(e) => {
														 const newDob = e.target.value
														 this.setState(prevState => ({
															 newStudent: {
																 ...prevState.editingStudent,
																 dob: newDob
															 }
														 }))
													 }}/>
									}
								</td>
								<td>
									{
										this.state.editingStudent.id !== student.id &&
										<a className="btn btn-primary text-white"
											 onClick={() => {
												 this.setState({editingStudent: student})
											 }}>Edit</a>
									}
									{
										this.state.editingStudent.id === student.id &&
										<span className="btn-group">
											<a className="btn btn-success text-white"
												 onClick={() => this.updateStudent()}>Update</a>
											<a className="btn btn-danger text-white"
												 onClick={() => this.deleteStudent()}>Delete</a>
										</span>
									}
								</td>
							</tr>
						)}
					<tr>
						<td>
							<input className="form-control" value={this.state.newStudent.username} placeholder="Username"
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
										 placeholder="Password"
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
										 placeholder="Email"
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
										 placeholder="Phone Number"
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