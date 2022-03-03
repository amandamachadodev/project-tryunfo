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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.buttonDisabled);
  }

  buttonDisabled = () => {
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, this.addNewCard());
  }

  addNewCard = () => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [...prevState.cards, {
        cardName: prevState.cardName,
        cardDescription: prevState.cardDescription,
        cardAttr1: prevState.cardAttr1,
        cardAttr2: prevState.cardAttr2,
        cardAttr3: prevState.cardAttr3,
        cardImage: prevState.cardImage,
        cardRare: prevState.cardRare,
        cardTrunfo: prevState.cardTrunfo,
      },
      ],
    }), () => this.validTrunfo());
  }

  validTrunfo = () => {
    const { cards } = this.state;
    const trunfo = cards.some((element) => element.cardTrunfo === true);
    if (trunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
      console.log(cards);
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, hasTrunfo, cards,
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          data={ this.addNewCard }
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
        <div>
          {cards.map((card) => (
            <div key={ card.cardName }>
              {card.cardName}
              {card.cardDescription}
              {card.cardAttr1}
              {card.cardAttr2}
              {card.cardAttr3}
              {card.cardImage}
              {card.cardRare}
              {card.cardTrunfo}
              <button type="button">Delete</button>
            </div>))}
        </div>
      </div>
    );
  }
}

export default App;
