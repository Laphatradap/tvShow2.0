import React, { Component } from "react";
import "./LikeButton.css"

export default class LikeButton extends Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };
  render() {
    return (
      <div className="likeContainer">
        <p className="likeNum">{this.state.numLikes} poeple like this show </p>
        <button className="like-button" onClick={this.increment}>Like</button>
      </div>
    );
  }
}
