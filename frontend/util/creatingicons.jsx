import React from 'react';

const createDollarWords = (price) => {
    if(price === 1) {
      return (
        <li>
          <span>Price Range <span className="bold-health">Over $10</span></span>
        </li>
      );
    } else if (price === 2){
      return (
        <li>
          <span>Price Range <span className="bold-health">$11-30</span></span>
        </li>
      );
    } if(price === 3) {
      return (
        <li>
          <span>Price Range <span className="bold-health">$31-60</span></span>
        </li>
      );
    } else if (price === 4){
      return (
        <li>
          <span>Price Range <span className="bold-health">Above $61</span></span>
        </li>
      );
    }
}

export default createDollarWords;

