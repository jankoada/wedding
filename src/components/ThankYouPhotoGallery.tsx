
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ExternalLink } from 'lucide-react';

const PhotoGallery = () => {
  const photos = [
    {
      src: "/assets/profi_photo.png",
      alt: "Výběr fotografů",
      link: "https://photos.app.goo.gl/xZ4gHq2DJUKNHWwT7"
    },
    {
      src: "/assets/spioni.jpg",
      alt: "Od špionů",
      link: "https://photos.app.goo.gl/Y5qUzB7qRuzaxRaC6"
    }
    // ,
    // {
    //   src: "/assets/smich.jpg",
    //   alt: "Vše od fotografů",
    //   link: "https://photos.app.goo.gl/riiHNsam8BiPbrJeA"
    // },
  ];

  return (
      <section className="animate-fade-in">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800">
            Fotky a videa
          </h2>


          <section className="py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              {/*<h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 mb-12">*/}
              {/*  Our Love Story*/}
              {/*</h2>*/}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative sm:mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105
              `}
                    >
                      <a href={photo.link}>
                      <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-script text-4xl font-medium">{photo.alt} </p>
                        {/*<ExternalLink className="text-white w-5 h-5" />*/}

                      </div>
                      </a>
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>*/}
                    </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
  );
};

export default PhotoGallery;