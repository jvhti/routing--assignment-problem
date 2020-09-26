import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Page404 from "./components/Page404/Page404";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <ol style={{textAlign: 'left'}}>
    //       <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
    //       <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
    //       <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
    //       <li>Pass the course ID to the "Course" page and output it there</li>
    //       <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
    //       <li>Load the "Course" component as a nested component of "Courses"</li>
    //       <li>Add a 404 error page and render it for any unknown routes</li>
    //       <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
    //     </ol>
    //   </div>
    // );
    return (
        <Router>
          <div>
            <header>
              <nav className="navbar">
                <ul>
                  <li><NavLink to="/users">Users</NavLink></li>
                  <li><NavLink to="/courses">Courses</NavLink></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/users" component={Users}/>
              <Route path="/courses" component={Courses}/>
              <Redirect from="/all-courses" to="/courses"/>
              <Route component={Page404}/>
            </Switch></div>
        </Router>
    );
  }
}

export default App;
