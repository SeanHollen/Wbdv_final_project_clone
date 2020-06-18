import React from "react";
import UserService from "../services/UserService";

export default class LoginComponent extends React.Component {

	state = {
        words: [
            {
                english: "hello", 
                image: "", 
            }, 
            {
                english: "goodbye", 
                image: "", 
            }
        ], 
        currentQuestionNum: 0, 
        answered: false,
        correct: true
    }
    
    increment() {
        if (this.state.currentQuestionNum < this.state.words.length - 1) {
            this.setState({currentQuestionNum: this.state.currentQuestionNum + 1}); 
        } else {
            this.setState({currentQuestionNum: 0}); 
        }
        this.setState({answered: false}); 
    }

	render() {
        return <div class="container">
        <p>{this.props.match.params.lessonId}</p>
        <h3>{this.state.words[this.state.currentQuestionNum].english}</h3>
        <button className="btn btn-dark" 
        onClick={() => this.increment()}>
        Next</button>
        </div>
        
    }
};