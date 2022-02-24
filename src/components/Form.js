import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.props;
    const { onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="Form">
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            name="name-input"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            type="textarea"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attOne">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            name="attOne"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attTwo">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            name="attTwo"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attThree">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            name="attThree"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imageCard">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            name="imageCard"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="selectRarity">
          Raridade:
          <select
            data-testid="rare-input"
            name="selectRarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Tybe Trunfo!
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
