import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Hobbies = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-gray-50 flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-gray-50 flex justify-center">Error: {error}</div>;

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Hobi & Minat
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {biodata.hobi.map((hobby) => (
              <div
                key={hobby.id}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">❤️</span>
                </div>
                <h3 className="font-semibold text-gray-800">{hobby.nama}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;