import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchBarSubmit(term) {
    axios.get('/search/photos', {
      baseURL: 'https://api.unsplash.com',
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID shSjqNTe8M1pW8iXI-rP8eJr9CZh02HmuoHn9YNokjc',
        'Accept-Version': 'v1'
      },
      params: {query: term}
    }).then(response => {
      console.log(response.data.results);
    });
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
