import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
  <div>
    <h2>Learn French Home</h2>
    <div className="list-group">
      <Link className="list-group-item" to='/deck'>
        Deck
      </Link>
      <Link className="list-group-item" to='/prototype'>
        Prototype
      </Link>
    </div>
  </div>

export default HomeComponent