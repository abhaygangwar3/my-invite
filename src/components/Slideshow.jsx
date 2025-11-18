import { useState, useEffect } from "react";

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <img
      src={images[index]}
      alt="ceremony"
      className="w-full h-64 object-cover rounded-xl shadow-md"
    />
  );
}
