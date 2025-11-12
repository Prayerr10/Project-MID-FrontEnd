import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Education = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-white flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-white flex justify-center">Error: {error}</div>;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Data Pendidikan
        </h2>
        
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold text-gray-700">Perguruan Tinggi:</span>
              <span className="text-gray-900">{biodata.biodata.pendidikan.perguruan_tinggi}</span>
            </div>
            
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold text-gray-700">Fakultas:</span>
              <span className="text-gray-900">{biodata.biodata.pendidikan.fakultas}</span>
            </div>
            
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold text-gray-700">Program Studi:</span>
              <span className="text-gray-900">{biodata.biodata.pendidikan.program_studi}</span>
            </div>
            
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold text-gray-700">No Registrasi:</span>
              <span className="text-gray-900">{biodata.biodata.pendidikan.no_reg}</span>
            </div>
            
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold text-gray-700">NIM:</span>
              <span className="text-gray-900">{biodata.biodata.pendidikan.nim}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Semester:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Semester {biodata.biodata.pendidikan.semester}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;