import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    index: 1,
  };

  handleClick = () => {
    const { index } = this.state;
    this.setState({
      index: index + 1,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div>
        <div
          onClick={this.handleClick}
          role="presentation"
        >
          Hot reload test success
        </div>
        <span className="number">{index}</span>
      </div>
    );
  }
}

export default hot(module)(App);
