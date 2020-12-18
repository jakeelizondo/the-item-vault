import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div className="random-item">
        <h2>{this.props.currentItem.name}</h2>
        <p>Categories: {this.props.currentItem.categories}</p>
        <p>Description: {this.props.currentItem.description}</p>
        <h4>Contributed by: {this.props.currentItem.contributor}</h4>
      </div>
    );
  }
}
