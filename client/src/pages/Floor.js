import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchFloor, 
    imgEditingDisabled,
    editingDisabled, 
    audioLinkOnChange, 
    linkUpdating,
    pushingImgsIntoGallery,
    imgToPushOnChange,
    coverImgOnChange
} from '../actions';
import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import {Link} from 'react-router-dom';
import requireAuth from '../components/requireAuth';

class Floor extends Component {
    state = {
        editDisabled: false,
        imgEditDisabled: false,
        audioLinkError: false,
        coverImgError: false,
        addImageError: false
    };

    componentDidMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
        this.props.editingDisabled(false);
    }

    toggleInputFields = () => {
        this.props.editingDisabled(true);
    }

    toggleImgFlag = () => {
        this.setState({ imgEditDisabled: true });
    }

    handleAudioLinkUpdate = event => {
        const value = event.target.value;
        this.props.audioLinkOnChange(value)
    }

    handlePushingImgLink = event => {
        const value = event.target.value;
        this.props.imgToPushOnChange(value);
    }

    handleConverImgUpdate = event => {
        const text = event.target.value;
        this.props.coverImgOnChange(text);
    }

    submitCoverImgUpdate = event => {
        event.preventDefault();
        const floor = parseInt(this.props.match.params.floor);

        if (!this.props.coverImgValue || !this.props.coverImgValue.startsWith('https')) {
            this.setState({ coverImgError: true });
            return;
        } else {
            this.setState({ coverImgError: false });
            this.props.linkUpdating(null, null, null, this.props.coverImgValue, null, floor);
        }

        if (this.state.imgEditDisabled) {
            this.props.fetchFloor(floor);
            this.setState({ imgEditDisabled: false });
        }
    }

    submitAudioLinkUpdate = event => {
        event.preventDefault();
        const floor = parseInt(this.props.match.params.floor);

        if (!this.props.audioLinkValue || !this.props.audioLinkValue.startsWith('https')) {
            this.setState({ audioLinkError: true });
            return;
        } else {
            this.setState({ audioLinkError: false });
            this.props.linkUpdating(this.props.audioLinkValue, null, null, null, null, floor);
        }

        if (this.props.audioLinkValue !== this.props.floor.audioLink) {
            this.props.fetchFloor(floor);
        }
        this.props.editingDisabled(false);        
    }

    renderCoverImgEditField = () => {
        if (!this.state.imgEditDisabled) {
            return <button className="audioLinkBtn" onClick={this.toggleImgFlag}>Edit</button>
        } else {
            return (
                <div className="formCard__formGroup formCard__formGroup--coverImg">
                    <label className="label">Insert New Cover Image URL</label>
                    <input
                        className={!this.state.coverImgError ? 'formCard__formInput formCard__formInput--coverImg' : 'formCard__error'}
                        value={this.props.coverImgValue}
                        name='title'
                        onChange={this.handleConverImgUpdate}
                    />
                    <div className={this.state.coverImgError ? 'formCard__error--msg' : 'formCard__hidden' }>Please enter a cloudinary link beginning with 'https'</div>
                    <button className="audioLinkBtn audioLinkBtn--coverImg" onClick={this.submitCoverImgUpdate}>Submit</button>
                </div>
            );
        }
    }

    renderAudioLinkEditingField = () => {
        if (this.props.editDisabled) {
            return (
                <div className="exhibitions__inputBox">
                    <div className="audioTextEditing">
                        <h4 className="heading__4">Audio Link:</h4>
                        <input 
                            type="text"
                            className={!this.state.audioLinkError ? 'audioInput' : 'audioInput__error'}
                            value={this.props.audioLinkValue}
                            onChange={this.handleAudioLinkUpdate}
                            name="audioLinkValue"
                            placeholder="Please enter a https://www.cloudinary.com/ image"
                        />
                        <div className={this.state.audioLinkError ? 'audioInput__error--msg' : 'audioInput__hidden'}>Please enter a cloudinary link beginning with 'https'</div>
                    </div>
                    <button 
                        className="audioLinkBtn" 
                        onClick={this.submitAudioLinkUpdate}
                        >Submit
                    </button>
                </div>
            )
        } else {
            return (
            <div className="exhibitions__inputBox">
                <div className="audioTextBeforeEditing">
                    <h4 className="heading__4">Audio Link:</h4>
                    <h4 className="heading__4 audioTitle">{this.props.floor.audioLink}</h4>
                </div>
                <button 
                    className="audioLinkBtn" 
                    onClick={this.toggleInputFields}
                    >Edit
                </button>
            </div>
            )
        }
    }

    renderImgGallery = () => {
        const floor = parseInt(this.props.match.params.floor);
        const floorInfoArray = this.props.floor.floorGallery;
        console.log(floorInfoArray);
        if (!floorInfoArray) {
            return <h2>Loading</h2>
        } else {
        return (
            <div className="exhibitions__imageCardArea">
                {floorInfoArray.map((img, i) => { 
                    return (
                        <ImageCard 
                            key={i} 
                            img={img}
                            position={i} 
                            floorNum={floor}
                        /> 
                    )}
                )}
            </div>
        )
        }
    }

    renderImgTitleArea = () => {
        if (this.state.editDisabled) {
            return (
                <div className="exhibitions__imageTitleArea">
                    <h4 className="heading__4">Image Gallery</h4>
                    <input 
                        value={this.props.imgToPushValue}
                        onChange={this.handlePushingImgLink}
                        name="pushedImgLinkValue"
                        placeholder="Copy a cloudinary link beginning with 'https'"
                        className={!this.state.addImageError ? 'audioInput' : 'audioInput__error'}
                    />
                    <div className={this.state.addImageError ? 'audioInput__error--msg' : 'audioInput__hidden'}>Please enter a cloudinary link beginning with 'https'</div>
                    <button 
                        className="audioLinkBtn audioLinkBtn--AddImage"
                        onClick={this.submitImage}>Submit Image</button>
                </div>
            );
        } else {
            return (
                <div className="exhibitions__imageTitleArea">
                    <h4 className="heading__4">Image Gallery</h4>
                    <button 
                        className="audioLinkBtn audioLinkBtn--AddImage"
                        onClick={this.addImage}>Add an Image</button>
                </div>
            );
        }
    }

    addImage = () => {
        this.setState({editDisabled: true});
    }

    submitImage = event => {
        event.preventDefault();
        const floor = parseInt(this.props.match.params.floor);

        if(!this.props.imgToPushValue || !this.props.imgToPushValue.startsWith('https')) {
            this.setState({ addImageError: true })
            return;
        } else {
            this.setState({ addImageError: false });
            this.props.pushingImgsIntoGallery(this.props.imgToPushValue, floor);
        }

        if (this.state.editDisabled) {
            this.props.fetchFloor(floor);
            this.setState({editDisabled: false});
        }
    }

    renderFloorInformation = () => {
        const floorInformation = this.props.floor;
        if (!floorInformation) {
            return(
                <div className="exhibitions">
                    <h2 className="exhibitions__title heading__2">Loading</h2>
                </div>
            )
        } else {
            return(
                <div className="exhibitions">
                    <h2 className="exhibitions__title exhibitions__title--floorTitle heading__2">Floor {floorInformation.floor}</h2>
                    <div className="exhibitions__floor-container">
                        <div className="exhibitions__coverImgContainer">
                            <img className="exhibitions__coverImg" src={floorInformation.coverPic} alt='floor 1 app pic' />
                            {this.renderCoverImgEditField()}
                        </div>
                        {this.renderAudioLinkEditingField()}
                        <div className="exhibitions__galleryArrayImageHolder">
                            {this.renderImgTitleArea()}
                            {this.renderImgGallery()}
                        </div>
                        <div className="exhibitions__learnMoreSection">
                            <h4 className="heading__4 heading__LearnMore">Learn More Page</h4>
                            <Link to={'/exhibitionFloor' + this.props.match.params.floor + '/learnMore'} className="audioLinkBtn audioLinkBtn--connect">
                                View Connect with the Artist
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                {this.renderFloorInformation()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        fetching: state.floor.fetching,
        fetched: state.floor.fetched,
        error: state.floor.error,
        floor: state.floor.floor,
        editDisabled: state.input.editDisabled,
        audioLinkValue: state.input.audioLinkValue,
        imgLinkValue: state.input.imgLinkValue,
        imgEditDisabled: state.input.imgEditDisabled,
        imgToPushValue: state.input.imgToPushValue,
        coverImgValue: state.input.coverImgValue
    }
}

export default requireAuth(connect(mapStateToProps, { 
    fetchFloor, 
    imgEditingDisabled,
    editingDisabled,
    audioLinkOnChange,
    linkUpdating,
    pushingImgsIntoGallery,
    imgToPushOnChange,
    coverImgOnChange
})(Floor));
