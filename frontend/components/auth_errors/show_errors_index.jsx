import React from 'react';

const ShowErrorsIndex = ({error, id}) => {
  return (
    <li key={id} className="signup-errors-list">
      { error }
    </li>
  );
}

export default ShowErrorsIndex;
