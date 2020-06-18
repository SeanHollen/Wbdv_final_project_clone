import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () =>
  <div>
    <div className="list-group">
      <Link className="list-group-item" to='/decks'>
        Decks
      </Link>
      <Link className="list-group-item" to='/prototype'>
        Prototype
      </Link>
      <Link className="list-group-item" to='/lesson/lesson1'>
        Lesson 1: Colors
      </Link>
    </div>
  </div>

export default HomeComponent