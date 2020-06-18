import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () =>
  <div>
    <div className="list-group">
      <Link className="list-group-item" to='/decks'>
        Public Decks
      </Link>
      <Link className="list-group-item" to='/profiles'>
        All Users
      </Link>
      <Link className="list-group-item" to='/lesson/lesson1'>
        Lesson 1: Colors
      </Link>
    </div>
  </div>

export default HomeComponent