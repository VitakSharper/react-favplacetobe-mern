import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import Users from "./users/pages/UsersPage.component";

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Users}/>
                <Route path='/users' component={Users}/>
                <Redirect to='/'/>
            </Switch>
        </>
    );
}

export default App;
