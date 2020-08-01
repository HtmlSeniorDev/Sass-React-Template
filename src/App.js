import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './AppLayout';
import './static/styles/main.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
    );
    }
}

export default App;
