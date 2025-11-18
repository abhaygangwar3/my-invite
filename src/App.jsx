import Hero from "./components/Hero";
import CeremonySection from "./components/CeremonySection";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-[#FFFDF7] text-gray-800">
      <Hero />

      {/* Ceremony Sections */}
      <CeremonySection
        title="Haldi Ceremony"
        date="12th December 2025"
        time="10:00 AM"
        images={[
          "/images/haldi/1.jpg",
          "/images/haldi/2.jpg",
          "/images/haldi/3.jpg",
        ]}
      />

      <CeremonySection
        title="Sangeet Night"
        date="13th December 2025"
        time="7:00 PM"
        images={[
          "/images/sangeet/1.jpg",
          "/images/sangeet/2.jpg",
          "/images/sangeet/3.jpg",
        ]}
      />

      <CeremonySection
        title="Wedding"
        date="14th December 2025"
        time="5:00 PM"
        images={[
          "/images/wedding/1.jpg",
          "/images/wedding/2.jpg",
          "/images/wedding/3.jpg",
        ]}
      />

      <CeremonySection
        title="Reception"
        date="15th December 2025"
        time="8:00 PM"
        images={[
          "/images/reception/1.jpg",
          "/images/reception/2.jpg",
          "/images/reception/3.jpg",
        ]}
      />

      <Venue />
      <Footer />
    </div>
  );
}
