import React, {Component} from 'react';
import '../../styles/Media.css';
import '../../styles/MediaModal.css';
import '../../styles/Questionnaire.css';
import MediaModal from '../common/MediaModal.js';
import {  getTitle } from '../common/common.jsx';
import axios from 'axios'


class FilmTable extends Component {
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
                <MediaModal show={this.state.show} handleClose={this.hideModal} data={this.state.data} ></MediaModal>
                {(() => { 
                    if (this.state.films !== null || this.state.films !== [])
                    return <table align="center">
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
                })()
                }
                
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecommendations();
    }

    async fetchRecommendationsAsync() {
        const options = {
            method: 'post',
            url: 'http://localhost:8080/api/v1/films',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(this.props.filmRequest),
            transformRequest: [(data) => {
              return data;
            }]
        };

        try {
            this.setState({isFetching: true});
            const response = await axios(options);
            this.setState({films: Array.from(response.data), isFetching: false});
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    };

    fetchRecommendations = this.fetchRecommendationsAsync;
}

export default FilmTable;