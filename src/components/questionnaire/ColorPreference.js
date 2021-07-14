import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Questionnaire.css';

class ColorPreference extends Component {

  yes = () => {
    let yes = document.getElementById('all-colors');
    let no = document.getElementById('colors-only');
    let only = document.getElementById('blackwhite-only');
    ReactDOM.findDOMNode(yes).style['background-color'] = "silver";
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setNoColorPreference();
      }
      .bind(this),
      100
    );
  }

  no = () => {
    let yes = document.getElementById('all-colors');
    let no = document.getElementById('colors-only');
    let only = document.getElementById('blackwhite-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['background-color'] = "silver";
    ReactDOM.findDOMNode(only).style['opacity'] = 0.3;

    setTimeout(
      function() {
        this.props.setColorsOnly();
      }
      .bind(this),
      100
    );
  }

  blackAndWhiteOnly = () => {
    let yes = document.getElementById('all-colors');
    let no = document.getElementById('colors-only');
    let only = document.getElementById('blackwhite-only');
    ReactDOM.findDOMNode(yes).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(no).style['opacity'] = 0.3;
    ReactDOM.findDOMNode(only).style['background-color'] = "silver";

    setTimeout(
      function() {
        this.props.setBlackAndWhiteOnly();
      }
      .bind(this),
      100
    );
  }

  render() {
    return (
      <div className="questionnaire-content">
        <div className="question-div">Are you OK with black and white films?</div>
        <div id="all-colors" className="choice-div" onClick={this.yes}>Yes</div>
        <div id="colors-only" className="choice-div" onClick={this.no}>No, I just want color films</div>
        <div id="blackwhite-only" className="choice-div" onClick={this.blackAndWhiteOnly}>Actually, I <i>only</i> want black and white films!</div>
      </div>
    );
  }
}

export default ColorPreference;