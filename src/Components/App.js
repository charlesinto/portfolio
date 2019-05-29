import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import "./Resources/app.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default App;