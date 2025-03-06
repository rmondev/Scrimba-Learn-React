import React, { Component } from 'react';

class ClassStateCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  /**
   * If you need the old value of state to determine the new value,
   * you should pass a function to this.setState instead of directly
   * modifying the state.
   */

  handleClickMinus = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  handleClickPlus = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button onClick={this.handleClickMinus} className="minus" aria-label="Decrease count">–</button>
          <h2 className="count">{this.state.count}</h2>
          <button onClick={this.handleClickPlus} className="plus" aria-label="Increase count">+</button>
        </div>
      </main>
    );
  }
}

export default ClassStateCounter;
