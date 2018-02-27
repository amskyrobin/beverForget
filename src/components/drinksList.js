import React from "react";
import mockData from "../../data/mockJSON.json";

const DrinksList = function(props) {
  console.log("props", props);

  // for (item in props.drinksList) {
  //   console.log("item:", item);
  // }

  for (var i = 0; i < props.drinksList.length; i++) {
    console.log(props.drinksList[i].name);
  }

  return (
    <div>
      <p>hello im rendering</p>
      <p>{props.name}</p>
    </div>
  );
};

export default DrinksList;
