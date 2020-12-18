import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ItemVault from './ItemVault/ItemVault';
import STATICVAULT from './STATICVAULT';
import './App.css';

class App extends React.Component {
  state = { items: STATICVAULT, currentItem: {} };

  getRandomItem = () => {
    let randomItem = this.state.items[
      Math.floor(Math.random() * this.state.items.length)
    ];
    console.log(randomItem);
    this.setState({ currentItem: randomItem });
  };
  render() {
    return (
      <div className="App">
        <SearchBar getRandomItem={this.getRandomItem} />
        <div className="random-item-window">
          <ItemVault currentItem={this.state.currentItem} />
        </div>
      </div>
    );
  }
}

export default App;
