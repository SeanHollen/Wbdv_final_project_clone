import React from "react";
import { Link } from "react-router-dom";
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
          this.setState({ user: user.name })
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
          <Link className="list-group-item" to='/lesson/example'>
            Lesson Example
					</Link>
        </div>
        <br />
        <p>
          Welcome!
        </p>
        <p>
          You can peruse decks, and find them with the search function. You can view decks as flashcards, and also take lessons on them.
        </p>
        <p>
          When you log in you can add public Decks to your decks, and edit your decks. You can also follow users!
        </p>
      </div>
    )
  }
}


export default HomeComponent