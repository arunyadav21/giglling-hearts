export default function Gallery() {
  const images = [
    "/Gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section
      className="
        py-20 bg-gray-50 border-t 
        w-screen relative left-1/2 right-1/2 
        -ml-[50vw] -mr-[50vw]
      "
    >
      {/* FULL WIDTH TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Moments that capture the joy of learning
        </p>
      </div>

      {/* FULL WIDTH GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 lg:px-10">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow hover:shadow-2xl transition"
          >
            <img
              src={src}
              alt={`gallery-${i + 1}`}
              className="w-full h-72 object-cover hover:scale-110 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
