import React from 'react';

export default class Item extends React.Component {
  getCategories = () => {
    if (this.props.currentItem.categories.length === 1) {
      return this.props.currentItem.categories[0];
    } else {
      return this.props.currentItem.categories.join(', ');
    }
  };
  render() {
    return (
      <div className="random-item">
        <div className="random-item-title">
          <h2>{this.props.currentItem.name}</h2>
        </div>
        <p>
          {this.props.currentItem.categories.length === 1
            ? 'Category'
            : 'Categories'}
          : {this.getCategories()}
        </p>
        <p>Description: {this.props.currentItem.description}</p>
        <h4>
          Contributed by: {this.props.currentItem.contributor || 'Anonymous'}
        </h4>
      </div>
    );
  }
}
