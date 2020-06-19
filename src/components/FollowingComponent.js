import React from "react";
import UserService from "../services/UserService";

export default class FlashCardEditorComponent extends React.Component {

    state = {
        user: "", 
		following: []
    }
    
    componentDidMount() {
        UserService.profile().catch(e => {
		})
			.then(user => {
                if (user == null) {
                    return; 
                }
                console.log("user"); 
                console.log(user.name); 
				this.setState({user: user.name})
            })
        UserService.following().then(res => {
            console.log("following"); 
            console.log(res); 
            this.setState({following: res});
        })
    }

    render() { 
        if (this.state.user == "") {
            return <div></div>
        }
        return <div>
        <h3>Hello {this.state.user}, you are following: </h3>
        <table style={{width:'100%'}}>
        <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                </tr>
        {
            this.state.following.map(followed =>
                <tr>
                <td>{followed.name}</td>
                <td>{followed.username}</td>
                <td>{followed.role}</td>
                </tr>)
        }
        </table>
        </div>
    }
}