import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Skills = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return (
    <div className="py-20 bg-white flex justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  );
  
  if (error) return (
    <div className="py-20 bg-white flex justify-center text-red-600">
      Error: {error}
    </div>
  );

  const categoryIcons = {
    'Technical Skills': '💻',
    'Soft Skills': '🌟',
    'Tools': '🛠️'
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 mb-4">
            <span className="text-green-600">⚡</span>
            <span className="font-semibold text-green-700">Keahlian</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Kemampuan
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {biodata.keahlian.map((kategori) => (
            <div key={kategori.id} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">{categoryIcons[kategori.kategori]}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{kategori.kategori}</h3>
                  <p className="text-green-600 font-medium">{kategori.items.length} skills</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kategori.items.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {biodata.keahlian.reduce((total, category) => total + category.items.length, 0)}
                </div>
                <p className="text-sm text-gray-600">Total Skills</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {biodata.keahlian.length}
                </div>
                <p className="text-sm text-gray-600">Kategori</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
                <p className="text-sm text-gray-600">Tahun Pengembangan</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                <p className="text-sm text-gray-600">Komitmen Belajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;