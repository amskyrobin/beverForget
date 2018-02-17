import React from "react";
import mockData from "../../data/mockJSON.json";
import DrinkingEstablishment from "./drinkingEstablishment.js";

class Container extends React.Component {

  constructor(props){
    super(props)
  }


render(){
  return (
    < DrinkingEstablishment />
    )
}
}

export default Container;