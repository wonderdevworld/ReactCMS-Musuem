import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

    renderLinks = () => {
        if (this.props.authenticated) {
            return (
                <ul className="nav__links-ul">
                    <li className="nav__links-li">
                        <Link to="/signout" className="nav__links">
                            Sign Out!
                        </Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="nav__links-ul">
                    <li className="nav__links-li">
                        <Link to="/signup" className="nav__links">
                            Sign Up!
                        </Link>
                    </li>
                    <li className="nav__links-li">
                        <Link to="/signin" className="nav__links">
                            Sign In!
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
        <header className="header">
            <nav className="nav">
                <Link to="/home" className="nav__homePageLink">
                    <h2 className="nav__title">The Craft and Folk Art Museum</h2>
                </Link>
                <div className="nav__space-box"></div>
                <div className="nav__links-box">
                    {this.renderLinks()}
                </div>
            </nav>
        </header>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated};
};

export default connect(mapStateToProps)(Header);