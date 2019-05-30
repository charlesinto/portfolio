import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import "./Resources/app.css";

import Reducers from "./Reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

class App extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(Reducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
            >
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;