import React from "react";
import mockData from "../../data/mockJSON.json";
import DrinksList from "./drinksList.js";
import Tab from "./tab.js";

class DrinkingEstablishment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkingEstablishments: [],
      selectedDrinkingEstablishment: null
    };
    this.handleDrinkListClick = this.handleDrinkListClick.bind(this);
  }

  componentDidMount() {
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
          console.log("state in setState:", this.state);
        }
      );
    }
  }

  handleDrinkListClick(event) {}

  render() {
    return (
      <div>
        {this.state.drinkingEstablishments.map(function(item) {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.type}</p>
              <p>Show Drinks List</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DrinkingEstablishment;
