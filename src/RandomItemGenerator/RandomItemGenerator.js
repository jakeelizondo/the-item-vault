import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ItemVault from '../ItemVault/ItemVault';

export default class RandomItemGenerator extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar setRandomItem={this.props.setRandomItem} />
        <div className="random-item-window">
          <ItemVault currentItem={this.props.currentItem} />
        </div>
      </div>
    );
  }
}
