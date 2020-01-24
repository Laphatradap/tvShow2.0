import React, { Component } from "react";

export default class CommentSection extends Component {
  state = {
    comments: [],
    newComment: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addComments(this.state.newComment);
    this.setState({
      newComment: ""
    })
  };

  addComments = comment => {
    const updatedComments = [...this.state.comments, comment];

    console.log(updatedComments);
    this.setState({
      comments: updatedComments
    });
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
    //console.log(this.state.newComment);
  };

  render() {
    const list = this.state.comments;
    // console.log(this.state.comments);
    // console.log(this.state.newComment);
    return (
      <div>
        {list.map(comment => {
          return <p key={comment}>{comment}</p>;
        })}
        <div className="commentForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                //id="input"
                type="text"
                name="comment"
                onChange={this.handleChange}
                value={this.state.newComment}
              />
              <button className="addCommentButton" onClick={this.handleSubmit}>
                Add your comment!
              </button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
