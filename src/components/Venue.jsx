export default function Venue() {
  return (
    <section className="py-12 bg-[#FFF4EA] text-center">
      <h2 className="text-3xl font-semibold">Venue</h2>

      <p className="mt-2 text-lg">Royal Heritage Palace, Jaipur</p>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Royal+Heritage+Palace+Jaipur"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg shadow"
      >
        Get Directions
      </a>

      <div className="mt-6 max-w-2xl mx-auto">
        <iframe
          title="map"
          width="100%"
          height="300"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          className="rounded-xl shadow"
        ></iframe>
      </div>
    </section>
  );
}
