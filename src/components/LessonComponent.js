import React from "react";
import UserService from "../services/UserService";

export default class LoginComponent extends React.Component {

	state = {
        words: [
            {
                english: "hello", 
                image: "", 
            }
        ], 
        status: "correct"
	}

	render() {
        return <div class="container">
        <h3>{this.props.match.params.lessonId}</h3>
        
        <button className="btn btn-dark">Next</button>
        </div>
        
    }
};