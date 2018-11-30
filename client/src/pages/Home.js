import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import requireAuth from '../components/requireAuth';

class Home extends Component {
    render() {
        return(
            <div className="wrapper">
                <Header />
                <section className="content">
                    <h1 className="content__title">Mobile App Content Management Service</h1>
                    <div className="content__choices">
                        <div className="content__btnContainer">
                            <Link to="/exhibitions" className="content__btn">
                                Exhibitions
                            </Link>
                            <Link to="/programs" className="content__btn">
                                Programs
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

export default requireAuth(Home);
