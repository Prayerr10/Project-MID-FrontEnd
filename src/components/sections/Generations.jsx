import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Generations = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-white flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-white flex justify-center">Error: {error}</div>;

  return (
    <section id="generations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Perkembangan Semester
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {biodata.generations.map((semester, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Semester {semester.semester}
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  IPK: {semester.ipk}
                </span>
              </div>
              
              <p className="text-blue-600 font-medium mb-4">{semester.tahun_akademik}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Mata Kuliah:</h4>
                <div className="flex flex-wrap gap-2">
                  {semester.mata_kuliah.map((matkul, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {matkul}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{semester.keterangan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Generations;