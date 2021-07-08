import React, {Component} from 'react';
import '../../styles/RecommendationModal.css';
import '../../styles/Recommendation.css';
import axios from 'axios';
import {  getImdbId, getDirectorOrWriter, getImdbScore, createTag } from '../common/common.jsx';


class RecommendationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: null
        };
    }

    render() {
        return (
            <div>
                <p className="loadingmessage">{this.state.isFetching ? 'Fetching metadata...' : ''}</p>
                {(() => { 
                    if (this.state.data !== null && this.state.isFetching === false) {
                        const filmData = this.state.data;

                        return (<div>
                                    <h1 className="header">{this.props.props.title}</h1>
                                    <div className="poster-div">
                                        <a href={this.props.props.imdbLink} target="_blank" rel="noopener noreferrer">
                                            <img className="poster" src={filmData.Poster} alt="poster" />
                                        </a>
                                    </div>
                                    <div className="information-div">
                                        <p className="info">{getDirectorOrWriter(filmData)}</p>
                                        <p className="info">IMDb Rating: {getImdbScore(filmData.Ratings)}</p>
                                        <p className="info">Language: {this.props.props.language}</p>
                                        <p className="info">Runtime: {filmData.Runtime}</p>
                                        <p className="tags-header">Tags:</p>
                                        {this.props.props.tags.map((tag) => (
                                            createTag(tag, this.props.props.title)
                                        ))}
                                    </div>
                            </div>)
                    }
                })()}
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecommendations();
    }

    async fetchRecommendationsAsync() {
        const imdbId = getImdbId(this.props.props.imdbLink);

        const options = {
            method: 'get',
            url: `https://www.omdbapi.com/?i=${imdbId}&apiKey=15d1860`,
            headers: { 'Content-Type': 'application/json' },
            transformRequest: [(data) => {
              return data;
            }]
        };

        try {
            this.setState({isFetching: true});
            const response = await axios(options);
            this.setState({data: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    };

    fetchRecommendations = this.fetchRecommendationsAsync;
}

export default RecommendationModal;