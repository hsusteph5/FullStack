import React from 'react';
import { withRouter } from "react-router";
import titleize  from 'titleize';
import { parsingStreet, parsingCity, parsingPrice, createRatingStars } from '../../util/parsing_manager.jsx';
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
    this.redirectShow = this.redirectShow.bind(this);
  }

//on the Click of the category
//1. fetches the businesses (associated with the category)
//2. pushes to the new path
//set state happens asynchronously, so you have to pass in a callback
//1. set state and THEN you fetch the business
  searchBusinesses(category){
    return (e) => {
      e.preventDefault();
      this.setState({name: category}, () => {
        this.props.fetchBusinesses(this.state)
        .then(
          () => this.props.history.push({ pathname:'/businesses', search: `?name=${category}`})
        )
      });
    }
  }

  //creating a function that will render all the categories
  businessCategories(categories){
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


//redirect to the show!
//the payload is keyed into payload (need to get the value from the Object)
    redirectShow(id){
      return (e) => {
        e.preventDefault();
        this.props.fetchBusiness(id)
          .then((payload) => {
            let id = Object.keys(payload.payload.businesses)[0];
            let parseId = parseInt(id);
            this.props.history.push(`/businesses/${parseId}`)
          });
      }
    }

    // <img src={tea}></img>
  render() {
    this.business = this.props.business
    let review = this.props.reviews[this.business.id];
    if (review === undefined) return '';
    return (
      <div className="business-index-items">
        <div className="business-index-items-container">

          <img style={{width: 225, height: 225, objectFit: 'cover'}} src={this.business.photoUrls[0]}></img>

          <div className="main-businesses">
            <button onClick={this.redirectShow(this.business.id)}>{ this.business.name }</button>
            <div className ="main-businesses-content">

              <div className="business-reviews-info">


                <h3> { createRatingStars(this.business.avg_rating)}

                </h3>
                <ul className="index-categories-list">
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
              {review.description}
            </p>


          </div>



        </div>
      </div>
    );
  }
}

export default withRouter(BusinessesIndexItems);
