import React from 'react';
import { withRouter } from "react-router";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.searchBusinesses = this.searchBusinesses.bind(this);
  }

  updateSearch(e) {
    this.setState({name: e.target.value});
  }

  searchBusinesses(e){
    e.preventDefault();
    let state = this.state;
    this.props.fetchBusinesses(this.state)
      .then(() => this.props.history.push({pathname:'/businesses', search: `?name=${state.name}`}));
  }

  render() {
    return (<div className="search-fields-container">

      <div className="input-border-box">

        <div className="Find"><p>Find</p></div>

        <input type="text"
          className="search-bar"
          placeholder="cafes, tea, hotels..."
          onChange={this.updateSearch}
          value = {this.state.name}
        >
        </input>

        <div className="line"><p>|</p></div>
        <div className="Near"><p>Near</p></div>
        <input type="text" className="search-bar" placeholder="Financial District"></input>
        <button className="search-icon" onClick={this.searchBusinesses}><i className="fas fa-search"></i></button>

      </div>
    </div>);
  }

}

const SearchWithRouter = withRouter(Search);
export default SearchWithRouter;