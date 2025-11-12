import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Skills = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return <div className="py-20 bg-gray-50 flex justify-center">Loading...</div>;
  if (error) return <div className="py-20 bg-gray-50 flex justify-center">Error: {error}</div>;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Keahlian & Skills
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {biodata.keahlian.map((kategori, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                {kategori.kategori}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {kategori.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition duration-300"
                  >
                    <span className="font-medium text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;