import React, { Component } from 'react';
import '../../styles/Questionnaire.css';

class Start extends Component {
    render() {
      return (
        <div className="questionnaire-content">
            <div className="start-div">
                <p className="intro">Get film recommendations based on your current mood</p>
                <button className="start-button" onClick={this.props.showLanguageQuestion}>START</button>
                <div className="faq-div">
                    <p className="faq-header">FAQ</p>
                    <p className="faq-point">How does it work?</p>
                    <p className="faq-description">
                        You simply answer 4 quick questions. In the last question I recommend that you pick 1 or 2 genres. 
                        If you pick 0 then you will probably get a lot of recommendations, which kind of defeats the purpose. The 
                        same applies if you pick more than 3 genres. <br/>Example:<br/> if you pick 'Action', then you will <i>only</i> get  
                        action films. If you pick 'Action' and 'Horror', then you will get both action <i>and</i> horror films.
                    </p>
                    <p className="faq-point">What is the 'dark' genre?</p>
                    <p className="faq-description">
                        Pretty much what the name suggests. Films with this genre are quite dark and should definitely be 
                        avoided if you're on a date or having a family movie night!
                    </p>
                    <p className="faq-point">What is the 'deep' genre?</p>
                    <p className="faq-description">
                        Films that have a lot of depth, basically. They can be quite abstract and are definitely not everyone's cup of tea. 
                        Bergman's <i>Persona</i> is a good example. Avoid this genre if you want something that's easy to follow.
                    </p>
                    <p className="faq-point">What is the 'unique' genre?</p>
                    <p className="faq-description">
                        Films that are a bit different. The typical viewer might find these films to be quite odd. There's definitely an  
                        overlap between this genre and the 'deep' genre.
                    </p>
                    <p className="faq-point">What happens if I click on the actual film posters?</p>
                    <p className="faq-description">
                        A new tab with the IMDb page of the film will open.
                    </p>
                    <p className="faq-point">What are the film recommendations based on?</p>
                    <p className="faq-description">
                        Simply put: my <i>personal</i> film tastes. Before adding a film to the library, it's a requirement that I personally enjoy it 
                        and would recommend it to others according to their mood.
                    </p>
                    <p className="faq-point">What are my biases?</p>
                    <p className="faq-description">
                        I'm biased towards East-Asian cinema and animation. A significant number of my recommendations will fit one or both of these 
                        descriptions. Luckily you can easily filter out both if you don't like such films!
                    </p>
                    <p className="faq-point">How big is the library?</p>
                    <p className="faq-description">
                        The library currently consists of 92 films.
                    </p>
                    <p className="faq-point">How can I view the whole library?</p>
                    <p className="faq-description">
                        Simply answer 'Yes' to the first 3 questions and click on 'Get recommendations!' on the 4th question, without picking any genres.
                    </p>
                </div>
            </div>
        </div>
      );
    }
}

export default Start;
