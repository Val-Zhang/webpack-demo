import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      index: this.state.index + 1
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>Hot reload test</div>
        <span>{this.state.index}</span>
      </div>
    );
  }
}

export default hot(module)(App);
