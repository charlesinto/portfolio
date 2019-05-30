import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../Resources/myphoto.jpg";
import * as actions from "../Actions";

class Modal extends Component {
    onLinkChange(link) {
        this.props.onLinkChange(link)
    }
    render() {
        console.log('this.props', this.props)
        return (
            <div className="container-fluid" style={{ height: '100%' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-sm-6 no-padding">
                        <div className="avatar-container"
                        >
                            <div>
                                <div
                                    style={{
                                        background: `url(${avatar})`,
                                        width: '200px',
                                        height: '200px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        borderRadius: '50%',
                                        border: '2px solid #fff'
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                        <div className="links-container">
                            <div>
                                <nav>
                                    <ul>
                                        <li onClick={() => this.onLinkChange('Home')} className={`${this.props.link === 'Home' ? 'active' : ''}`}><Link to="#">Home</Link></li>
                                        <li onClick={() => this.onLinkChange('My Works')} className={`${this.props.link === 'My Works' ? 'active' : ''}`}><Link to="#">My Works</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { modalState: { modal, link } } = state;
    return {
        modal,
        link
    }
}

export default connect(mapStateToProps, actions)(Modal);