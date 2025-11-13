import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Education = () => {
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
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-4">
            <span className="text-blue-600">🎓</span>
            <span className="font-semibold text-blue-700">Pendidikan</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latar Belakang Akademik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi lengkap mengenai pendidikan formal dan perkembangan akademik
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
            <div className="space-y-6">
              {/* University */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏛️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Perguruan Tinggi</p>
                    <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.perguruan_tinggi}</p>
                  </div>
                </div>
              </div>

              {/* Faculty & Program */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm text-gray-500 mb-2">Fakultas</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.fakultas}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm text-gray-500 mb-2">Program Studi</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.program_studi}</p>
                </div>
              </div>

              {/* Student IDs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm text-gray-500 mb-2">No Registrasi</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.no_reg}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm text-gray-500 mb-2">NIM</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.nim}</p>
                </div>
              </div>

              {/* Semester */}
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Semester Saat Ini</p>
                    <p className="text-lg font-bold text-blue-700">Semester {biodata.biodata.pendidikan.semester}</p>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold">
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;