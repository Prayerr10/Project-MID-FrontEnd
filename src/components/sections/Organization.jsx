import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Organization = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-white flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-white flex justify-center">Error: {error}</div>;

  return (
    <section id="organization" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Pengalaman Organisasi
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {biodata.organisasi.map((org, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {org.posisi}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{org.periode}</p>
              <p className="text-gray-600">{org.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;