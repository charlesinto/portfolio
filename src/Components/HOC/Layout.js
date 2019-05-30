import React, { Component } from 'react';
import Header from "../HeaderFooter/Header";
// import ModalController from "../ModalController";
// import Footer from "../HeaderFooter/Footer";
import ModalController from "../ModalController";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <ModalController />
                {this.props.children}
                {/* <ModalController /> */}
            </div>
        );
    }
}

export default Layout;