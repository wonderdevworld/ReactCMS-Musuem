import React, {Component} from 'react';
import {connect} from 'react-redux';
import { 
    addProgram,
    addingProgramInputFieldOnChange
} from '../actions';
import Header from '../components/Header';
import requireAuth from '../components/requireAuth';

class ProgramToAdd extends Component {
    state = {
        titleError: false,
        pictureError: false,
        descError: false,
        priceError: false,
        timeError: false,
        memberInfoError: false,
        registrationError: false
    }

    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.addingProgramInputFieldOnChange(name, text);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const programData = {
            title: this.props.title,
            picture: this.props.picture,
            description: this.props.description,
            price: parseInt(this.props.price),
            time: this.props.time,
            memberInfo: this.props.memberInfo,
            registrationLink: this.props.registrationLink
        }
        // Client Side Form Validation
        if (!this.props.title) {
            this.setState({ titleError: true });
            return
        } else {
            this.setState({ titleError: false });
        }
        if (!this.props.picture || !this.props.picture.startsWith('https')) {
            this.setState({ pictureError: true });
            return
        }else {
            this.setState({ pictureError: false });
        }
        if (!this.props.price) {
            this.setState({ priceError: true });
            return
        } else {
            this.setState({ priceError: false });
        }
        if (!this.props.description) {
            this.setState({ descError: true });
            return
        } else {
            this.setState({ descError: false });
        }
        if (!this.props.time) {
            this.setState({ timeError: true });
            return
        } else {
            this.setState({ timeError: false });
        }
        if (!this.props.memberInfo) {
            this.setState({ memberInfoError: true });
            return
        } else {
            this.setState({ memberInfoError: false });
        }
        if (!this.props.registrationLink || !this.props.registrationLink.startsWith('https')) {
            this.setState({ registrationError: true });
            return 
        } else {
            this.setState({ registrationError: false });
        }

        this.props.addProgram(programData);
        this.props.history.go(-1);
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">Add a Program</h1>
                    <div className="formCard">
                        <form
                            className="formCard__form" 
                            onSubmit={this.handleFormSubmit} >
                            <div className="formCard__formGroup">
                                <label className="label">Title</label>
                                <input
                                    className={!this.state.titleError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.title}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.titleError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a title</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Picture</label>
                                <input
                                    className={!this.state.pictureError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.picture}
                                    name='picture'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.pictureError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a link from cloudinary starting with 'https'</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Price</label>
                                <input
                                    className={!this.state.priceError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.price}
                                    name='price'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.priceError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a price</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Description</label>
                                <textarea
                                    className={!this.state.descError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.description}
                                    name='description'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.descError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a description</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Time</label>
                                <input
                                    className={!this.state.timeError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.time}
                                    name='time'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.timeError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter time information</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Member Information</label>
                                <input
                                    className={!this.state.memberInfoError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.memberInfo}
                                    name='memberInfo'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.memberInfoError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter member information</div>
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Registration Link</label>
                                <input
                                    className={!this.state.registrationError ? 'formCard__formInput' : 'formCard__error'}
                                    value={this.props.registrationLink}
                                    name='registrationLink'
                                    onChange={this.handleInputs}
                                />
                                <div className={this.state.registrationError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a cloudinary link beginning with 'https'</div>
                            </div>
                            <div className="formCard__formGroup">
                                <input className='audioLinkBtn' type='submit' value='Submit'/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.addingPrograms.title,
        picture: state.addingPrograms.picture,
        description: state.addingPrograms.description,
        price: state.addingPrograms.price,
        time: state.addingPrograms.time,
        memberInfo: state.addingPrograms.memberInfo,
        registrationLink: state.addingPrograms.registrationLink
    }
}

export default requireAuth(connect(mapStateToProps, { 
    addProgram,
    addingProgramInputFieldOnChange 
})(ProgramToAdd));