import React from "react";


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
      <div>
        <h1> HELLO </h1>
        { name }
        <form>
          <div className="businesses-stars-reviews">

            <div className="user-star grey-star" onClick={this.updateRating(1)}>
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star grey-star" onClick={this.updateRating(2)}>
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star grey-star" onClick={this.updateRating(3)}>
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star grey-star" onClick={this.updateRating(4)}>
              <i className="fas fa-star"></i>
            </div>

            <div className="user-star grey-star" onClick={this.updateRating(5)}>
              <i className="fas fa-star"></i>
            </div>

          </div>

          <input
            placeholder="Your review helps others learn about great local busineses"
            onChange={this.updateDescription}
            value={this.state.description}
            >
          </input>

          <button type="submit" onClick={this.submitReview}>Post a Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
