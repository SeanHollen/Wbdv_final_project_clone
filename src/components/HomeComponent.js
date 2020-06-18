import React from "react";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

class HomeComponent extends React.Component {

	state = {
		user: ""
	}

	componentDidMount() {
		UserService.profile().catch(e => {
		})
			.then(user => {
				if (user)
					this.setState({user: user.name})
			})
	}

	render() {
		return (
			<div>
				{
					this.state.user &&
						<h2>Welcome {this.state.user}</h2>
				}
				<div className="list-group">
					<Link className="list-group-item" to='/decks'>
						Public Decks
					</Link>
					{
						this.state.user &&
							<Link className="list-group-item" to='/mydecks'>
								My Decks
							</Link>
					}
					<Link className="list-group-item" to='/search'>
						Search For Decks
					</Link>
					<Link className="list-group-item" to='/profiles'>
						All Users
					</Link>
					<Link className="list-group-item" to='/lesson/lesson1'>
						Lesson 1: Colors
					</Link>
				</div>
			</div>
		)
	}
}


export default HomeComponent