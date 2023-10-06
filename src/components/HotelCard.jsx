import React from "react";
import { home, bathtub, bedi } from "../assets";
import { Button } from "./";
import { Link, useParams } from "react-router-dom";

const HotelCard = ({ id, name, room, bed, price, Image, to , description }) => {
  const { id: hotelId } = useParams();

  return (
    <div
      id="main card"
      className="flex flex-1 flex-col w-full max-sm:w-full m-5 overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div
        id="image"
        className="h-[250px] xl:h-[300px]  w-auto object-cover overflow-hidden"
      >
        <img src={Image} alt={name} className="h-full w-full" />
      </div>
      <div id="typography" className="flex flex-col p-4">
        <h3 className="font-semibold font-young text-2xl sm:text-lg md:text-base lg:text-xl  mb-2">
          {name}
        </h3>

        <div
          id="more info"
          className="flex flex-row gap-8 m-2 pb-6 border-b-4 border-b-primary-light"
        >
          <span className="flex-center flex-col">
            <img src={home} alt="" className=" h-5 w-5" />
            <span className="mt-3 text-sm lg:text-base text-primary-dark font-roboto">
              {room} Room
            </span>
          </span>
          <span className="flex-center flex-col">
            <img src={bathtub} alt="" className="h-5 w-5" />
            <span className="mt-3 text-sm lg:text-base text-primary-dark font-roboto">
              1 Bath
            </span>
          </span>
          <span className="flex-center flex-col">
            <img src={bedi} alt="" className="h-5 w-5" />
            <span className="mt-3 text-sm lg:text-base text-primary-dark font-roboto">
              {bed} Bed
            </span>
          </span>
        </div>
        {hotelId && (
           <span className="mt-3 text-sm lg:text-base font-young text-primary-dark font-roboto border-b-4 border-b-primary-light pb-6">
           {description}
         </span>
        )}
           
      </div>
      <div
        id="pricing"
        className="flex-start p-4 gap-8 text-2xl sm:text-xl  lg:text-2xl"
      >
        <h3 className="font-semibold text-secondary-dark py-3 font-roboto whitespace-normal mb-2">
          ${price}{" "}
          <span className="text-primary text-xl sm:text-lg lg:text-xl">
            /month
          </span>
        </h3>
        <div className="flex-grow"></div>{" "}
        <div className="text-lg mr-2">
          {hotelId ? (
            <Link to={to}>
              <Button title="Browse All Hotels" />
            </Link>
          ) : (
            <Link to={`/${name}/${id}`}>
              <Button title="Read More" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
