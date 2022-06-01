import React from 'react';
import loading from '../../../public/images/gif/loading-arrow.gif';

export const Loading = () => {
  return (
    <div className='loading'>
        <h4>rooms data loading...</h4>
        <img src={loading} alt="loading" />
    </div>
  )
};
