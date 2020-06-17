import React from "react";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

class LoginComponent extends React.Component {

	state = {
		username: "a",
		password: "",
		valid: true
	}

	login() {
		UserService.login({
			username: this.state.username,
			password: this.state.password
		})
			.catch(e => {
				this.setState({valid: false})
			})
			.then(currentUser => {
				if(currentUser) {
					this.props.history.push("/profile")
					this.setState({valid: true})
				}
			})
	}

	render() {
		return <div className="container">
			<form>
				<div className="col-6 form-group row">
					<a href="/" className="float-left">Cancel</a>
				</div>
				{
					!this.state.valid &&
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
						<input className="form-control"
									 id="username" onChange={(e) => this.setState({username: e.target.value})}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="password" className="col-sm-2 col-form-label">
						Password </label>
					<div className="col-sm-10">
						<input type="password" className="form-control"
									 id="password" onChange={(e) => this.setState({password: e.target.value})}/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label"></label>
					<div className="col-sm-10">
						<a className="btn btn-primary btn-block text-white" onClick={() => this.login()}>Sign In</a>
						<div className="row">
							<div className="col-6">
								<Link to="/register">Sign Up</Link>
							</div>
							<div className="col-6">
								<a href="#" className="float-right">Forgot Password?</a>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	}
}

export default LoginComponent