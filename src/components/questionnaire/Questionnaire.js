import React, { Component } from 'react';
import LanguagePreference from './LanguagePreference.js';
import ColorPreference from './ColorPreference.js';
import LiveActionPreference from './LiveActionPreference.js';
import GenrePreference from './GenrePreference.js';
import Recommendations from '../recommendations/Recommendations.js';
import '../../styles/Questionnaire.css';


class Questionnaire extends Component {

  constructor(props) {
    super(props);

    this.state = {
      languageQuestion: true,
      colorQuestion: false,
      liveActionQuestion: false,
      genreQuestion: false,
      showRecommendations: false,
      englishOnly: null,
      colorsOnly: null,
      liveActionOnly: null,
      filmRequest: null,
      recommendations: null
    };
  }

  showLanguageQuestion = () => {
    const { languageQuestion } = this.state;
  
    this.setState({
      languageQuestion: !languageQuestion,
      colorQuestion: false,
      liveActionQuestion: false,
      genreQuestion: false,
      showRecommendations: false
    });
  }

  showColorQuestion = () => {
    const { colorQuestion } = this.state;
  
    this.setState({
      languageQuestion: false,
      colorQuestion: !colorQuestion,
      liveActionQuestion: false,
      genreQuestion: false,
      showRecommendations: false
    });
  }

  showLiveActionQuestion = () => {
    const { liveActionQuestion } = this.state;
  
    this.setState({
      languageQuestion: false,
      colorQuestion: false,
      liveActionQuestion: !liveActionQuestion,
      genreQuestion: false,
      showRecommendations: false
    });
  }

  showGenreQuestion = () => {
    const { genreQuestion } = this.state;
  
    this.setState({
      languageQuestion: false,
      colorQuestion: false,
      liveActionQuestion: false,
      genreQuestion: !genreQuestion,
      showRecommendations: false
    });
  }

  showRecommendations = () => {
    const { showRecommendations } = this.state;
  
    this.setState({
      languageQuestion: false,
      colorQuestion: false,
      liveActionQuestion: false,
      genreQuestion: false,
      showRecommendations: !showRecommendations
    });
  }

  setEnglishOnly = () => {
    this.setState({englishOnly: true});
    this.showColorQuestion();
  }

  setForeignOnly = () => {
    this.setState({englishOnly: false});
    this.showColorQuestion();
  }

  setNoLanguagePreference = () => {
    this.setState({englishOnly: null}); 
    this.showColorQuestion();
  }

  setColorsOnly = () => {
    this.setState({colorsOnly: true});
    this.showLiveActionQuestion();
  }

  setBlackAndWhiteOnly = () => {
    this.setState({colorsOnly: false});
    this.showLiveActionQuestion();
  }
  
  setNoColorPreference= () => {
    this.setState({colorsOnly: null});
    this.showLiveActionQuestion();
  }

  setLiveActionOnly = () => {
    this.setState({liveActionOnly: true});
    this.showGenreQuestion();
  }

  setAnimationOnly = () => {
    this.setState({liveActionOnly: false});
    this.showGenreQuestion();
  }

  setNoStylePreference = () => {
    this.setState({liveActionOnly: null});
    this.showGenreQuestion();
  }

  setTags = (newTags) => {
    this.createFilmRecommendations(newTags);
  }

  createFilmRequest = (tags) => {
    const request = {
      "englishOnly": this.state.englishOnly,
      "colorsOnly": this.state.colorsOnly,
      "liveActionOnly": this.state.liveActionOnly,
      "tags": tags
    }

    this.setState({filmRequest: request});
  }
  
  createFilmRecommendations = (tags) => {
    this.createFilmRequest(tags);
    this.showRecommendations();
  }

  render() {
    return (
      <div className="questionnaire-content">
         {(() => {
            if (this.state.languageQuestion)
              return <LanguagePreference 
                      setEnglishOnly={this.setEnglishOnly} 
                      setForeignOnly={this.setForeignOnly} 
                      setNoLanguagePreference={this.setNoLanguagePreference} />
            else if (this.state.colorQuestion)
              return <ColorPreference  
                      setColorsOnly={this.setColorsOnly}
                      setBlackAndWhiteOnly={this.setBlackAndWhiteOnly}
                      setNoColorPreference={this.setNoColorPreference} />
            else if (this.state.liveActionQuestion)
              return <LiveActionPreference 
                      setLiveActionOnly={this.setLiveActionOnly} 
                      setAnimationOnly={this.setAnimationOnly}
                      setNoStylePreference={this.setNoStylePreference}/>
            else if (this.state.genreQuestion)
              return <GenrePreference 
                      createFilmRecommendations={this.createFilmRecommendations} />       
            else if (this.state.showRecommendations)
              return <Recommendations {...this.state} />
            else
              return null
          })()
        }
      </div>
    );
  }
}

export default Questionnaire;