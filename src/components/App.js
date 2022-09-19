import React from "react";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = {images: [], isLoading: false}

  onSearchBarSubmit = async (term) => {
    this.setState({isLoading: true});
    const response = await unsplash.get('/search/photos', {params: {query: term}});

    await new Promise(r => setTimeout(r, 5000));
    this.setState({images: response.data.results, isLoading: false});
  }

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchBarSubmit}/>
          <br/>
          IsLoading: {this.state.isLoading ? 'Yes' : 'No'}
          <br/>
          Found: {this.state.images.length} images
        </div>
      </div>
    );
  }
}

export default App;
