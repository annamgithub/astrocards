import React from 'react';
import CardMakerDisplay from './CardMakerDisplay';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowCards from './ShowCards';

const Nav = () => (
  <Router>
    <div className="nav">
      <ul>
        <li>
        <div>
          <Link to="/">Play Cards </Link>
        </div>
        </li>
        <li>
          <div>
          <Link to="/create">Make or Edit Cards</Link>
          </div>
        </li>
      </ul>

      <Route exact path="/" component={ShowCards} />
      <Route path="/create" component={CardMakerDisplay} />
    </div>
    </Router>
)

export default Nav;