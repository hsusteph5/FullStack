import React from 'react';

export const parseSearch = (params) => {
    let equalIdx = params.indexOf('=');
    return params.slice(equalIdx + 1);
}

export const parsingStreet = (str) => {
  let index = str.indexOf('San Francisco');
  return str.slice(0, index);
}

export const parsingCity = (str) => {
  let index = str.indexOf('San Francisco');
  return str.slice(index);
}

export const parsingPrice = (int) => {
  let priceStr = ""
  for(let i = 0; i < int; i++) {
    priceStr += "$";
  }
  return priceStr;
}

export const createStars = () => {
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

      <div className="user-star">
        <i className="fas fa-star"></i>
      </div>

    </div>
  );
}

export const createRatingStars = (rating) => {
  let intRating = Math.round(parseFloat(rating));
  let stars;
  switch (intRating) {
    case 1:
      stars = (

        <div className="businesses-stars-reviews">

          <div className="user-star pale-yellow">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>

          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>

        </div>
      );
      break;
    case 2:
      stars = (

        <div className="businesses-stars-reviews">

          <div className="user-star yellow-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star yellow-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>

          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>

        </div>
      );
      break;
      case 3:
        stars = (

          <div className="businesses-stars-reviews">

            <div className="user-star orange-star">
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star orange-star">
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star orange-star">
              <i className="fas fa-star"></i>
            </div>
            <div className="user-star grey-star">
              <i className="fas fa-star"></i>
            </div>

            <div className="user-star grey-star">
              <i className="fas fa-star"></i>
            </div>

          </div>
        );
        break;
    case 4:
      stars = (

        <div className="businesses-stars-reviews">

          <div className="user-star coral-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star coral-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star coral-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star coral-star">
            <i className="fas fa-star"></i>
          </div>

          <div className="user-star grey-star">
            <i className="fas fa-star"></i>
          </div>

        </div>
      );
      break;
    default:
      stars = (

        <div className="businesses-stars-reviews">

          <div className="user-star red-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star red-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star red-star">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-star red-star">
            <i className="fas fa-star"></i>
          </div>

          <div className="user-star red-star">
            <i className="fas fa-star"></i>
          </div>

        </div>
      );
  }
  return stars;
}
