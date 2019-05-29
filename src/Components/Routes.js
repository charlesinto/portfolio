import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from "./HOC/Layout";
import Home from "./Home";

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;