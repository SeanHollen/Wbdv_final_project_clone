import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () =>
  <div>
    <div className="list-group">
      <br /><h3>Learn French Home</h3>
      <Link className="list-group-item" to='/deck'>
        Deck
      </Link>
      <Link className="list-group-item" to='/prototype'>
        Prototype
      </Link>
      <br /><h3>User</h3>
      <Link className="list-group-item" to='/login'>
        Login
      </Link>
      <Link className="list-group-item" to='/profile'>
        Pofile
      </Link>
      <br /><h3>Lessons</h3>
      <Link className="list-group-item" to='/lesson1'>
        Lesson 1
      </Link>
    </div>
  </div>

export default HomeComponent