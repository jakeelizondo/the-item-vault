import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="random-button">
        <button onClick={() => this.props.getRandomItem()}>
          Give me a random magic item!
        </button>
      </div>
    );
  }
}