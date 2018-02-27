import React from "react";
import mockData from "../../data/mockJSON.json";
import DrinksList from "./drinksList.js";
import Tab from "./tab.js";

class DrinkingEstablishment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkingEstablishments: [],
      drinks: [],
      selectedDrinkingEstablishment: null
    };
    this.handleDrinkListClick = this.handleDrinkListClick.bind(this);
    this.getDrinksList = this.getDrinksList.bind(this);
    this.getDrinksListTwo = this.getDrinksListTwo.bind(this);
  }

  componentWillMount() {
    var jsonString = mockData.drinkingEstablishment;
    let drinkingEstbalishmentArray = [];
    for (var i = 0; i < jsonString.length; i++) {
      var drinkingEstablishment = jsonString[i];
      drinkingEstbalishmentArray.push({
        name: drinkingEstablishment.name,
        id: drinkingEstablishment.id,
        type: drinkingEstablishment.type
      });
      this.setState(
        { drinkingEstablishments: drinkingEstbalishmentArray },
        () => {
          // console.log("state in setState:", this.state);
        }
      );
    }
  }

  getDrinksList() {
    var drinksString = mockData.drinkingEstablishment;
    let drinksListArray = [];
    for (var i = 0; i < drinksString.length; i++) {
      var drinksList = drinksString[i].drinks;
      for (var j = 0; j < drinksList.length; j++) {
        var count = j;
        var drinks = drinksList;
        console.log("first drinkslist", drinks);
        console.log("count", count);
        drinksListArray.push({
          name: drinks.name,
          id: drinks.id,
          price: drinks.price
        });
      }
      // console.log("second drinkslist", drinksList);

      this.setState({ drinks: drinksListArray }, () => {
        console.log("state in setState:", this.state);
      });
    }
  }

  getDrinksListTwo(id) {
    var drinksString = mockData.drinkingEstablishment[id].drinks;
    console.log(drinksString);
    let drinksListArrayTwo = [];
    for (var i = 0; i < drinksString.length; i++) {
      var drinksList = drinksString[i];
      drinksListArrayTwo.push({
        name: drinksList.name,
        id: drinksList.id,
        price: drinksList.price
      });
    }
    // console.log("second drinkslist", drinksList);

    this.setState({ drinks: drinksListArrayTwo }, () => {
      console.log("state in setState:", this.state);
    });
  }
  componentDidMount() {
    this.handleDrinkListClick;
  }

  handleDrinkListClick(event, item) {
    var id = item.id;
    console.log(id);
    this.getDrinksListTwo(id);
  }

  render() {
    return (
      <div>
        {this.state.drinkingEstablishments.map(function(item, index) {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.type}</p>
              <p
                ref={"ref" + item.id}
                onClick={() => this.handleDrinkListClick(event, item)}
                key={index}
                value={item.id}
              >
                Show Drinks List
              </p>
            </div>
          );
        }, this)}
        <DrinksList drinksList={this.state.drinks} />
      </div>
    );
  }
}

export default DrinkingEstablishment;
