
const PhotoGallery = () => {
  const photos = [
    // {
    //   src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop",
    //   alt: "Emma and Liam engagement photo 1"
    // },
    {
      src: "/assets/prsten.jpg",
      alt: "Emma and Liam engagement photo 1"
    },
    // {
    //   src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    //   alt: "Emma and Liam engagement photo 2"
    // }
    {
      src: "/assets/smich.jpg",
      alt: "Emma and Liam engagement photo 2"
    },
    // {
    //   src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
    //   alt: "Emma and Liam engagement photo 3"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    //   alt: "Emma and Liam engagement photo 4"
    // }
    {
      src: "/assets/loki_terez.png",
      alt: "Emma and Liam engagement photo 4"
    },
    // {
    //   src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=500&fit=crop",
    //   alt: "Emma and Liam engagement photo 5"
    // }
    {
      src: "assets/loki_piknik.png",
      alt: "Emma and Liam engagement photo 5"
    },
    {
      src: "assets/sunset.jpg",
      alt: "Emma and Liam engagement photo 5"
    },
    {
      src: "assets/bike.png",
      alt: "Emma and Liam engagement photo 5"
    },
    {
      src: "/assets/loki_adam_srdce.png",
      alt: "Emma and Liam engagement photo 3"
    },
  ];

  return (
      <section className="py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/*<h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 mb-12">*/}
          {/*  Our Love Story*/}
          {/*</h2>*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105
                ${ index === 0 ? 'md:row-span-2' : '' }
                ${ index === 4 ? 'md:row-span-2' : '' }
                ${ index === 1 ? 'md:col-span-2' : '' }
              `}
                >
                  <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default PhotoGallery;
