import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Questionnaire.css';

class LiveActionPreference extends Component {

  yes = () => {
    let yes = document.getElementById('all-styles');
    let no = document.getElementById('liveaction-only');
    let only = document.getElementById('animation-only');
    ReactDOM.findDOMNode(yes).style['background-color'] = "silver";
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setNoStylePreference();
      }
      .bind(this),
      100
    );
  }

  no = () => {
    let yes = document.getElementById('all-styles');
    let no = document.getElementById('liveaction-only');
    let only = document.getElementById('animation-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['background-color'] = "silver";
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setLiveActionOnly();
      }
      .bind(this),
      100
    );
  }

  animationOnly = () => {
    let yes = document.getElementById('all-styles');
    let no = document.getElementById('liveaction-only');
    let only = document.getElementById('animation-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['background-color'] = "silver";

    setTimeout(
      function() {
        this.props.setAnimationOnly();
      }
      .bind(this),
      100
    );
  }

  render() {
    return (
      <div className="questionnaire-content">
        <div className="question-div">Are you OK with animated films?</div>
        <div id="all-styles" className="choice-div" onClick={this.yes}>Yes</div>
        <div id="liveaction-only" className="choice-div" onClick={this.no}>No, I just want live action films</div>
        <div id="animation-only" className="choice-div" onClick={this.animationOnly}>Actually, I <i>only</i> want animated films!</div>
      </div>
    );
  }
}

export default LiveActionPreference;