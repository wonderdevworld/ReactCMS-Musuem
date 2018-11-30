import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPrograms} from '../actions';
import Header from '../components/Header';
import ProgramCard from '../components/ProgramCard';
import {Link} from 'react-router-dom';
import requireAuth from '../components/requireAuth';

class Programs extends Component {
    componentDidMount = () => {
        this.props.fetchPrograms();
    }

    renderPage = () => {
        let programs = this.props.programs;
        if (!programs) {
           return <h2>Loading Programs... please wait</h2>
        } else {
            console.log(programs);
            return(
                <div className="programs__container">
                    {programs.map((program, i) => {
                        return (
                        <ProgramCard 
                            key={i}
                            program={program} />
                        )
                    })}
                </div>
           );
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">Current Programs</h1>
                    <Link to="/programs/toAdd" className="audioLinkBtn audioLinkBtn--AddProgram">
                            Add a Program
                    </Link>
                    {this.renderPage()}
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.programs.fetching,
        fetched: state.programs.fetched,
        error: state.programs.error,
        programs: state.programs.programs
    }
}

export default requireAuth(connect(mapStateToProps, { fetchPrograms })(Programs));