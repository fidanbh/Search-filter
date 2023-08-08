import React from "react";
import { useState } from "react";

import "./filterMenu.css";

const FilterMenu = () => {
  const data = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  const [state, setState] = useState(data);

  console.log(state);
  function getFilterList(event) {
    let text = event.target.value;
    let newData = [...data];
    newData = newData.filter((list) => {
      return list.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });
    setState(newData);
  }
  return (
    <>
      <div>
        <input onChange={getFilterList} />
      </div>
      <div className="unFilteredList">
        <ol>
          {state.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default FilterMenu;
