import { useState, useEffect } from 'react';
import { biodataAPI } from '../services/api';

export const useBiodata = () => {
  const [biodata, setBiodata] = useState({
    biodata: {},
    keahlian: [],
    organisasi: [],
    hobi: [],
    generations: [],
    evolution: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [biodataRes, keahlianRes, organisasiRes, hobiRes, generationsRes, evolutionRes] = await Promise.all([
          biodataAPI.getBiodata(),
          biodataAPI.getKeahlian(),
          biodataAPI.getOrganisasi(),
          biodataAPI.getHobi(),
          biodataAPI.getGenerations(),
          biodataAPI.getEvolution()
        ]);

        setBiodata({
          biodata: biodataRes.data,
          keahlian: keahlianRes.data,
          organisasi: organisasiRes.data,
          hobi: hobiRes.data,
          generations: generationsRes.data,
          evolution: evolutionRes.data
        });
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { biodata, loading, error };
};