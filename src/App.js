import "./App.css";

import FilterMenu from "./Component/FilterMenu/FilterMenu";

function App() {
  function getFilter(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="App">
     
      <FilterMenu />
    </div>
  );
}

export default App;
