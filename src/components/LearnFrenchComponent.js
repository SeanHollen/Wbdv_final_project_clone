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
import ProfileListComponent from "./ProfileListComponent";
import SearchComponent from "./SearchComponent";

class LearnFrenchComponent extends React.Component {
	render() {
		return (
			<BrowserRouter>
        <div>
        <br></br>
          <img style={{height: '50px', width: '900px', 'margin-left': 'auto', 'margin-right': 'auto', display: 'block'}}
          src="https://alexoloughlinintensestudy.files.wordpress.com/2015/11/french-flag-banner.jpg?w=848"></img>
					<nav className="navbar">
						<div>
							<a className="navbar-brand">Learn French by Google Translate</a>
						</div>
						<div>
							<Link to='/'>
								<button className="btn btn-light">Home</button>
							</Link>
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
						exact={true}
						component={ProfileComponent}/>

					<Route
						path='/students'
            component={StudentTableComponent}/>

					<Route
						path='/profiles'
						exact={true}
						component={ProfileListComponent}/>

					<Route
						path='/profile/:profileId'
						exact={true}
						component={ProfileListComponent}/>

          <Route
						path='/lesson/:lessonId'
            component={LessonComponent}/>

					<Route
						path='/search/:keyword'
						exact={true}
						component={SearchComponent}/>

					<Route
						path='/search'
						exact={true}
						component={SearchComponent}/>

					<Route
						path='/details/:deckId'
						exact={true}
						component={DeckContainer}/>

				</div>
			</BrowserRouter>
		)
	}
}

export default LearnFrenchComponent