import React from "react";
import { Link, useParams } from "react-router-dom";
import { Hotels } from "../constant/Hotels";
import { Button, HotelCard } from "./";

const HotelDetailed = () => {
  const { name } = useParams();

  let selectedHotel = null;

  // Iterate through each city's hotels to find a match by name
  for (const city in Hotels) {
    const cityHotels = Hotels[city];
    const foundHotel = cityHotels.find(
      (hotel) => hotel.name.toLowerCase() === name.toLowerCase()
    );

    if (foundHotel) {
      selectedHotel = foundHotel;
      break; // Stop searching once a match is found
    }
  }
  const cityKey = Object.keys(Hotels).find((key) =>
    Hotels[key].some((hotel) => hotel.name.toLowerCase() === name.toLowerCase())
  );

  return (
    <section
      id="hoteldetailpage"
      className="py-8 px-4 md:px-8 flex justify-center items-center overflow-hidden"
    >
      <div>
        <HotelCard
          key={selectedHotel.id}
          {...selectedHotel}
          to={`/Home/${cityKey}`}
        />
      </div>
    </section>
  );
};

export default HotelDetailed;
