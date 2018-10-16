import React from 'react';
import { withRouter } from "react-router";

class CategoriesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
    this.searchBusinesses = this.searchBusinesses.bind(this);
  }


//fetches the business by category
//then pushes to the new url
//must fetch the business {name: category}
  searchBusinesses(category){
    return (e) => {
      e.preventDefault();
      this.setState({name: category});
      this.props.fetchBusinesses(this.state)
      .then(() => this.props.history.push({pathname:'/businesses', search: `?name=${this.state.name}`}));
    }
  }

  render() {
    return (
      <div className="background-search-icons">
        <div className="search-icons-container" onClick={this.searchBusinesses('tea')}>
          <i className="fas fa-coffee"></i>
          <button className="search-icon-button">Tea</button>
        </div>
        <div className="search-icons-container" onClick={this.searchBusinesses('cafe')}>
          <i className="fas fa-store"></i>
          <button className="search-icon-button">Cafe</button>
        </div>

        <div className="search-icons-container" onClick={this.searchBusinesses('dessert')}>
          <i className="fas fa-birthday-cake"></i>
          <button className="search-icon-button">Dessert</button>
        </div>

      </div>
    );
  }

}

export default withRouter(CategoriesIndex);
