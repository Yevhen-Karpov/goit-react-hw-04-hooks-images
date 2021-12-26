import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '23964778-a3e050be7e1391d793e3046e4',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

async function fetchApi(q, page) {
  try {
    const { data } = await axios.get('', { params: { q, page } });
    return data;
  } catch (error) {
    console.error(`Нет результатов поиска по данному запросу`);
  }
}

const api = { fetchApi };
export default api;
