import React from 'react';

const BusinessesIndex = ({ business }) => {
  return (
    <ul>
      <li> { business.name } </li>
      <li> { business.address } </li>
      <li> { business.phone } </li>
    </ul>
  );
}

export default BusinessesIndex;
