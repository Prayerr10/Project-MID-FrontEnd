import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Hobbies = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return (
    <div className="py-20 bg-white flex justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
    </div>
  );
  
  if (error) return (
    <div className="py-20 bg-white flex justify-center text-red-600">
      Error: {error}
    </div>
  );

  const hobbyIcons = {
    'Mandi': '🚿',
    'Makan': '🍽️', 
    'Healing': '🌴',
    'Tidur': '😴'
  };

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-6 py-3 mb-4">
            <span className="text-purple-600">❤️</span>
            <span className="font-semibold text-purple-700">Hobi & Minat</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aktivitas Favorit
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {biodata.hobi.map((hobby) => (
              <div
                key={hobby.id}
                className="text-center group"
              >
                <div className="bg-purple-50 rounded-2xl p-8 mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {hobbyIcons[hobby.nama]}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{hobby.nama}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-600 font-medium">
              "Keseimbangan antara akademik dan kehidupan pribadi adalah kunci produktivitas yang berkelanjutan"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;