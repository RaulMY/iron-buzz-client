 import axios from 'axios';

class TestCRUD {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.service = service;
  }

  getAll = () => {
    return this.service.get('/tests')
    .then(response => response.data.tests)
  }

  getById = id => {
    return this.service.get(`/tests/${id}`)
    .then(response => response.data)
  }

  createTest = testBody => {
    return this.service.post('/tests', testBody)
    .then(response => response.data)
  }
}

export default TestCRUD;