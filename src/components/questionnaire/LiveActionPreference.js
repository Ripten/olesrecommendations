import React, { Component } from 'react';
import '../../styles/Questionnaire.css';

class LiveActionPreference extends Component {
    render() {
      return (
        <div className="questionnaire-content">
          <div className="question-div">Are you OK with animated films?</div>
          <div className="choice-div" onClick={this.props.setNoStylePreference}>Yes</div>
          <div className="choice-div" onClick={this.props.setLiveActionOnly}>No, I just want live action films</div>
          <div className="choice-div" onClick={this.props.setAnimationOnly}>Actually, I <i>only</i> want animated films!</div>
        </div>
      );
    }
}

export default LiveActionPreference;