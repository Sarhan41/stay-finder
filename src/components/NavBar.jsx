import React, { useState, useEffect } from "react";
import { Button } from "./";
import { useNavigate, Link, useParams } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState("New York");

  useEffect(() => {
    // Check if there is a title parameter in the URL and set isSelected accordingly
    if (title) {
      setIsSelected(title);
    } else {
      setIsSelected("New York");
    }
  }, [title]); // Only re-run this effect when the title parameter changes

  const handleChange = (newTitle) => {
    setIsSelected(newTitle);
    navigate(`/Home/${newTitle}`);
  };

  const handleLogoClick = () => {
    setIsSelected("New York");
  };

  return (
    <nav className="w-full border-b border-primary-dark">
      <div className="flex-between px-4 pt-4 sm:px-6 xs:justify-center md:justify-between md:px-8 md:pt-6 md:pb-2 lg:px-10 lg:pt-6 lg:pb-2">
        <div className="flex gap-6 pb-2 sm xs:gap-8 sm:gap-12 md:gap-8 lg:gap-8">
          <Button
            title="New York"
            isSelected={isSelected}
            handleClick={handleChange}
          />
          <Button
            title="Mumbai"
            isSelected={isSelected}
            handleClick={handleChange}
          />
          <Button
            title="Paris"
            isSelected={isSelected}
            handleClick={handleChange}
          />
          <Button
            title="London"
            isSelected={isSelected}
            handleClick={handleChange}
          />
        </div>
        <Link to="/" className="w-16 hidden md:block" onClick={handleLogoClick}>
          <img src={logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
