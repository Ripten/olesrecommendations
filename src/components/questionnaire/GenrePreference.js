import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Questionnaire.css';

class GenrePreference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no_preference: false,
      action: false,
      adventure: false,
      biography: false,
      classic: false,
      comedy: false,
      crime: false,
      deep: false,
      dark: false,
      documentary: false,
      gangster: false,
      horror: false,
      kidfriendly: false,
      music: false,
      romance: false,
      sad: false,
      samurai: false,
      scifi: false,
      sports: false,
      thriller: false,
      unique: false,
      violent: false,
      war: false,
      western: false,
      zombie: false
    };
  }

  toggle = (preference) => {
    let button = document.getElementById(preference);
    const current = this.state[preference]

    if (current === true) {
      ReactDOM.findDOMNode(button).style['background-color'] = "#f5ebd0";
      ReactDOM.findDOMNode(button).style['color'] = "black";
    } else {
      ReactDOM.findDOMNode(button).style['background-color'] = "green";
      ReactDOM.findDOMNode(button).style['color'] = "white";
    }

    this.setState({
      [preference]: !current
    });
  }

  addAllTags = () => {
    const tags = []

    if (this.state.action === true) { tags.push("ACTION"); }
    if (this.state.adventure === true) { tags.push("ADVENTURE"); }
    if (this.state.biography === true) { tags.push("BIOGRAPHY"); }
    if (this.state.classic === true) { tags.push("CLASSIC"); }
    if (this.state.comedy === true) { tags.push("COMEDY"); }
    if (this.state.crime === true) { tags.push("CRIME"); }
    if (this.state.dark === true) { tags.push("DARK"); }
    if (this.state.deep === true) { tags.push("DEEP"); }
    if (this.state.documentary === true) { tags.push("DOCUMENTARY"); }
    if (this.state.gangster === true) { tags.push("GANGSTER"); }
    if (this.state.horror === true) { tags.push("HORROR"); }
    if (this.state.kidfriendly === true) { tags.push("KID_FRIENDLY"); }
    if (this.state.music === true) { tags.push("MUSIC"); }
    if (this.state.romance === true) { tags.push("ROMANCE"); }
    if (this.state.sad === true) { tags.push("SAD"); }
    if (this.state.samurai === true) { tags.push("SAMURAI"); }
    if (this.state.scifi === true) { tags.push("SCIFI"); }
    if (this.state.sports === true) { tags.push("SPORTS"); }
    if (this.state.thriller === true) { tags.push("THRILLER"); }
    if (this.state.unique === true) { tags.push("UNIQUE"); }
    if (this.state.violent === true) { tags.push("VIOLENT"); }
    if (this.state.war === true) { tags.push("WAR"); }
    if (this.state.western === true) { tags.push("WESTERN"); }
    if (this.state.zombie === true) { tags.push("ZOMBIE"); }

    this.props.createFilmRecommendations(tags);
  }

  render() {
    return (
      <div className="questionnaire-content">
        <div className="question-div">What are you in the mood for?</div>
        <div className="recommendation-button-row">
          <button className="recommendation-button" onClick={this.addAllTags}>Get recommendations!</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="action" onClick={() => this.toggle('action')}>Action</button>
          <button className="genre-button" id="adventure" onClick={() => this.toggle('adventure')}>Adventure</button>
          <button className="genre-button" id="biography" onClick={() => this.toggle('biography')}>Biography</button>
          <button className="genre-button" id="classic" onClick={() => this.toggle('classic')}>Classic</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="comedy" onClick={() => this.toggle('comedy')}>Comedy</button>
          <button className="genre-button" id="crime" onClick={() => this.toggle('crime')}>Crime</button>
          <button className="genre-button" id="dark" onClick={() => this.toggle('dark')}>Dark</button>
          <button className="genre-button" id="deep" onClick={() => this.toggle('deep')}>Deep</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="documentary" onClick={() => this.toggle('documentary')}>Documentary</button>
          <button className="genre-button" id="gangster" onClick={() => this.toggle('gangster')}>Gangster</button>
          <button className="genre-button" id="horror" onClick={() => this.toggle('horror')}>Horror</button>
          <button className="genre-button" id="kidfriendly" onClick={() => this.toggle('kidfriendly')}>Kid friendly</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="music" onClick={() => this.toggle('music')}>Music</button>
          <button className="genre-button" id="romance" onClick={() => this.toggle('romance')}>Romance</button>
          <button className="genre-button" id="sad" onClick={() => this.toggle('sad')}>Sad</button>
          <button className="genre-button" id="samurai" onClick={() => this.toggle('samurai')}>Samurai</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="scifi" onClick={() => this.toggle('scifi')}>Scifi</button>
          <button className="genre-button" id="sports" onClick={() => this.toggle('sports')}>Sports</button>
          <button className="genre-button" id="thriller" onClick={() => this.toggle('thriller')}>Thriller</button>
          <button className="genre-button" id="unique" onClick={() => this.toggle('unique')}>Unique</button>
        </div>
        <div className="genre-row">
          <button className="genre-button" id="violent" onClick={() => this.toggle('violent')}>Violent</button>
          <button className="genre-button" id="war" onClick={() => this.toggle('war')}>War</button>
          <button className="genre-button" id="western" onClick={() => this.toggle('western')}>Western</button>
          <button className="genre-button" id="zombie" onClick={() => this.toggle('zombie')}>Zombie</button>
        </div>
      </div>
    );
  }
}

export default GenrePreference;