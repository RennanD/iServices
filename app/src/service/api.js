import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'https://api-iservices.herokuapp.com',
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;
