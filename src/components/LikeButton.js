import React, { Component } from "react";

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
      <div>
        <p>{this.state.numLikes}</p>
        <button onClick={this.increment}>Like</button>
      </div>
    );
  }
}
