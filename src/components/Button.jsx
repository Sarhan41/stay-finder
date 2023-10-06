import React from "react";

const Button = ({ title, isSelected, handleClick, image }) => {
  const getButtonClasses = () => {
    // Base classes that are common for all buttons
    let classes = `
      font-roboto text-md xs:text-base md:text-lg font-medium rounded-full
      flex-center gap-1 px-4 xs:gap-4 xs:px-4 py-3
    `;
  
    // Add styles based on conditions
    if (isSelected === title) {
      classes += " bg-secondary-dark text-white font-bold";
    } else if (["New York", "Mumbai", "Paris", "London"].includes(title)) {
      // Styles for specific titles
      classes += " bg-primary-light hover:bg-primary";
    } else if (title === "View More" || title === "Show Less") {
      // Styles for "View More"and "Show Less" title
      classes += `
        bg-secondary-dark text-white font-bold
        hover:bg-secondary-light hover:font-extrabold
        transition-colors duration-300 ease-in-out py-3
      `;
    } else if (title === "Read More" || title === "Browse All Hotels") {
      // Styles for "Read More" title
      classes += `
        text-secondary-dark border-secondary-light border-2
        bg-white hover:bg-secondary-dark hover:text-white
        font-bold font-roboto 
      `;
    }
  
    return classes;
  };
  
  return (
    <button
      className={getButtonClasses()}
      onClick={handleClick ? () => handleClick(title) : undefined}
    >
      <div className="flex items-center space-x-2">
        {image && <img src={image} alt="" className="h-6 w-6" />}
        <span>{title}</span>
      </div>
    </button>
  );
};

export default Button;
