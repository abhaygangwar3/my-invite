import { useState } from "react";
import config from "./config.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Vite base URL ("/" in dev, "/my-invite/" in production)
const BASE_URL = import.meta.env.BASE_URL;

// Build images object dynamically from config.json
const imagesObj = {};
for (const ceremony of config.ceremonies) {
  imagesObj[ceremony.name] = (ceremony.images || []).map((img) => {
    // Ensure no leading slashes
    const cleaned = img.replace(/^\/+/, "");
    return `${BASE_URL}${cleaned}`;
  });
}

function App() {
  return (
    <div className="app-container" style={{ textAlign: "center" }}>
      {/* HEADER */}
      <h1>{config.bride} ❤️ {config.groom}</h1>
      <h2>{config.tagline}</h2>

      {/* CEREMONIES */}
      {config.ceremonies.map((ceremony) => (
        <div key={ceremony.name} style={{ marginBottom: "40px" }}>
          <h2>{ceremony.name}</h2>
          <p>{ceremony.date} — {ceremony.venue}</p>

          {/* IMAGE SLIDER */}
          <Swiper spaceBetween={10} slidesPerView={1}>
            {imagesObj[ceremony.name].map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`${ceremony.name} ${idx}`}
                  style={{
                    width: "90%",
                    height: "auto",
                    borderRadius: "10px",
                    margin: "auto",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}

      {/* GOOGLE MAP */}
      <h2>📍 Location</h2>
      <div style={{ width: "100%", height: "300px" }}>
        <iframe
          src={config.googleMapsEmbedLink}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
