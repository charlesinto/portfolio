import React, { Component } from 'react';
import HomePicture from "../Resources/home.jpg";

class Home extends Component {
    render() {
        console.log('here niw w');
        return (
            <div className="container-fluid">
                <div
                    className="home-wrapper-background"
                    style={{
                        background: `url(${HomePicture})`,
                        height: `100vh`,
                        width: `100vw`,

                    }}
                >
                    <div className="home-name-wrapper" style={{ width: '100vw', height: '100vh' }}>
                        <div className="author">
                            <h3>Charles <span className="name-deco"> Onuorah</span></h3>
                            <p className="description-work">Full-stack developer, Programmer, Mobile app developer</p>
                            <div className="social-icons">
                                <div><a href="https://twitter.com/prince_charlex"><i className="fab fa-twitter"></i></a></div>
                                <div><a href="https://www.linkedin.com/in/charles-onuorah-727a01100/"><i className="fab fa-linkedin"></i></a></div>
                                <div><a href="https://www.facebook.com/charles.onuorah1"><i className="fab fa-facebook"></i></a></div>
                                <div><a href="https://www.github.com/charlesinto"><i className="fab fa-github"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;