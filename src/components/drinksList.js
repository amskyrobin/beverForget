import React from "react";
import mockData from "../../data/mockJSON.json";

class DrinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinksTab: []
    };
  }

  // for (item in props.drinksList) {
  //   console.log("item:", item);
  // }

  // for (var i = 0; i < props.drinksList.length; i++) {
  //   console.log(props.drinksList[i].name);
  // }
  addToTab(item) {
    var id = item.id;
    var name = item.name;
    console.log(name);
    const tabArray = [];
    tabArray.push({
      name: item.name,
      price: item.price
    });
    this.setState({ drinksTab: tabArray }, () => {
      console.log("state in setState:", this.state);
    });
    console.log("tab array", tabArray);
  }

  render() {
    return (
      <div>
        {this.props.drinksList.map(function(item, index) {
          console.log(item.id);
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button
                key={index}
                value={item.id}
                onClick={() => this.addToTab(item)}
              >
                add to tab
              </button>
            </div>
          );
        }, this)}
      </div>
    );
  }
}

export default DrinksList;
