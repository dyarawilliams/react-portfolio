import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ image, text1, text2 }) => {
  return (
    <div className="floating-div">
      <div>
        <img src={image} alt="" width="50" height="50" />
      </div>
      <div>
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </div>
    </div>
  );
}

export default FloatingDiv;