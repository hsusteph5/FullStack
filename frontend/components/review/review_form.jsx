import React from "react";
import { Link } from 'react-router-dom';
import icon from '../../../app/assets/images/user-icon.png';
import yip from '../../../app/assets/images/yip-logo.png';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: "",
      description: "",
      business_id: this.props.match.params.businessId
    }
    this.submitReview = this.submitReview.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.business_id);
  }

//updates the local state with the description
  updateDescription(e){
    this.setState({description: e.target.value});
  }

//udpates the rating with a callback (updates the local state and also prevents
//from being clicked on)
  updateRating(rating){
    return (e) => {
      e.preventDefault();
      this.setState({rating: rating});
    }
  }


//handles the actual creation of the post
  submitReview(e){
    e.preventDefault();
    this.props.createReview(this.state)
      // .then(res => console.log(res))
      .then(review => this.props.history.push(`/businesses/${this.props.business.id}`));
  }

  render(){
    //need to check if the business exists before displaying it
    let name;
    if (this.props.business){
      name = (
        <h1>{this.props.business.name}</h1>
      );
    }
    // debugger;
    return(
      <div className="create-review-form">
        <div className="create-review-form-nav-bar">
          <div className="nav-bar">
            <nav className="nav-bar-container">
              <div className="left-bar-navigation">
                <ul>
                  <li className="nav-input-size">
                      <Link to="/"><img className="business-logo" src={yip}></img></Link>
                  </li>
                </ul>
              </div>

              <div className="right-bar-navigation">
                <ul>
                    <li className="user-icon">
                        <img onClick = {() => this.props.openModal('dropdown')} src={icon}></img>
                    </li>
                    <li>

                      <div className='dropdown-button'>
                        <i className="fas fa-sort-down"></i>
                      </div>

                    </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>

        <div className="create-review-form-background">

          { name }
          <form className="create-review-form-container">
            <div className="businesses-stars-reviews">

              <div className="user-star grey-star star1" onClick={this.updateRating(1)}>
                <i className="fas fa-star"></i>
              </div>
              <div className="user-star grey-star star2" onClick={this.updateRating(2)}>
                <i className="fas fa-star"></i>
              </div>
              <div className="user-star grey-star star3" onClick={this.updateRating(3)}>
                <i className="fas fa-star"></i>
              </div>
              <div className="user-star grey-star star4" onClick={this.updateRating(4)}>
                <i className="fas fa-star"></i>
              </div>

              <div className="user-star grey-star star5" onClick={this.updateRating(5)}>
                <i className="fas fa-star"></i>
              </div>

            </div>

            <textarea
              placeholder="Your review helps others learn about great local busineses"
              onChange={this.updateDescription}
              value={this.state.description}
              className="review-form-description"
              >
            </textarea>

          </form>
          <button type="submit" onClick={this.submitReview} className="create-review-button">Post a Review</button>


        </div>
      </div>
    );
  }
}

export default ReviewForm;
