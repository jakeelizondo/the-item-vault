import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  getHeaderButton = () => {
    if (this.props.location.pathname === '/submit-item-suggestion') {
      return (
        <button
          className="back-button"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      );
    }
    return (
      <Link to="/submit-item-suggestion">
        <button className="to-submit-suggestion">Submit a Suggestion</button>
      </Link>
    );
  };
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1>The Magic Item Vault</h1>
          <div className="nav">{this.getHeaderButton()}</div>
        </header>
      </React.Fragment>
    );
  }
}
