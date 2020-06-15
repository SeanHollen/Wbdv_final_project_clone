import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import DeckContainer from '../containers/DeckContainer';
import PrototypeComponent from '../prototype/PrototypeComponent';
import FlashCardEditorComponent from './FlashCardEditorComponent';
import LoginComponent from './LoginComponent'; 
import ProfileComponent from './ProfileComponent'; 

class LearnFrenchComponent extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1></h1>

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/deck'
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
            component={LoginComponent} />

          <Route
            path='/profile'
            component={ProfileComponent} />

        </div>
      </BrowserRouter>
    )
  }
}

export default LearnFrenchComponent