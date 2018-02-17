import React from "react";
import mockData from "../../data/mockJSON.json";

class DrinkingEstablishment extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    var jsonString = mockData.drinkingEstablishment;
    
    console.log(jsonString)
 
  }


  // getDrinkingEstablishment(){
  //   var jsonString = mockData;
  //   var drinkingEstablishment = JSON.parse(jsonString);
  //   console.log(drinkingEstablishment)
  //   return drinkingEstablishment
  // }

  render(){
    return (
      <div>
      <h1>{}</h1>
      </div>
      )
  }
}

export default DrinkingEstablishment;