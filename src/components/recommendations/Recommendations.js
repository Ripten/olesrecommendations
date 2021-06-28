import React, {Component} from 'react';
import '../../styles/Media.css';
import '../../styles/Questionnaire.css';
import '../../styles/RecommendationModal.css'
import {  getTitle, getRecommendations } from '../common/common.jsx';
import Recommendation from './Recommendation.js';
import Modal from './Modal.js'


class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            show: false, 
            films: []
        };
    }

    showModal = (newData) => {
        this.setState({ show: true, data: newData });
    }
  
    hideModal = () => {
        this.setState({ show: false, data: '' });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} data={this.state.data} ></Modal>
                {(() => { 
                    if (this.state.films.length > 0 && this.state.films.length < 21)
                        return <div>
                            {this.state.films.map((film) => (
                                <div key={film.title}>
                                    <Recommendation props={film} />
                                </div>
                            ))}
                        </div>
                    else if (this.state.films.length > 20)
                        return <div className="table-content">
                        <table align="center">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.films.map((film) => (
                                <tr key={film.title} className="tr-clickable" onClick={() => this.showModal(film)}>
                                    {getTitle(film)}
                                    <td>{film.year}</td>
                                    <td>{film.language}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    else
                        return <p>No recommendations match your filters. Click the banner to start over.</p>
                })()}
                <p>{this.state.isFetching ? 'Loading...' : ''}</p>
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecommendations();
    }

    async fetchRecommendationsAsync() {
        const recommendations = getRecommendations(this.props.filmRequest);
        this.setState({films: recommendations});
    };

    fetchRecommendations = this.fetchRecommendationsAsync;
}

export default Recommendations;