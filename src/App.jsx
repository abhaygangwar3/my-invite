import config from "./config.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BASE_URL = import.meta.env.BASE_URL;

// Auto-generate image paths: imageFolder + 1.jpg, 2.jpg, 3.jpg ...
function generateImages(folderPath) {
  const images = [];
  for (let i = 1; i <= 10; i++) {  // Change 10 → max number of images you expect
    images.push(`${BASE_URL}${folderPath.replace(/^\/+/, "")}${i}.jpg`);
  }
  return images;
}

function App() {
  return (
    <div className="app-container" style={{ textAlign: "center" }}>
      <h1>{config.bride} ❤️ {config.groom}</h1>

      {config.ceremonies.map((ceremony) => {
        const imageFolder = ceremony.imageFolder || "";
        const images = generateImages(imageFolder);

        return (
          <div key={ceremony.name} style={{ marginBottom: "40px" }}>
            <h2>{ceremony.name}</h2>
            <p>{ceremony.date} — {ceremony.venue}</p>

            <Swiper spaceBetween={10} slidesPerView={1}>
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    onError={(e) => {
                      // Hide missing images
                      e.target.style.display = "none";
                    }}
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
        );
      })}

      {/* GOOGLE MAP */}
      <h2>📍 Location</h2>

      <div style={{ width: "100%", height: "300px" }}>
        <iframe
          src={config.venueMap}
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
