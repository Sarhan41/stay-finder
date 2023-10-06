import React, { useState } from "react";
import { Hotels } from "../constant/Hotels";
import { useParams } from "react-router";
import { Button, HotelCard } from "./";
import { time } from "../assets/index";

const Home = () => {
  const { title } = useParams();
  const [hiddenbar, setHiddenbar] = useState(false);

  const handleMenu = () => setHiddenbar(!hiddenbar);
  let cityHotels;
  if (title) {
    const trimmedTitle = title.replace(/\s+/g, "");
    const city = Object.keys(Hotels).find(
      (key) => key.toLowerCase() === trimmedTitle.toLowerCase()
    );
    cityHotels = Hotels[city];
  } else {
    const city = "NewYork";
    cityHotels = Hotels[city];
  }

  const activeHotels = cityHotels.slice(0, 6);
  const hiddenHotels = cityHotels.slice(6, 9);
  const title2 = hiddenbar ? "Show Less" : "View More";

  return (
    <section className="mb-5 mx-5 mt-10">
      <div
        id="main cards"
        className="mt-16 grid justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-sm:flex-center overflow-hidden"
      >
        {activeHotels.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
      <div id="hiddenbar">
        {hiddenbar && (
          <div className="grid justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-sm:flex-center overflow-hidden">
            {hiddenHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
        )}
      </div>
      <div id="button" className="flex-center pt-6">
        {" "}
        <Button image={time} title={title2} handleClick={handleMenu} />{" "}
      </div>
    </section>
  );
};

export default Home;
