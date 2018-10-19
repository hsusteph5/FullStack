import React from 'react';

//callback for this.props.updateRating goes back to the parent container
class StarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      color: "",
      hoverRating: 0,
      hoverColor: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.getClass = this.getClass.bind(this);
  }

//click handler to send rating to parent container, MUST BE A CALLBACK
  handleClick(rating, color) {
    this.setState({ rating, color }, () =>{
      this.props.updateRating(rating);
    });
  }

//store the hoverRating / hoverColor as a local state
  hover(hoverRating, hoverColor) {
    this.setState({ hoverRating, hoverColor })
  }
//compare the starNumber to get the color / default color
//as you go down the classes, it compares it's star number to current / selected state (starNum)
//adds the coloring class accordingly
  getClass(starNumber) {
    //for the hover handler
    //if hoverRating is being specified / if it is being hovered
    if (this.state.hoverRating > 0) {
      if (starNumber <= this.state.hoverRating) {
        return `user-star ${this.state.hoverColor} star${starNumber}`;
      } else {
        return `user-star grey-star star${starNumber}`;
      }
      //setting the click handler
    } else{
      if (starNumber <= this.state.rating) {
        return `user-star ${this.state.color} star${starNumber}`;
      } else {
        return `user-star grey-star star${starNumber}`;
      }
    }
  }



//needs to be offset by 1 because it will not render a color
  render(){
    let colors = ['pale-yellow', 'yellow-star', 'orange-star', 'coral-star', 'red-star'];
    return (
      <div className="businesses-stars-reviews"onMouseLeave={() => this.hover(0, "")}>
        {colors.map((color, idx) => (
          <div
            key={idx + 1}
            className={this.getClass(idx + 1)}
            onMouseEnter={() => this.hover(idx + 1, color)}
            onClick={() => this.handleClick(idx + 1, color)}>
            <i className="fas fa-star"></i>
          </div>
        ))}
      </div>
    );
  }
}


export default StarComponent;
