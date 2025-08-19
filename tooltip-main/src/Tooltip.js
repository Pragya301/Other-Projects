import React from 'react';

const Tooltip = ({ position }) => (
  <div className={`tooltip ${position}`}>
    Thanks for hovering "{position}" position!
  </div>
);

export default Tooltip;

