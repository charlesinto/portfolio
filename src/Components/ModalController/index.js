import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import InnerModal from "./InnerModal";
import Modal from "./Modal";

class ModalController extends Component {
    renderModal() {

        return this.props.modal ? (
            <InnerModal>
                <Modal />
            </InnerModal>
        ) : null
    }
    render() {
        return (
            ReactDOM.createPortal(this.renderModal(), document.querySelector('#modal'))
        );
    }
}

const mapStateToProps = state => {
    const { modalState: { modal } } = state;
    return {
        modal
    }
}

export default connect(mapStateToProps)(ModalController);
