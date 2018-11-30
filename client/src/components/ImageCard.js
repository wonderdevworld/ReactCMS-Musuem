import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    imgEditingDisabled, 
    imgLinkOnChange, 
    // imgLinkUpdating, 
    fetchFloor,
    linkUpdating,
    // deleteImg
} from '../actions';

class ImageCard extends Component {
    state = {
        editDisabled: false,
        imgError: false
    };

    toggleImgInputFields = () => {
        this.setState({editDisabled: true})
    }

    handleImgLinkUpdate = event => {
        const link = event.target.value;
        this.props.imgLinkOnChange(link)
    }

    removeImg = () => {
        const itemToBeDeleted = this.props.img;
        console.log(itemToBeDeleted);
        this.props.linkUpdating(null, null, itemToBeDeleted, null, null, this.props.floorNum);

        this.props.fetchFloor(this.props.floorNum);
    }

    submitImgLinkUpdate = event => {
        event.preventDefault();

        if (!this.props.imgLinkValue || !this.props.imgLinkValue.startsWith('https')) {
            this.setState({ imgError: true });
            return
        } else {
            this.setState({ imgError: false });
            this.props.linkUpdating(null, this.props.imgLinkValue, null, null, this.props.position, this.props.floorNum);
        }

        if (this.props.imgLinkValue !== this.props.img) {
            this.props.fetchFloor(this.props.floorNum);
        }

        this.setState({editDisabled: false});
    }

    render() {
        if (this.state.editDisabled) {
            return (
                <div className="exhibitions__imageCard">
                    <img src={this.props.img} className="exhibitions__imgs"/>
                    <input
                        className={!this.state.imgError ? 'audioInput audioInput--ImageEdit' : 'audioInput__error audioInput--ImageEdit--error'}
                        value={this.props.imgLinkValue}
                        onChange={this.handleImgLinkUpdate}
                        name="imgLinkValue"
                        placeholder="Copy a 'https' cloudinary link"
                    />
                    <div className={this.state.imgError ? 'audioInput__error--msg' : 'audioInput__hidden'}>Please enter a cloudinary link beginning with 'https'</div>
                    <button 
                        className="audioLinkBtn audioLinkBtn--SubmitImage" 
                        onClick={this.submitImgLinkUpdate}
                        >Submit
                    </button>
                </div>
            )
        } else {
            return (        
                <div className="exhibitions__imageCard">
                    <img src={this.props.img} className="exhibitions__imgs"/>
                    
                        <button 
                            className="audioLinkBtn audioLinkBtn--EditImage"
                            onClick={this.toggleImgInputFields}>Edit</button>
                        
                            <svg className="delete__icon" onClick={this.removeImg}>
                                <use xlinkHref="images/sprite.svg#icon-close"></use>
                            </svg>
                        
            
                </div>  
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.floor.fetching,
        fetched: state.floor.fetched,
        error: state.floor.error,
        floor: state.floor.floor,
        imgLinkValue: state.input.imgLinkValue,
        imgEditDisabled: state.input.imgEditDisabled
    }
}

export default connect(mapStateToProps, {
    imgEditingDisabled, 
    imgLinkOnChange, 
    // imgLinkUpdating,
    fetchFloor,
    linkUpdating,
    // deleteImg
})(ImageCard);