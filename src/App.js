

import './App.css';
import React from "react";
import Home from "./Component/Home";
import { Rooms } from './Component/Rooms';
import SingleRoom from './Component/SingleRoom';
import Error from './Component/Error';


import { Route, Switch } from 'react-router-dom'

import Navbar from "./Component/Navbar";


function App() {
    return (
        <>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
