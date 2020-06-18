import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class ProfileListComponent extends React.Component{
	state = {
		users: [],
	}

	componentDidMount() {
		UserService.findAllUsers().then(users => {
			this.setState({users: users})
		})
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