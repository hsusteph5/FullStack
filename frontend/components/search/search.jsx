import React from 'react';

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     name: "",
  //   }
  //   this.udpateSearch = this.updateSearch.bind(this);
  // }

  // updateSearch(e) {
  //   console.log(this.state);
  //   this.setState({name: e.target.value});
  // }

  render() {
    return (<div className="search-fields-container">

      <div className="input-border-box">

        <div className="Find"><p>Find</p></div>

        <input type="text"
          className="search-bar"
          placeholder="cafes, tea, hotels...">
        </input>

        <div className="line"><p>|</p></div>
        <div className="Near"><p>Near</p></div>
        <input type="text" className="search-bar" placeholder="Financial District"></input>
        <button className="search-icon"><i className="fas fa-search"></i></button>

      </div>
    </div>);
  }

}

export default Search;
