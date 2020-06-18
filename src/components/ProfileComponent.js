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
				this.props.history.push("/login")
			})
			.then(user => {
				if (user)
					this.setState({
						user: user
					})
				console.log(user)
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
		return <div className="container">
			<form>
				{
					this.state.user.role === "TEACHER" &&
					<Link to={"/students"} className="float-right">View Students</Link>
				}
				<Link to={"/mydecks"} className="float-center">View My Decks</Link>
				<h1 style={{'paddingLeft': '200px'}}>Profile</h1>
				{
					this.state.updated &&
					<div className="form-group row">
						<label htmlFor="username" className="col-sm-2 col-form-label"/>
						<div className="alert alert-primary col-sm-10" role="alert">
							Profile Updated
						</div>
					</div>
				}
				<div className="form-group row">
					<label htmlFor="name" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input className="form-control"
									 id="name" value={this.state.user.name}
									 onChange={(e) => {
										 const newName = e.target.value
										 this.setState(prevState => ({
											 user: {
												 ...prevState.user,
												 name: newName
											 }
										 }))
									 }}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="username" className="col-sm-2 col-form-label">
						Username
					</label>
					<div className="col-sm-10">
						<input readOnly className="form-control"
									 id="username" value={this.state.user.username}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="phone" className="col-sm-2 col-form-label">
						Phone
					</label>
					<div className="col-sm-10">
						<input className="form-control" id="phone" value={this.state.user.phone}
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
				<div className="form-group row">
					<label htmlFor="email" type="email" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input className="form-control" id="email"
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
				<div className="form-group row">
					<label htmlFor="role" className="col-sm-2 col-form-label">
						Role
					</label>
					<div className="col-sm-10">
						<select className="form-control" id="role" value={this.state.user.role}
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
				<div className="form-group row">
					<label htmlFor="dob" className="col-sm-2 col-form-label">
						Date of Birth
					</label>
					<div className="col-sm-10">
						<input type="date" className="form-control"
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

				<div className="form-group row">
					<label htmlFor="update" className="col-sm-2 col-form-label"></label>
					<div className="col-sm-10">
						<a className="btn btn-primary btn-block form-control text-white"
							 id="update" onClick={() => this.update()}>Update
						</a>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="logout" className="col-sm-2 col-form-label"></label>
					<div className="col-sm-10">
						<a className="btn btn-primary btn-block form-control text-white"
							 id="logout" onClick={() => this.logout()}>Log Out
						</a>
					</div>
				</div>
			</form>
		</div>
	}
}

export default ProfileComponent