import React, { useEffect, useState } from "react";
import config from "./config.json";

// Swiper imports (v10+)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Countdown from "react-countdown";
import "./App.css";

function App() {
  const BASE_URL = import.meta.env.BASE_URL; // automatically /my-invite/ in production
  const weddingDate = new Date(config.weddingDate);
  const [ceremonyImages, setCeremonyImages] = useState({});

  useEffect(() => {
    const imagesObj = {};

    for (const ceremony of config.ceremonies) {
      // Map each image path to include BASE_URL
      imagesObj[ceremony.name] = (ceremony.images || []).map(
        (img) => `${BASE_URL}${img.replace(/^\/+/, "")}`
      );
    }

    setCeremonyImages(imagesObj);
  }, []);

  if (!config) return <div>Loading...</div>;

  return (
    <div className="container">
      <header className="header">
        <h1>{config.bride} ❤️ {config.groom}</h1>
        <h2>Wedding Date: {weddingDate.toDateString()}</h2>
        <Countdown date={weddingDate} />
      </header>

      {config.ceremonies.map((ceremony, idx) => (
        <section key={idx} className="ceremony">
          <h3>{ceremony.name}</h3>
          <p>{ceremony.date} at {ceremony.time}</p>
          <p>Venue: {ceremony.venue}</p>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {(ceremonyImages[ceremony.name] || []).map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${ceremony.name} ${i + 1}`} className="slide-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}

      <section className="venue-map">
        <h3>Venue Map</h3>
        <a href={config.venueMap} target="_blank" rel="noopener noreferrer">
          Open Google Map
        </a>
      </section>
    </div>
  );
}

export default App;
