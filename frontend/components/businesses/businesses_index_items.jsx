import React from 'react';
import tea from '../../../app/assets/images/tea.jpg';
import { withRouter } from "react-router";
import titleize  from 'titleize';
import { parsingStreet, parsingCity, parsingPrice, createStars } from '../../util/parsing_manager.jsx';
import { Link } from 'react-router-dom';

class BusinessesIndexItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      query: ""
    }
    this.businessCategories = this.businessCategories.bind(this);
    this.searchBusinesses = this.searchBusinesses.bind(this);
  }

//on the Click of the category
//1. fetches the businesses (associated with the category)
//2. pushes to the new path
  searchBusinesses(category){
    return (e) => {
      e.preventDefault();
      this.setState({name: category});
      this.props.fetchBusinesses(this.state)
        .then(() => this.props.history.push(
          { pathname:'/businesses', search: `?name=${category}`}
        ));
    }
  }

  //creating a function that will render all the categories
  businessCategories(categories){
    // debugger;
    return categories.map((category, idx) => {
      if(idx !== categories.length - 1) {
        return (
          <li key={idx} className="businessCategories" onClick={this.searchBusinesses(category)}>
            { titleize(category) },
          </li>);
        } else {
          return (
            <li key={idx} className="businessCategories" onClick={this.searchBusinesses(category)}>
              { titleize(category) }
            </li>);
          }
        }
      );
    }


  render() {
    this.business = this.props.business
    return (
      <div className="business-index-items">
        <div className="business-index-items-container">

          <img src={tea}></img>

          <div className="main-businesses">
            <h2> <Link to={`/businesses/${this.business.id}`}>{ this.business.name } </Link></h2>
            <div className ="main-businesses-content">

              <div className="business-reviews-info">


                <h3> { createStars()} </h3>
                <ul>
                  <li>{ parsingPrice(this.business.price)}</li>
                  <li className="business-circle"> <i className="fas fa-circle"></i> </li>
                  { this.businessCategories(this.business.categories) }
                </ul>

              </div>

              <ul className="business-index-items-info">
                <li> { parsingStreet(this.business.address) } </li>
                <li> { parsingCity(this.business.address) } </li>
                <li> { this.business.phone } </li>
              </ul>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              In et lectus vitae metus euismod pretium in a urna. Fusce mi lacus,
            </p>


          </div>



        </div>
      </div>
    );
  }
}

export default withRouter(BusinessesIndexItems);
