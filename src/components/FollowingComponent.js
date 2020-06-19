import React from "react";
import UserService from "../services/UserService";

export default class FlashCardEditorComponent extends React.Component {

    state = {
        user: "abc", 
		    following: []
    }
    
    componentDidMount() {
        UserService.profile().catch(e => {
		})
			.then(user => {
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

    render() { return <div>
        <h3>Hello {this.state.user}, you are following: </h3>
        {
            this.state.following.map(user =>
                <div>{user.name}</div>)
        }
        </div>
    }
}