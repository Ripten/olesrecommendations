import React, {Component} from 'react';
import '../../styles/RecommendationModal.css';
import axios from 'axios';


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
                <p>{this.state.isFetching ? 'Fetching recommendations...' : ''}</p>
                {(() => { 
                    if (this.state.data !== null && this.state.isFetching === false) {
                        const filmData = this.state.data;

                        return (<div>
                                    <h1 className="header">{filmData.Title}</h1>
                                    <div className="poster-div">
                                        <a href={this.props.props.imdbLink}>
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
                                            createTag(tag)
                                        ))}
                                        {this.props.props.tags.map((tag) => (
                                            createTag(tag)
                                        ))}
                                        {this.props.props.tags.map((tag) => (
                                            createTag(tag)
                                        ))}
                                        {this.props.props.tags.map((tag) => (
                                            createTag(tag)
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
        console.log(this.props.props);

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
function getImdbId(imdbLink) {
    var urlString = String(imdbLink);
    return urlString.slice(27).replace('/', '');
}

function getImdbScore(ratings) {
    var score = "";

    if (ratings != null) {
        ratings.forEach(rating => {
            if (rating.Source === "Internet Movie Database") {
                score = rating.Value.substring(0, 3);
            }
        });
    }

    return score;
}

function getDirectorOrWriter(metadata) {
    if (metadata.Director !== "N/A") {
        return "Directed by " + metadata.Director;
    }
    else if (metadata.Writer !== "N/A") {
        return "Written by " + metadata.Writer;
    }
    else {
        return "";
    }
}

function createTag(tag) {
    const formatted = tag.charAt(0) + tag.substring(1).toLowerCase();
    return <button className="tag-button">{formatted}</button>;
}

export default RecommendationModal;