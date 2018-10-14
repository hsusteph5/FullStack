import React from 'react';

const BestInSF = (props) => {
  return (
    <div className="best-in-sf-container">
      <p className="best"> Best { props.name } </p>
      <p> in San Fransisco, CA</p>
    </div>
  );
}

export default BestInSF;
