import React from "react";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ImageList from "./ImageList";

class App extends React.Component {
  state = {images: [], isLoading: false}

  onSearchBarSubmit = async (term) => {
    this.setState({isLoading: true});
    const response = await unsplash.get('/search/photos', {params: {query: term}});
    this.setState({images: response.data.results, isLoading: false});
  }

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchBarSubmit}/>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
