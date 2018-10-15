import React from 'react';
import tea from '../../../app/assets/images/tea.jpg';

const BusinessesIndexItems = ({ business }) => {
  function parsingStreet(str) {
    let index = str.indexOf('San Francisco');
    return str.slice(0, index);
  }

  function parsingCity(str){
    let index = str.indexOf('San Francisco');
    return str.slice(index);
  }

  function parsingPrice(int) {
    let priceStr = ""
    for(let i = 0; i < int; i++) {
      priceStr += "$";
    }
    return priceStr;
  }


//place holder for create Stars
  function createStars() {
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

  return (
    <div className="business-index-items">
      <div className="business-index-items-container">

        <img src={tea}></img>



        <div className="main-businesses">
          <h2> { business.name } </h2>
          <div className ="main-businesses-content">

            <div className="business-reviews-info">


              <h3> { createStars()} </h3>
              <h3> { parsingPrice(business.price)}</h3>

            </div>

            <ul className="business-index-items-info">
              <li> { parsingStreet(business.address) } </li>
              <li> { parsingCity(business.address) } </li>
              <li> { business.phone } </li>
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

export default BusinessesIndexItems;
