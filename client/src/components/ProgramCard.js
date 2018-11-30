import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProgramCard extends Component {
    render () {
        return(
            <div className="programCard">
                <div className="programCard programCard__Title programText">
                    {this.props.program.title}
                </div>
                <div className="programCard programCard__Img">
                    <img className="programCard__Img--picture" src={this.props.program.picture} alt="program picture" />
                </div>
                <div className="programCard programCard__Price programText">
                    Price: ${this.props.program.price}
                </div>
                <div className="programCard programCard__Description programText">
                    Description: {this.props.program.description}
                </div>
                <div className="programCard programCard__Time programText">
                    Time: {this.props.program.time}
                </div>
                <div className="programCard programCard__MemberInfo programText">
                    Member Information: {this.props.program.memberInfo}
                </div>
                <div className="programCard programCard__RegistrationLink programText">
                    Registration Link: {this.props.program.registrationLink}
                </div>
                <div className="programCard__Buttons">
                    <Link to={`/programs/${this.props.program._id}`} className="audioLinkBtn audioLinkBtn--ProgramBtns">
                        Edit this Program
                    </Link>
                </div>
            </div>
        )
    }
}