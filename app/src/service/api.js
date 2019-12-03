import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'http://10.0.3.2:3001',
});

api.addResponseTransform(response =>{
  if(!response.ok) throw response
})

export default api;
