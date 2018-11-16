import React from 'react';

export const createDollarWords = (price) => {
  let priceWords = ['Inexpensive', 'Moderate', 'Pricey', 'Above $61'];
  return (
    <li>
      <span>Price Range <span className="bold-health">{priceWords[price - 1]}</span></span>
    </li>
  );
}

export const createDollars = (price) => {
  let priceArr = [1, 2, 3, 4];
  let greenDollar = "fas fa-dollar-sign green-dollar";
  let greyDollar = "fas fa-dollar-sign grey-dollar";
  return(
    <li>
      { priceArr.map((dollars, idx) => {
        if (idx + 1 <= price ) {
          return (<i key={idx} className={greenDollar}></i>);
        } else {
          return (<i key={idx} className={greyDollar}></i>); 
        }})
      }
    </li>
  );
}

