import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import AppLayout from './AppLayout';
import './static/styles/main.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <AppLayout />
            </Router>
    );
    }
}

export default App;
