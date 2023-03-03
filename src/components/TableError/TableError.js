import './TableError.scss';
import React from 'react';

function TableError({ errorParam }) {
  return (
    <div className="TableError">
      {errorParam}
    </div>
  );
}
export default TableError;
