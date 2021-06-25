import '../../styles/Media.css';
import '../../styles/MediaModal.css';
import '../../styles/Questionnaire.css';
import Recommendation from './Recommendation.js'


function RecommendationsTable(films) {
    return (
        () => { 
            {films.films.map((film) => (
                <Recommendation film={film} />
            ))}
        }
    );
}

export default RecommendationsTable;