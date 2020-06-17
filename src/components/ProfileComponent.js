import React from "react";
import UserService from "../services/UserService"

class ProfileComponent extends React.Component {

	state = {
		user: {}
	}

	componentDidMount() {
		UserService.profile()
			.catch(e => {
				this.props.history.push("/")
			})
			.then(user => {
				if(user)
					this.setState({
						user: user
					})
			})
	}

	render() {
		return <div class="container">
			<form>
				<h1 style={{'padding-left': '200px'}}>Profile</h1>
				<div class="form-group row">
					<label for="username" class="col-sm-2 col-form-label">
						Username
					</label>
					<div class="col-sm-10">
						<input readonly class="form-control"
									 id="username" value="username"/>
					</div>
				</div>
				<div class="form-group row">
					<label for="phone" class="col-sm-2 col-form-label">
						Phone
					</label>
					<div class="col-sm-10">
						<input class="form-control" id="phone" value="571-474-6503"/>
					</div>
				</div>
				<div class="form-group row">
					<label for="email" type="email" class="col-sm-2 col-form-label">
						Email
					</label>
					<div class="col-sm-10">
						<input class="form-control" id="email"
									 value="emailaddress@gmail.com"/>
					</div>
				</div>
				<div class="form-group row">
					<label for="role" class="col-sm-2 col-form-label">
						Role
					</label>
					<div class="col-sm-10">
						<select class="form-control" id="role">
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
									 id="dob" value="1998-03-27"/>
					</div>
				</div>

				<div class="form-group row">
					<label for="update" class="col-sm-2 col-form-label"></label>
					<div class="col-sm-10">
						<button class="btn btn-primary btn-block form-control"
										id="update">Update
						</button>
					</div>
				</div>
				<div class="form-group row">
					<label for="logout" class="col-sm-2 col-form-label"></label>
					<div class="col-sm-10">
						<button class="btn btn-primary btn-block form-control"
										formaction="../index.html" id="logout">Log Out
						</button>
					</div>
				</div>
				<div class="form-group row">
					<label for="username" class="col-sm-2 col-form-label"/>
					<div class="alert alert-primary col-sm-10" role="alert">
						Profile Updated
					</div>
				</div>
			</form>
		</div>
	}
}

export default ProfileComponent