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
  const weddingDate = new Date(config.weddingDate);
  const [ceremonyImages, setCeremonyImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const imagesObj = {};

      for (const ceremony of config.ceremonies) {
        // Automatically import all images in the folder
        const images = import.meta.glob(
          `./public${ceremony.imageFolder || "/images/" + ceremony.name.toLowerCase() + "/" }*`,
          { eager: true, as: "url" }
        );
        imagesObj[ceremony.name] = Object.values(images);
      }

      setCeremonyImages(imagesObj);
    };

    loadImages();
  }, []);

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
                <img src={img} alt={`${ceremony.name} ${i + 1}`} className="slide-img"/>
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
