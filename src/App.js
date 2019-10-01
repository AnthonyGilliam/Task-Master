import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeContainer from './components/HomeContainer'
import NewTaskForm from './components/tasks/CreateNewTask'
import './App.css';

function App() {
    return (
        <section className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/create-new-task" component={NewTaskForm} />
          </Switch >
        </section>
    );
}

export default withRouter(App);
