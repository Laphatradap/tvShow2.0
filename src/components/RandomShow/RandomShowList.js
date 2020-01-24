import React, { Component } from "react";
// import { Link } from "react-router-dom";
import style from "../RandomShow/RandomShowList.css";

export default class RandomShowList extends Component {
  toDetailsPage = () => {
    const showId = this.props.show.id;

    this.props.routerHistory.push(`/show/${showId}`);
  };
  render() {
    // console.log("props of randomshowlist", this.props);
    console.log("show routerHistory", this.props.routerHistory);
    const { name, image } = this.props.show;
    if (this.props.error) {
      return <h3>{this.props.error}</h3>;
    } else {
      return (
        <div className="tile">
          {this.props.loading ? (
            <div>Loading...</div>
          ) : (
            <div onClick={this.toDetailsPage}>
              <div className="RandomShowListName">{name}</div>
              <img className="RandomShowListImage" src={image} alt={"a"} />
              {/* <Link to={`/show/${this.props.show.id}`}>More info</Link> */}
            </div>
          )}
        </div>
      );
    }
  }
}
