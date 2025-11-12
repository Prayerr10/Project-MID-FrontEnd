import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Evolution = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-gray-50 flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-gray-50 flex justify-center">Error: {error}</div>;

  return (
    <section id="evolution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Perjalanan Akademik
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {biodata.evolution.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.tahun}
                  </div>
                  {index < biodata.evolution.length - 1 && (
                    <div className="w-1 h-full bg-blue-300 mt-2"></div>
                  )}
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.pencapaian}
                  </h3>
                  <p className="text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;