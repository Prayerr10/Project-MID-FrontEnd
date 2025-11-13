import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Generations = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return (
    <div className="py-20 bg-white flex justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
  
  if (error) return (
    <div className="py-20 bg-white flex justify-center text-red-600">
      Error: {error}
    </div>
  );

  return (
    <section id="generations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-4">
            <span className="text-blue-600">📚</span>
            <span className="font-semibold text-blue-700">Per Semester</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perkembangan Akademik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Progress pembelajaran selama {biodata.generations.length} semester
          </p>
        </div>

        {/* Semester Cards */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {biodata.generations.map((semester) => (
            <div key={semester.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Semester {semester.semester}
                  </h3>
                  <p className="text-blue-600 font-medium">{semester.tahun_akademik}</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                  IPK: {semester.ipk}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Mata Kuliah</h4>
                <div className="flex flex-wrap gap-2">
                  {semester.mata_kuliah.map((matkul, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {matkul}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-gray-700 font-medium">"{semester.keterangan}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Status Saat Ini</h3>
            <p className="text-gray-600">
              Sedang menempuh pendidikan di Semester {biodata.biodata.pendidikan.semester} - Universitas Klabat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generations;