import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RandomShowList extends Component {
  toDetailsPage = () => {
    const showId = this.props.show.id;
    this.props.routerHistory.push(`/show/${showId}`);
  };
  
  render() {
    console.log("props of randomshowlist", this.props);
    
    const { name, image } = this.props.show;
    if (this.props.error) {e .
      return <h3>{this.props.error}</h3>;
    } else {
      return (
        <div>
          {this.props.loading ? (
            <div>Loading...</div>
          ) : (
            <div onClick={this.toDetailsPage}>
              <div className="showName">{name}</div>
              <img className="showImage" src={image} alt={"a"} />
              <Link to={`/show/${this.props.show.id}`}>More info</Link>
            </div>
          )}
        </div>
      )
    }
  }
}
