import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import Users from "./users/pages/UserPage/UsersPage.component";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation.component";
import NewPlace from "./places/pages/NewPlacePage/NewPlace.component";
import UserPlaces from "./places/pages/UserPlacesPage/UserPlaces.component";

function App() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route exact path='/' component={Users}/>
                    <Route exact path='/places/new' component={NewPlace}/>
                    <Route exact path='/:userId/places' component={UserPlaces}/>
                    <Route path='/users' component={Users}/>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </>
    );
}

export default App;
