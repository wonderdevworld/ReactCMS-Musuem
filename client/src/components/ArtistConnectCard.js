// render() {
//         // console.log('number 2', this.props);

//         if (!this.props.artistConnect) {
//             return <h2>Loading</h2>
//         } else {
//             return (
//                 <div className="wrapper">
//                         <Header/>
//                         <section className="exhibitions">
//                             <h1 className="exhibitions__title">Connect with Artist</h1>
//                             <div className="formCard">
//                             <form 
//                                 className="formCard__form"
//                                 onSubmit={this.handleFormSubmit}>
//                                 <div className="formCard__formGroup">
//                                     <label className="label">Article Title:</label>
//                                     <input
//                                         className="formCard__formInput"
//                                         value={this.props.artistConnect.articleTitle}
//                                         name='article title'
//                                         onChange={this.handleInputs}
//                                     />
//                                 </div>
//                                 <div className="formCard__formGroup">
//                                     <label className="label">Picture:</label>
//                                     <input
//                                         className="formCard__formInput"
//                                         value={this.props.artistConnect.picture}
//                                         name='article picture'
//                                         onChange={this.handleInputs}
//                                     />
//                                 </div>
//                                 <div className="formCard__formGroup">
//                                     <label className="label">Article Description:</label>
//                                     <textarea
//                                         className="formCard__formInput"
//                                         value={this.props.artistConnect.articleDescription}
//                                         name='article description'
//                                         onChange={this.handleInputs}
//                                     />
//                                 </div>
//                                 <div className="formCard__formGroup">
//                                     <label className="label">Article Link:</label>
//                                     <input
//                                         className="formCard__formInput"
//                                         value={this.props.artistConnect.articleLink}
//                                         name='article link'
//                                         onChange={this.handleInputs}
//                                     />
//                                 </div>
//                                 <div className="formCard__formGroup">
//                                     <label className="label">Social Link:</label>
//                                     <input
//                                         className="formCard__formInput"
//                                         value={this.props.artistConnect.socialLink}
//                                         name='social link'
//                                         onChange={this.handleInputs}
//                                     />
//                                 </div>
//                                 <div className="formCard__formGroup">
//                                     <input className='audioLinkBtn' type='submit' value='Submit'/>
//                                 </div>
//                             </form>
//                         </div>
//                         </section>
//                     </div>
//             );
//         }
//     }