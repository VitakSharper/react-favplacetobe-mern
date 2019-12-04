import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import Users from "./users/pages/UsersPage.component";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation.component";

function App() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route exact path='/' component={Users}/>
                    <Route path='/users' component={Users}/>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </>
    );
}

export default App;
