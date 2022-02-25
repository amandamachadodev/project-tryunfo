import React from 'react';
import Form from './components/Form';
import './index.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.buttonDisable);
  }

  buttonDisable = () => {
    const { cardName, cardDescription, isSaveButtonDisabled,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const ableString = [cardName, cardImage, cardDescription, cardRare];
    const ableStringButton = ableString.every((element) => element !== '');

    const attNumber = [cardAttr1, cardAttr2, cardAttr3];
    const ninety = 90;
    const maxNumber = 210;
    const sumNumber = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, value) => acc + +value, 0) <= maxNumber;
    const ableAttNumberMax = attNumber.every((element) => element <= ninety);
    const ableAttNumberMin = attNumber.some((element) => element < 0) === false;
    if (ableStringButton && sumNumber && ableAttNumberMax && ableAttNumberMin) {
      this.setState({ isSaveButtonDisabled: false });
      console.log(isSaveButtonDisabled);
    } else {
      this.setState({ isSaveButtonDisabled: true });
      console.log(isSaveButtonDisabled);
    }
  };

  onSaveButtonClick = () => {

  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
