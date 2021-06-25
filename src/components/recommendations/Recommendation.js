import '../../styles/Media.css';
import '../../styles/MediaModal.css';
import '../../styles/Questionnaire.css';
import imdb from '../../images/imdb.png';


function Recommendation(film) {
    return (
        <div>
            (<div className="modal-content">
                <div className="metadata">
                    <h1 className="modal-header">{film.title}</h1>
                </div>
                {createImdbLink(film.url)}
            </div>)
        </div>
    );
}

function createImdbLink(link) {
    return (
        <a href={link}>
            <img className="imdb-icon" src={imdb} alt="imdb" />
        </a>
    )
}

export default Recommendation;