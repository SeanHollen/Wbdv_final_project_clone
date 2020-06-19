import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class ProfileListComponent extends React.Component{
	state = {
		users: [],
		currentUser: {}
	}

	componentDidMount() {
		UserService.findAllUsers().then(users => {
			this.setState({users: users})
			UserService.profile().catch(e => {})
				.then(user => {
					if (user)
						this.setState({currentUser: user})
				})
		})
	}

	follow(user) {
		UserService.follow(user.id)
	}

	render() {
		return (
			<div>
				<h4>Profiles</h4>
				<ul className="list-group">
					{
						this.state.users.map(user =>
							<div key={user.id}>
								{
									this.props.match.params.profileId != user.id &&
									<Link to={`/profile/${user.id}`} className="list-group-item">
											{user.name}
									</Link>
								}
								{
									this.props.match.params.profileId == user.id &&
										<li className="list-group-item active">
											{
												this.state.currentUser &&
												<a className="btn btn-light text-black-50 float-right" onClick={() => this.follow(user)}>
													Follow
												</a>
											}
											<div>
												<a>
													{user.name}
												</a>
											</div>
											<div>
												<a>
													username: {user.username}
												</a>
											</div>
											<div>
												<a>
													role: {user.role}
												</a>
											</div>
										</li>

								}
							</div>)
					}
				</ul>
			</div>
			)
	}
}

export default ProfileListComponent