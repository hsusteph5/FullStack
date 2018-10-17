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

    </div>
  );
}
