import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import RandomItemGenerator from './RandomItemGenerator/RandomItemGenerator';
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
      <React.Fragment>
        <Route path="/" component={Header} />
        <Route path="/submit-item-suggestion" component={AddItemForm} />
        <Route
          exact
          path="/"
          render={() => (
            <RandomItemGenerator
              setRandomItem={this.setRandomItem}
              currentItem={this.state.currentItem}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
