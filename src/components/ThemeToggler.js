import React from 'react';

const ThemeToggler = ({themeColor, handleClick}) => {
  return(
    <div class="theme-toggler">
		  <input type="button" onClick={handleClick} value={`${themeColor}`} />
    </div>
  )
};

export default ThemeToggler;
