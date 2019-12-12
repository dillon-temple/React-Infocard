import React from "react";
import "./App.css";

const App = (props) => {
  return (
    <div class="card">
      <img class="card-img-top" src={props.image} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">
          {props.description}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default App;
