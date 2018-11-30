import React, {Component} from 'react';
import Header from '../components/Header';

export default class Root extends Component {
    render() {
        return (
             <div className="wrapper">
                <Header />
                <section className="content">
                    <h1 className="content__title">Mobile App Content Management Service</h1>
                    <div className="content__choices">
                    </div>
                </section>
            </div>
        );
    }
}