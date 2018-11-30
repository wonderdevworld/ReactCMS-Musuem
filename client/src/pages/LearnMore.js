import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchArtistConnectByFloor
} from '../actions';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import requireAuth from '../components/requireAuth';

class LearnMore extends Component {

    componentDidMount() {
        this.props.fetchArtistConnectByFloor(this.props.match.params.floor);
    }

    render() {
        if(!this.props.artistConnect) {
            return <h2>Loading</h2>
        } else {
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Connect with Artist</h1>
                        <div className="articlePictureBox">
                            <img className="articlePicture" src={this.props.artistConnect.picture}/>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Title: {this.props.artistConnect.articleTitle}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Description: {this.props.artistConnect.articleDescription}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Link: {this.props.artistConnect.articleLink}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Social Link: {this.props.artistConnect.socialLink}</h4>
                        </div>
                        <Link 
                            to={'/exhibitionFloor' + this.props.match.params.floor + '/learnMore/' + this.props.artistConnect._id} 
                            className="audioLinkBtn">Edit
                        </Link>
                    </section>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.artistConnect.fetching,
        fetched: state.artistConnect.fetched,
        error: state.artistConnect.error,
        artistConnect: state.artistConnect.artistConnect[0]
    }
}

export default requireAuth(connect(mapStateToProps, { 
    fetchArtistConnectByFloor
})(LearnMore));