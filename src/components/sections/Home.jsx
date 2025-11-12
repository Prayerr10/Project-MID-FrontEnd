import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Home = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Memuat data...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center text-red-600">
        <p>Error: {error}</p>
        <p className="text-sm mt-2">Pastikan JSON Server berjalan di port 3000</p>
      </div>
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto Profil */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src="/profile.jpg" 
                  alt="Prayer Yosua Immanuel"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">Mahasiswa</span>
                </div>
              </div>
            </div>

            {/* Informasi Biodata */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Biodata Mahasiswa
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Universitas Klabat - Fakultas Ilmu Komputer
              </p>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {biodata.biodata.nama_lengkap}
                </h2>
                <p className="text-gray-600 text-lg mb-2">{biodata.biodata.pendidikan.program_studi}</p>
                <p className="text-gray-500">NIM: {biodata.biodata.pendidikan.nim} - Semester {biodata.biodata.pendidikan.semester}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">📍 Lokasi</h3>
                  <p className="text-gray-600">{biodata.biodata.alamat}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">📞 Kontak</h3>
                  <p className="text-gray-600">{biodata.biodata.no_hp}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">📧 Email</h3>
                  <p className="text-gray-600">{biodata.biodata.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;