import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () =>
  <div>
    <div className="list-group">
      <br /><h3>Learn French Home</h3>
      <Link className="list-group-item" to='/decks'>
        Decks
      </Link>
      <Link className="list-group-item" to='/prototype'>
        Prototype
      </Link>
      <br /><h3>Lessons</h3>
      <Link className="list-group-item" to='/lesson1'>
        Lesson 1
      </Link>
    </div>
  </div>

export default HomeComponent