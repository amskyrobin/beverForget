import React from "react";
import mockData from "../../data/mockJSON.json";

class DrinkingEstablishment extends React.Component {

  constructor(props){
    super(props)
    this.state = {drinkingEstablishments: []}
  }



 

  componentDidMount() {
    var jsonString = mockData.drinkingEstablishment;
    console.log('jsonString', jsonString)
    for (var i = 0; i < jsonString.length; i++) {
      var drinkingEstablishment = jsonString[i];
      console.log('drinkingEstablishment', drinkingEstablishment)
      this.setState({
        drinkingEstablishments: drinkingEstablishment

      })
      console.log(this.state)
    }
  }






  render(){
    return (
      <div>
      <h1>{this.state.drinkingEstablishments.name}</h1>

      </div>
      )
  }
}

export default DrinkingEstablishment;