import React from 'react';

const BusinessesIndexItems = ({ business }) => {
  function parsingStreet(str) {
    let index = str.indexOf('San Francisco');
    return str.slice(0, index);
  }

  function parsingCity(str){
    let index = str.indexOf('San Francisco');
    return str.slice(index);
  }

  return (
    <div className="business-index-items">
      <h2> { business.name } </h2>
      <ul className="business-index-items-info">
        <li> { parsingStreet(business.address) } </li>
        <li> { parsingCity(business.address) } </li>
        <li> { business.phone } </li>
      </ul>
    </div>
  );
}

export default BusinessesIndexItems;
