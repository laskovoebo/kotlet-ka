import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="confirmPopup popup_opened">
          <div className="popupContainer">
            <fieldset className="popup__set">
              <h2 className="popup__title">Вы уверены?</h2>
              <button
                type="submit"
                className="popup__button-submit"
                id="trashCards"
              >
                Да
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
