import React, { Component } from 'react';
import '../../styles/Questionnaire.css';

class LanguagePreference extends Component {
  render() {
    return (
      <div className="questionnaire-content">
        <div className="question-div">
          Are you OK with foreign language films?
        </div>
        <div className="choice-div" onClick={this.props.setNoLanguagePreference}>
          Yes
        </div>
        <div className="choice-div" onClick={this.props.setEnglishOnly}>
          No, only I want films in English
        </div>
        <div className="choice-div" onClick={this.props.setForeignOnly}>
          Actually, I <i>only</i> want foreign language films!
        </div>
      </div>
    );
  }
}

export default LanguagePreference;