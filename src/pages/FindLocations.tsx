
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Phone } from 'lucide-react';

const FindLocations = () => {
  const locations = [
    {
      name: "Downtown Branch",
      address: "123 Main Street, Downtown, NY 10001",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM"
    },
    {
      name: "Uptown Branch",
      address: "456 Oak Avenue, Uptown, NY 10002",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM"
    },
    {
      name: "Westside Branch",
      address: "789 Pine Street, Westside, NY 10003",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Find Locations</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Locate our branches and ATMs near you
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Branch Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-600 mt-0.5 mr-3" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-600 mr-3" />
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-600 mt-0.5 mr-3" />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindLocations;
