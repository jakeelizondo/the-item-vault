import React from 'react';
import Item from '../Item/Item';

export default class ItemVault extends React.Component {
  checkItemEmpty = () => {
    return Object.keys(this.props.currentItem).length === 0;
  };
  render() {
    return (
      <React.Fragment>
        {this.checkItemEmpty() && (
          <p>Nothing here yet, roll for a random item above!</p>
        )}
        {!this.checkItemEmpty() && (
          <Item currentItem={this.props.currentItem} />
        )}
      </React.Fragment>
    );
  }
}
