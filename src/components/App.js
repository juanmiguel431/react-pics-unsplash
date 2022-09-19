import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchBarSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchBarSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
