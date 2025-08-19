import React, { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  // Define state variables using the useState hook
  const [position, setPosition] = useState('top'); // State for tooltip position
  const [hovering, setHovering] = useState(false); // State for hover status

  // Function to handle clicks on position buttons
  const handleClick = (pos) => {
    setPosition(pos); // Update the position state when a button is clicked
  };

  // Function to handle mouse enter event on the "Hover Over Me!!" button
  const handleMouseEnter = () => {
    setHovering(true); // Set hovering state to true when the mouse enters the button
  };

  // Function to handle mouse leave event on the "Hover Over Me!!" button
  const handleMouseLeave = () => {
    setHovering(false); // Set hovering state to false when the mouse leaves the button
  };

  return (
    <div className="App">
      <div className="btn-position">
        <div className="grp-name">Select position of hovering!!</div>
        {/* Buttons to select tooltip position */}
        <button
          className={position === 'top' ? 'btn active' : 'btn'} // Conditional class based on position state
          onClick={() => handleClick('top')} // Handle click event and set position to 'top'
        >
          top
        </button>
        <button
          className={position === 'left' ? 'btn active' : 'btn'} // Conditional class based on position state
          onClick={() => handleClick('left')} // Handle click event and set position to 'left'
        >
          left
        </button>
        <button
          className={position === 'right' ? 'btn active' : 'btn'} // Conditional class based on position state
          onClick={() => handleClick('right')} // Handle click event and set position to 'right'
        >
          right
        </button>
        <button
          className={position === 'down' ? 'btn active' : 'btn'} // Conditional class based on position state
          onClick={() => handleClick('down')} // Handle click event and set position to 'down'
        >
          down
        </button>
      </div>
      <div id="button-container">
        {/* Button to trigger tooltip */}
        <button
          className="btn hover-btn"
          onMouseOver={handleMouseEnter} // Handle mouse hover event and set hovering to true
          onMouseOut={handleMouseLeave} // Handle mouse leave event and set hovering to false
        >
          Hover Over Me!!
        </button>
        {/* Conditional rendering of Tooltip component */}
        {hovering && <Tooltip position={position} />} {/* Render the Tooltip when hovering is true */}
      </div>
    </div>
  );
}

export default App;
