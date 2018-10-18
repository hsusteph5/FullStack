import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CategoriesContainer from '../search/categories_container';
import titleize  from 'titleize';
import { createStars, parsingPrice, businessCategories, parsingCity, parsingStreet } from '../../util/parsing_manager.jsx'
import sandwich from '../../../app/assets/images/sandwich.png';
import drinkingCoffee from '../../../app/assets/images/drinking-coffee.png';
import cafeFront from '../../../app/assets/images/cafe-front.png';
import googleMap from '../../../app/assets/images/google-map.png';
import ReviewIndex from '../review/review_index';


class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
    this.businessCategories = this.businessCategories.bind(this);
    this.createDollars = this.createDollars.bind(this);
    this.createDollarWords = this.createDollarWords.bind(this);
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

  componentDidMount() {
    let int = parseInt(this.props.match.params.businessId);
    this.props.fetchBusiness(int);
  }

  createDollars() {
    if(this.props.business.price === 1) {
      return (
        <li>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
        </li>
      );
    } else if (this.props.business.price === 2){
      return (
        <li>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
        </li>
      );
    } if(this.props.business.price === 3) {
      return (
        <li>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign grey-dollar"></i>
        </li>
      );
    } else if (this.props.business.price === 4){
      return (
        <li>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
          <i className="fas fa-dollar-sign green-dollar"></i>
        </li>
      );
    }
  }


  createDollarWords() {
    if(this.props.business.price === 1) {
      return (
        <li>
          <span>Price Range <span className="bold-health">Over $10</span></span>
        </li>
      );
    } else if (this.props.business.price === 2){
      return (
        <li>
          <span>Price Range <span className="bold-health">$11-30</span></span>
        </li>
      );
    } if(this.props.business.price === 3) {
      return (
        <li>
          <span>Price Range <span className="bold-health">$31-60</span></span>
        </li>
      );
    } else if (this.props.business.price === 4){
      return (
        <li>
          <span>Price Range <span className="bold-health">Above $61</span></span>
        </li>
      );
    }
  }

  render() {
    // debugger;
    let businessInfo;
    let businessAddress;
    let dollars;
    let dollarsInfo;
    let reviewIndex;
    if (this.props.business){
      dollars = this.createDollars();
      dollarsInfo = this.createDollarWords();
      reviewIndex = (
        <div>
          <ReviewIndex users={this.props.users} reviews={this.props.reviews}/>
        </div>
      )
      businessInfo = (
        <div>
          <ul className="business-show-list">
            <li><h1>{this.props.business.name}</h1></li>
            <li className="show-stars-alignment">{createStars()}<span>{this.props.reviews.length} Reviews</span></li>
            <li className="business-price">{parsingPrice(this.props.business.price)}</li>
            {this.businessCategories(this.props.business.categories)}
          </ul>
        </div>
      );
      businessAddress = (
        <ul>
          <li><img src={googleMap}></img></li>
          <li className="show-address"><i className="fas fa-map-marker-alt"></i>{parsingStreet(this.props.business.address)}</li>
          <li className="show-address"><span className="extra-padding-marker"></span>{parsingCity(this.props.business.address)}</li>
          <li className="show-phone"><i className="fas fa-phone"></i>{this.props.business.phone}</li>
          <li className="show-link"><i className="fas fa-external-link-alt"></i><a target="_blank" href={`http://${this.props.business.url}`}>{this.props.business.url}</a></li>
        </ul>
      );
    }
    return (
      <div>
        <div className="business-nav-background">
          <div className="business-nav-container">
            <NavBarContainer />
          </div>
        </div>


        <div className="background-categories-container">
          <CategoriesContainer />
          <button className="categories-write-review">
            <i className="fas fa-pencil-alt"></i>
            Write a Review
          </button>
        </div>


        <div className="background-business-show-info-container">
          <div className="business-show-header">

            <div className="business-show-info-container">
              <div className="business-show-info">
                { businessInfo }
              </div>
              <button className="business-show-review"><i className="fas fa-star"></i>Write a Review</button>

            </div>

            <div className="show-images-reel">
              <div className="business-address">
                { businessAddress }

              </div>
              <img src={ sandwich }></img>
              <img src={ drinkingCoffee }></img>
              <img src={ cafeFront }></img>
            </div>



          </div>
        </div>

        <div className="show-page-content-margin">
          <div className="show-page-content-container">
            <div className="review-index-container">
              { reviewIndex }
            </div>
            <div>
              <div className="health-score-info">
                <ul className="health-icon-list">
                  <li><i className="far fa-clock"></i></li>
                  <li><i className="fas fa-utensils"></i></li>
                  { dollars }
                  <li><i className="far fa-plus-square"></i></li>

                </ul>
                <ul className="health-icon-list-info">
                  <li><span>Today <span className="bold-health">12:00pm - 10:00pm</span></span></li>
                  <li><span className="bold-health blue-health">Full Menu</span></li>
                  { dollarsInfo }
                  <li><span><span className="bold-health blue-health">Health Score</span> 100 out of 100</span></li>


                </ul>
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default BusinessShow;
