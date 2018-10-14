import React from 'react';

const BusinessesIndexItems = ({ business }) => {
  return (
    <ul>
      <li> { business.name } </li>
      <li> { business.address } </li>
      <li> { business.phone } </li>
    </ul>
  );
}

export default BusinessesIndexItems;
