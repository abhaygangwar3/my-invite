import Slideshow from "./Slideshow";

export default function CeremonySection({ title, date, time, images }) {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-2 text-lg">{date} • {time}</p>

      <div className="mt-6 max-w-xl mx-auto">
        <Slideshow images={images} />
      </div>
    </section>
  );
}
