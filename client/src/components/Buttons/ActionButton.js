import React from 'react';
import './Button.css';

function ActionButton({className, click}) {

  return (
    <button className="actionButton" onClick={(e) => click(e)}>
      <i className={className} aria-hidden="true"></i>
    </button>
  )
}

export default ActionButton;