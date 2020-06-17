import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class RegisterComponent extends React.Component {

	state = {
		username: "",
		password: "",
		confirmPassword: "",
		role: "STUDENT",
		confirmed: true
	}

	register() {
		console.log("calling register")
		if (this.state.username && this.state.password && this.state.confirmPassword &&
			this.state.password === this.state.confirmPassword) {
			console.log("calling service")
			UserService.register({
				username: this.state.username,
				password: this.state.password,
				role: this.state.role
			}).then(currentUser => this.props.history.push("/profile"))
			this.setState({
				confirmed: true
			})
		} else {
			console.log("no match")
			this.setState({
				confirmed: false
			})
		}
	}

	render() {
		return <div className="container">
			<form>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">
						<a href="/" className="float-left">Cancel</a>
					</label>
				</div>
				{
					!this.state.confirmed &&
					<div className="form-group row">
						<label htmlFor="username" className="col-sm-2 col-form-label"/>
						<div className="alert alert-danger col-sm-10" role="alert">
							Invalid
						</div>
					</div>
				}
				<div className="form-group row">
					<label htmlFor="username" className="col-sm-2 col-form-label">
						Username </label>
					<div className="col-sm-10">
						<input className="form-control" id="username"
									 onChange={(e) => this.setState({username: e.target.value})}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="password" className="col-sm-2 col-form-label">
						Password </label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="password"
									 onChange={(e) => this.setState({password: e.target.value})}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="confirm_password" className="col-sm-2 col-form-label">
						Confirm Password </label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="confirm_password"
									 onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="role" className="col-sm-2 col-form-label">
						Role
					</label>
					<div className="col-sm-10">
						<select className="form-control" id="role" value={this.state.role}
										onChange={(e) => this.setState({role: e.target.value})}>
							<option value="TEACHER">Teacher</option>
							<option value="STUDENT">Student</option>
						</select>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label"></label>
					<div className="col-sm-10">
						<a className="btn btn-primary btn-block text-white"
										onClick={() => this.register()}>Sign Up
						</a>
						<div className="row">
							<div className="col-6">
								<Link className="float-left" to={"/login"}>
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	}
}

export default RegisterComponent