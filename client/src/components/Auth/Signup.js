import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
// compose allows for multiple HOC
import {compose} from 'redux';
import {connect} from 'react-redux';
// import * as actions from '../../actions';
import * as actions from '../../actions';
import Header from '../Header';

class Signup extends Component {
    onSubmit = (formProps) => {
        // console.log(formProps);
        this.props.signup(formProps, () => {
                this.props.history.push('/home');
            });
    };

    render() {
        // provided by redux from, destructure
        const {handleSubmit} = this.props;
        console.log(this.props);

        return (
            <div className="wrapper">
                <Header />
                <section className="content">
                    <h1 className="content__title">Mobile App Content Management Service</h1>
                    <div className="content__choices center">
                        <form className="formCard__auth" onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset className="formCard__formGroup--auth">
                                <label className="label--auth">Email</label>
                                <Field className="formCard__formInput--auth" name="email" type="text" component="input" autoComplete="none"/>
                            </fieldset>
                            <fieldset className="formCard__formGroup--auth">
                                <label className="label--auth">Password</label>
                                <Field className="formCard__formInput--auth" name="password" type="password" component="input" autoComplete="none"/>
                            </fieldset>
                            <div className="errorMessage">
                                {this.props.errorMessage}
                            </div>
                            <button className="exhibitions__btn">Sign Up!</button>
                        </form>
                        </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(connect(mapStateToProps, actions), reduxForm({form: 'signup'}))(Signup);