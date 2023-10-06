import React from "react";
import {NavBar} from "./";

const Header = () => {
  return (
    <section>
      <div id="heading" className="flex-center flex-col mt-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-primary-dark font-semibold font-roboto">
          Featured Listed Property
        </h3>
        <h6 className="text-xs sm:text-sm md:text-base font-young font-thin text-primary mt-2 sm:mt-4  ml-2 sm:ml-4  hidden md:block">
          &nbsp;&nbsp;&nbsp;Real estate can be bought, sold, leased, or rented, and can be a{" "}
          <br />
          valuable investment opportunity. The value of real estate can be...
        </h6>
      </div>

      <NavBar />
    </section>
  );
};

export default Header;
