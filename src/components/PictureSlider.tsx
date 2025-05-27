import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const PictureSlider = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Modern banking technology",
      title: "Digital Banking Solutions",
      description: "Experience seamless banking with our cutting-edge technology"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Professional workspace",
      title: "Professional Financial Services",
      description: "Expert guidance for your business and personal finances"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Online banking interface",
      title: "Secure Online Banking",
      description: "Bank safely from anywhere with our secure platform"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Financial analytics",
      title: "Smart Financial Analytics",
      description: "Make informed decisions with our advanced analytics tools"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Investment portfolio",
      title: "Investment Portfolio Management",
      description: "Grow your wealth with our expert investment services"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Discover Our
            <span className="block text-green-800 italic">Banking Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-green-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Explore our comprehensive banking solutions through this visual journey
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <CardContent className="p-0 relative">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                          <p className="text-sm text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-gray-50 border-2 border-green-800 text-green-800 hover:text-green-900" />
            <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-gray-50 border-2 border-green-800 text-green-800 hover:text-green-900" />
          </Carousel>

          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Ready to experience the future of banking?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started-today">
              <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Get Started Today
              </button>
            </Link>
            <Link to="/download-app">
              <button className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Download App
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureSlider;
