import React from 'react';

export default function Welcome( {message} ) {
  return (
        <div className="w-100 d-flex vh-100 justify-content-center align-items-center">
                <h3 className="writing"> { message } </h3>
        </div>
  )
}
