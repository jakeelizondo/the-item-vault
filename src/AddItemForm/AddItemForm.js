import React from 'react';

export default class AddItemForm extends React.Component {
  state = { status: '' };

  submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  };

  render() {
    const { status } = this.state;
    return (
      <div className="submission">
        <h1>Submit a suggestion for the vault below!</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xleoorno"
          method="POST"
          className="suggest-item-form"
        >
          <label htmlFor="#item-name">Item Name: </label>
          <input
            type="text"
            name="item-name"
            id="item-name"
            placeholder="Put your awesome item name here"
            required
          />
          <br />
          <label htmlFor="#item-rarity" name="item-rarity">
            Item Rarity:{' '}
          </label>
          <select id="#item-rarity" name="item-rarity" required>
            <option value="">Please select an item rarity option...</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="very rare">Very Rare</option>
          </select>

          <br />
          <div className="item-category">
            <p>Item Category? Choose multiple if you think it overlaps.</p>
            <input
              type="checkbox"
              id="weapon"
              name="item-category"
              value="weapon"
            />
            <label htmlFor="#weapon">Weapon</label>
            <br />
            <input
              type="checkbox"
              id="armor"
              name="item-category"
              value="armor"
            />
            <label htmlFor="#armor">Armor</label>
            <br />
            <input
              type="checkbox"
              id="ring-amulet-jewelry"
              name="item-category"
              value="ring-amulet-jewelry"
            />
            <label htmlFor="#ring-amulet-jewelry">Ring/Amulet/Jewelry</label>
            <br />
            <input
              type="checkbox"
              id="trinket"
              name="item-category"
              value="trinket"
            />
            <label htmlFor="#trinket">Trinket</label>
            <br />
            <input
              type="checkbox"
              id="clothing"
              name="item-category"
              value="clothing"
            />
            <label htmlFor="#clothing">Clothing</label>
            <br />
            <input
              type="checkbox"
              id="consumable"
              name="item-category"
              value="consumable"
            />
            <label htmlFor="#consumable">Consumable</label>
            <br />
            <input
              type="checkbox"
              id="other/random"
              name="item-category"
              value="other/random"
            />
            <label htmlFor="#other/random">Other/Random</label>
          </div>
          <br />
          <label htmlFor="item-description">Item Description: </label>
          <br />
          <textarea
            id="item-description"
            name="item-description"
            rows="4"
            cols="40"
            placeholder="Please provide a detailed description of your item's unique appearance/effects/etc."
            required
          ></textarea>
          <br />
          <div className="name-options">
            <p>Want your name on the item for credit?</p>
            <label htmlFor="real-name">
              <input
                type="radio"
                id="real-name"
                name="name-options"
                value="real-name"
              />
              Yes, use my real name {'(provide below)'}
            </label>
            <br />
            <label htmlFor="first-name">
              <input
                type="radio"
                id="first-name"
                name="name-options"
                value="first-name"
              />
              Yes, use my first name only {'(provide below)'}
            </label>
            <br />
            <label htmlFor="pseudonym">
              <input
                type="radio"
                id="pseudonym"
                name="name-options"
                value="pseudonym"
              />
              Yes, use a pseudonym {'(provide below)'}
            </label>
            <br />

            <label htmlFor="no-name">
              <input
                type="radio"
                id="no-name"
                name="name-options"
                value="no-name"
              />
              No, thanks for offering though
            </label>
            <br />
            <div className="credit-name">
              <label htmlFor="#credit-name">
                Name for credit {'(optional)'}{' '}
              </label>
              <input type="text" name="credit-name" id="credit-name" />
            </div>
          </div>

          <br />
          {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
        <button
          className="back-button"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      </div>
    );
  }
}
