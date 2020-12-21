import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div id="info">
            <p>
              Welcome to the Item Vault! Here you can roll the dice and receive
              a random magic item for use in your adventures. Will it be strong?
              Will it be silly? Roll the dice and find out!
            </p>
          </div>
        </section>
        <div className="random-button">
          <button onClick={() => this.props.setRandomItem()}>
            Give me a random magic item!
          </button>
        </div>
      </React.Fragment>
    );
  }
}
