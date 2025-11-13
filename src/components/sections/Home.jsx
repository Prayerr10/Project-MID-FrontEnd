import React from 'react';
import { useBiodata } from '../../hooks/useBiodata';

const Home = () => {
  const { biodata, loading, error } = useBiodata();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center text-gray-800">
        <p className="text-lg font-semibold mb-2">Error loading data</p>
        <p className="text-gray-600 text-sm">{error}</p>
      </div>
    </div>
  );

  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-100">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium text-blue-700">Universitas Klabat</span>
                </div>
                <p className="text-sm text-gray-500">Fakultas Ilmu Komputer - Program Studi Informatika</p>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kaawoan, Prayer Yosua Immanuel
                  <span className="text-gray-600 block text-2xl lg:text-3xl font-light mt-2">
                    Informatics Student
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mahasiswa aktif Program Studi Informatika di Universitas Klabat, 
                  Sekarang sedang Kontrak Mata Kuliah FrontEnd.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Nomor Induk</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.pendidikan.nim}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Semester</p>
                  <p className="font-semibold text-gray-900">Semester {biodata.biodata.pendidikan.semester}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900 text-sm">{biodata.biodata.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telepon</p>
                  <p className="font-semibold text-gray-900">{biodata.biodata.no_hp}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lokasi Kampus</p>
                    <p className="text-sm text-gray-600">Airmadidi, Sulawesi Utara</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/profile-home.jpg" 
                    alt="Prayer Yosua Immanuel"
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg border border-gray-200"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Active Student</span>
                  </div>
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