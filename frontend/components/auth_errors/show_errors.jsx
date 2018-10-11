import React from 'react';
import ShowErrorsIndex from './show_errors_index';

const ShowErrors = ({ errors }) => {
  let listErrors = errors.map(
    (error, idx) => <li key={idx}> { error } </li>);

    // <ShowErrorsIndex key={idx} error={error} />);
  return (
    <div className="signup-errors">
      <ul>
        { listErrors }
      </ul>
    </div>
  );
}

export default ShowErrors;


// { listErrors }
