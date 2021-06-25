import React, { Component } from 'react';
import '../styles/App.css';
import Questionnaire from './questionnaire/Questionnaire';
import kon from '../images/Kon.png'


class App extends Component {
  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <div className="banner">
          <div className="banner-content" onClick={this.reload}>
            Ole's Recommendations
            <img className="banner-image" src={kon} alt="kon" />
          </div>
        </div>
        <div className="mainpage">
          <Questionnaire />
        </div>
      </div>
    );
  }
}

export default App;