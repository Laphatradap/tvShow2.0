import React, { Component } from "react";
import RandomShowList from "./RandomShowList";

export default class RandomShowContainer extends Component {
  state = {
    loading: true,
    shows: []
  };

  getRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

  componentDidMount = async () => {
    this.getData();
    this.getData();
    this.getData();
    this.getData();
    this.getData();
  };

  getData = async () => {
    try {
      const response = await fetch(
        `http://api.tvmaze.com/shows/${this.getRandomId()}`
      );
      const parsedData = await response.json();
      const showData = parsedData;
      if (!showData.image) {
        this.setState({ error: "Show not found" });
      } else {
        this.setState({
          loading: false,
          shows: [
            ...this.state.shows,
            {
              name: showData.name,
              image: showData.image.medium,
              id: showData.id
            }
          ]
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    //console.log(this.state.show);
    const { shows } = this.state;
    const { history } = this.props;
    return (
      <div>
        {shows.map(show => {
          return (
            <div>
              <RandomShowList show={show} routerHistory={history} />;
            </div>
          );
        })}
      </div>
    );
  }
}
