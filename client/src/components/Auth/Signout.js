import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../Header';

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <section className="content">
                    <h1 className="content__title">Mobile App Content Management Service</h1>
                    <div className="content__choices center">
                        <h3 className="heading__3">Goodbye!</h3>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(null, actions)(Signout);