import React from "react";
import UserService from "../services/UserService"
import {Link} from "react-router-dom";

class ProfileComponent extends React.Component {

	state = {
		user: {},
		updated: false
	}

	componentDidMount() {
		UserService.profile()
			.catch(e => {
				this.props.history.push("/")
			})
			.then(user => {
				if (user)
					this.setState({
						user: user
					})
			})
	}

	update() {
		UserService.updateProfile(this.state.user)
		this.setState({updated: true})
	}

	logout() {
		UserService.logout().then(response => this.props.history.push("/"))
	}


	render() {
		return <div class="container">
			<form>
				{
					this.state.user.role === "TEACHER" &&
					<Link to={"/students"} className="float-right">View Students</Link>
				}
				<h1 style={{'padding-left': '200px'}}>Profile</h1>
				{
					this.state.updated &&
					<div className="form-group row">
						<label htmlFor="username" className="col-sm-2 col-form-label"/>
						<div className="alert alert-primary col-sm-10" role="alert">
							Profile Updated
						</div>
					</div>
				}
				<div class="form-group row">
					<label for="username" class="col-sm-2 col-form-label">
						Username
					</label>
					<div class="col-sm-10">
						<input readonly class="form-control"
									 id="username" value={this.state.user.username}
									 onChange={(e) => {
										 const newUsername = e.target.value
										 this.setState(prevState => ({
											 user: {
												 ...prevState.user,
												 username: newUsername
											 }
										 }))
									 }}/>
					</div>
				</div>
				<div class="form-group row">
					<label for="phone" class="col-sm-2 col-form-label">
						Phone
					</label>
					<div class="col-sm-10">
						<input class="form-control" id="phone" value={this.state.user.phone}
									 onChange={(e) => {
										 const newPhone = e.target.value
										 this.setState(prevState => ({
											 user: {
												 ...prevState.user,
												 phone: newPhone
											 }
										 }))
									 }}/>
					</div>
				</div>
				<div class="form-group row">
					<label for="email" type="email" class="col-sm-2 col-form-label">
						Email
					</label>
					<div class="col-sm-10">
						<input class="form-control" id="email"
									 value={this.state.user.email}
									 onChange={(e) => {
										 const newEmail = e.target.value
										 this.setState(prevState => ({
											 user: {
												 ...prevState.user,
												 email: newEmail
											 }
										 }))
									 }}/>
					</div>
				</div>
				<div class="form-group row">
					<label for="role" class="col-sm-2 col-form-label">
						Role
					</label>
					<div class="col-sm-10">
						<select class="form-control" id="role" value={this.state.user.role}
										onChange={(e) => {
											const newRole = e.target.value
											this.setState(prevState => ({
												user: {
													...prevState.user,
													role: newRole
												}
											}))
										}}>
							<option value="TEACHER">Teacher</option>
							<option value="STUDENT">Student</option>
						</select>
					</div>
				</div>
				<div class="form-group row">
					<label for="dob" class="col-sm-2 col-form-label">
						Date of Birth
					</label>
					<div class="col-sm-10">
						<input type="date" class="form-control"
									 id="dob" value={this.state.user.dob}
									 onChange={(e) => {
										 const newDob = e.target.value
										 this.setState(prevState => ({
											 user: {
												 ...prevState.user,
												 dob: newDob
											 }
										 }))
									 }}/>
					</div>
				</div>

				<div class="form-group row">
					<label for="update" class="col-sm-2 col-form-label"></label>
					<div class="col-sm-10">
						<a class="btn btn-primary btn-block form-control text-white"
							 id="update" onClick={() => this.update()}>Update
						</a>
					</div>
				</div>
				<div class="form-group row">
					<label for="logout" class="col-sm-2 col-form-label"></label>
					<div class="col-sm-10">
						<a class="btn btn-primary btn-block form-control text-white"
							 id="logout" onClick={() => this.logout()}>Log Out
						</a>
					</div>
				</div>
			</form>
		</div>
	}
}

export default ProfileComponent