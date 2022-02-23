import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="Form">
        <label htmlFor="nameCard">
          Nome:
          <input type="text" data-testid="name-input" name="nameCard" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea type="textarea" data-testid="description-input" name="description" />
        </label>
        <label htmlFor="attOne">
          Atributo 1:
          <input type="number" data-testid="attr1-input" name="attOne" />
        </label>
        <label htmlFor="attTwo">
          Atributo 2:
          <input type="number" data-testid="attr2-input" name="attTwo" />
        </label>
        <label htmlFor="attThree">
          Atributo 3:
          <input type="number" data-testid="attr3-input" name="attThree" />
        </label>
        <label htmlFor="imageCard">
          Imagem:
          <input type="text" data-testid="image-input" name="imageCard" />
        </label>
        <label htmlFor="selectRarity">
          Raridade:
          <select data-testid="rare-input" name="selectRarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Tybe Trunfo!
          <input type="checkbox" data-testid="trunfo-input" name="checkbox" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
