import React, { Component } from 'react';
import '../../styles/Questionnaire.css';

class ColorPreference extends Component {
    render() {
      return (
        <div className="questionnaire-content">
          <div className="question-div">Are you OK with black and white films?</div>
          <div className="choice-div" onClick={this.props.setNoColorPreference}>Yes</div>
          <div className="choice-div" onClick={this.props.setColorsOnly}>No, I just want color films</div>
          <div className="choice-div" onClick={this.props.setBlackAndWhiteOnly}>Actually, I <i>only</i> want black and white films!</div>
        </div>
      );
    }
}

export default ColorPreference;