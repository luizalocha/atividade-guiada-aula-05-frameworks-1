import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY;

const opencageApi = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/json',
});

export const getCoordinatesByAddress = async (address) => {
  const query = `${address.logradouro || ''}, ${address.localidade}, ${address.uf}, Brasil`;

  // Se houver uma chave OpenCage válida configurada
  if (API_KEY && API_KEY !== 'SUA_CHAVE_API_QUE_VOCE_COPIOU_NO_PASSO_1') {
    try {
      const response = await opencageApi.get('', {
        params: { q: query, key: API_KEY, limit: 1, language: 'pt-BR' },
      });

      if (response.data && response.data.results && response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        return { lat, lng };
      }
    } catch (err) {
      console.warn('Falha na consulta OpenCage, tentando geocodificação de fallback:', err);
    }
  }

  // Fallback via Nominatim / OpenStreetMap se a chave OpenCage não for fornecida ou falhar
  try {
    const fallbackQuery = encodeURIComponent(`${address.logradouro || ''} ${address.localidade} ${address.uf} Brasil`);
    const fallbackRes = await axios.get(`https://nominatim.openstreetmap.org/search?q=${fallbackQuery}&format=json&limit=1`);
    if (fallbackRes.data && fallbackRes.data.length > 0) {
      return {
        lat: parseFloat(fallbackRes.data[0].lat),
        lng: parseFloat(fallbackRes.data[0].lon),
      };
    }
  } catch (fallbackErr) {
    console.error('Fallback Nominatim falhou:', fallbackErr);
  }

  throw new Error('Coordenadas não encontradas.');
};
