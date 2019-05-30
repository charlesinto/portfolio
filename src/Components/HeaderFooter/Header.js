import React, { Component} from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid';
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../Actions";

class Header extends Component {
    state = {
        toggleMenu: false
    }
    renderIcon() {
        return this.state.toggleMenu ? <IconButton onClick={() => this.handleOnclick()}>
            <FontAwesomeIcon
                icon={faTimes}
                style={{ color: '#fff', fontSize: '24px' }}
            />
        </IconButton> :
            <IconButton onClick={() => this.handleOnclick()}>
                <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: '#fff', fontSize: '24px' }}
                />
            </IconButton>
    }
    handleOnclick() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        }, () => this.props.toggleModal())
    }
    render() {
        return (
            <div className="container-fluid header">
                <div className="wrapper" style={{ marginRight: '24px', marginTop: '24px' }}>
                    {this.renderIcon()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, actions)(Header);