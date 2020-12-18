import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ItemVault from './ItemVault/ItemVault';
import STATICVAULT from './STATICVAULT';
import './App.css';

class App extends React.Component {
  state = { items: STATICVAULT, currentItem: {} };

  setRandomItem = () => {
    let randomItem;
    do {
      randomItem = this.getRandomItem();
    } while (randomItem === this.state.currentItem);

    this.setState({ currentItem: randomItem });
  };

  getRandomItem = () => {
    return this.state.items[
      Math.floor(Math.random() * this.state.items.length)
    ];
  };

  render() {
    return (
      <div className="App">
        <SearchBar setRandomItem={this.setRandomItem} />
        <div className="random-item-window">
          <ItemVault currentItem={this.state.currentItem} />
        </div>
      </div>
    );
  }
}

export default App;
