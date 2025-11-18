export default function Hero() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/cover.jpg')" }}>
      
      <div className="bg-black/40 p-6 rounded-xl text-center">
        <h1 className="text-5xl font-bold">Abhay ❤️ Ananya</h1>
        <p className="mt-4 text-xl">We’re getting married!</p>
        <p className="mt-2 text-lg">14th December 2025</p>
      </div>
    </div>
  );
}
