import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Questionnaire.css';

class LanguagePreference extends Component {

  yes = () => {
    let yes = document.getElementById('all-languages');
    let no = document.getElementById('english-only');
    let only = document.getElementById('foreign-only');
    ReactDOM.findDOMNode(yes).style['background-color'] = "silver";
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setNoLanguagePreference();
      }
      .bind(this),
      200
    );
  }

  no = () => {
    let yes = document.getElementById('all-languages');
    let no = document.getElementById('english-only');
    let only = document.getElementById('foreign-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['background-color'] = "silver";
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setEnglishOnly();
      }
      .bind(this),
      200
    );
  }

  foreignOnly = () => {
    let yes = document.getElementById('all-languages');
    let no = document.getElementById('english-only');
    let only = document.getElementById('foreign-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['background-color'] = "silver";

    setTimeout(
      function() {
        this.props.setForeignOnly();
      }
      .bind(this),
      200
    );
  }

  render() {
    return (
      <div className="questionnaire-content">
        <div className="question-div">
          Are you OK with foreign language films?
        </div>
        <div id="all-languages" className="choice-div" onClick={this.yes}>
          Yes
        </div>
        <div id="english-only" className="choice-div" onClick={this.no}>
          No, only I want films in English
        </div>
        <div id="foreign-only" className="choice-div" onClick={this.foreignOnly}>
          Actually, I <i>only</i> want foreign language films!
        </div>
      </div>
    );
  }
}

export default LanguagePreference;