import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import RandomShow from "./components/RandomShow";
import DetailsPage from "./components/ShowDetail/DetailsPage";

function App() {
  return (
    <main>
      <h1>TV Show Generator</h1>
      <Route exact path="/" component={RandomShow} />
      <Route path="/show/:showId" component={DetailsPage} />
    </main>
  );
}

export default App;
