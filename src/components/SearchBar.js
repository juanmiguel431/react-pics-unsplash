import React from "react";

class SearchBar extends React.Component {
  state = {term: ''}

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value.toUpperCase()});
  }

  onFormSubmit = function (event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="">Image Search</label>
              <input type="text" value={this.state.term} onChange={this.onInputChange}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
