import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import DeckContainer from '../containers/DeckContainer';
import PrototypeComponent from '../prototype/PrototypeComponent';
import FlashCardEditorComponent from './FlashCardEditorComponent';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import MyDeckListComponent from './MyDeckListComponent'
import RegisterComponent from './RegisterComponent';
import {Link} from "react-router-dom";
import StudentTableComponent from "./StudentTableComponent";
import PublicDeckListComponent from "./PublicDeckListComponent";
import LessonComponent from "./LessonComponent";

class LearnFrenchComponent extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className="navbar">
						<div>
							<a className="navbar-brand">Learn French by Google Translate</a>
						</div>
						<div>
							<Link to='/login'>
								<button className="btn btn-light">Login</button>
							</Link>
							<Link to='/register'>
								<button className="btn btn-light">Register</button>
							</Link>
							<Link to='/profile'>
								<button className="btn btn-light">Profile</button>
							</Link>
						</div>
					</nav>

					<Route
						path='/'
						exact={true}
						component={HomeComponent}
					/>

					<Route
						path='/decks'
						exact={true}
						component={PublicDeckListComponent}/>

					<Route
						path='/mydecks'
						exact={true}
						component={MyDeckListComponent}/>

					<Route
						path='/decks/:deckId'
						exact={true}
						component={DeckContainer}/>

					<Route
						path='/prototype'
						exact={true}
						component={PrototypeComponent}/>

					<Route
						path='/editor'
						component={FlashCardEditorComponent}/>

					<Route
						path='/login'
						component={LoginComponent}/>

					<Route
						path='/register'
						component={RegisterComponent}/>

					<Route
						path='/profile'
						component={ProfileComponent}/>

					<Route
						path='/students'
            component={StudentTableComponent}/>

          <Route
						path='/lesson/:lessonId'
            component={LessonComponent}/>

				</div>
			</BrowserRouter>
		)
	}
}

export default LearnFrenchComponent