import {get, post} from './networking';

// end point
export const endpoint = {
  login: async params => post('api/users/login', params),
  register: async params => post('api/users/register', params),
  getAll: async id => get(`api/quiz/all?data=${id}`),
  getById: async (id, type) => get(`api/quiz/?id=${id}&data=${type}`),
  quizAll: async () => get('api/quiz/all'),
  quizById: async id => get(`api/quiz/?id=${id}`),
  getNilai: async (id, params) => post(`api/quiz/post/quiz?id=${id}`, params),
  cekById: async id => get('api/quiz/?id=5e7265b445593b24a82792be'),
  testById: async id => get('api/quiz/?id=5e7265b445593b24a82792c9'),
};

export default {endpoint};
