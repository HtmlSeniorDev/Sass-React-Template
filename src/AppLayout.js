import React from 'react';
import {Switch, Route} from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import './static/styles/main.scss';

export default function AppLayout() {
    return (
        <div className='App'>
            <Header/>
            <Switch>
                <Route  exact path='/' render={() => {return <Home/>}}/>
            </Switch>
            <Footer/>
        </div>
    )

}
