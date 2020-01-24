import React, { Component } from "react";
import LikeButton from "../LikeButton";

export default class DetailsPage extends Component {
  state = {
    show: {},
    loading: true
  };

  componentDidMount() {
    const showId = this.props.match.params.showId;
    console.log(showId);
    fetch(`http://api.tvmaze.com/shows/${encodeURIComponent(showId)}`)
      .then(res => res.json())
      .then(data => {
        if (!data.image) {
          this.setState({ error: "Show not found" });
        } else {
          this.setState({
            loading: false,
            show: {
              name: data.name,
              image: data.image.medium,
              summary: data.summary
            }
          });
        }
      });
  }

  render() {
    const { name, image, summary } = this.state.show;
    return (
      <div>
        <div>
          <h1>Show Details</h1>
          <div className="showDetailName">{name}</div>
          <img className="showDetailImage" src={image} alt="showImage" />
          <div className="showDetailSummary">{summary}</div>
        </div>
        <LikeButton />
      </div>
    );
  }
}
