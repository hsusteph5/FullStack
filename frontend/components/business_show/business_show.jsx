import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CategoriesContainer from '../search/categories_container';
import titleize  from 'titleize';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.createStars = this.createStars.bind(this);
    this.parsingPrice = this.parsingPrice.bind(this);
    this.businessCategories = this.businessCategories.bind(this);
  }

  createStars() {
    return (
      <div className="businesses-stars-reviews">

        <div className="user-star">
          <i className="fas fa-star"></i>
        </div>
        <div className="user-star">
          <i className="fas fa-star"></i>
        </div>
        <div className="user-star">
          <i className="fas fa-star"></i>
        </div>
        <div className="user-star">
          <i className="fas fa-star"></i>
        </div>

      </div>
    );
  }

  parsingPrice(int) {
    let priceStr = ""
    for(let i = 0; i < int; i++) {
      priceStr += "$";
    }
    return priceStr;
  }

  businessCategories(categories){
    // debugger;
    return categories.map((category, idx) => {
      if(idx !== categories.length - 1) {
        return (
          <li key={idx} className="businessCategories">
            { titleize(category) },
          </li>);
        } else {
          return (
            <li key={idx} className="businessCategories">
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

  render() {
    let businessInfo = (this.props.business) ? (
      <div>
        <ul className="business-show-info">
          <li><h1>{this.props.business.name}</h1></li>
          <li>{this.createStars()}</li>
          <li>{this.parsingPrice(this.props.business.price)}</li>
          {this.businessCategories(this.props.business.categories)}
        </ul>
      </div>
    ): ("")
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
          <div className="business-show-info-container">

            { businessInfo }
            <button>Write a Review</button>
          </div>


        </div>
      </div>
    );
  }
}

export default BusinessShow;
