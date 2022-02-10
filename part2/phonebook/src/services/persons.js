import axios from "axios";

const baseUrl = 'https://ancient-forest-42161.herokuapp.com/api/persons';

const PersonService = {
  getAll: () => {
    return axios.get(baseUrl).then(response => response.data);
  },
  create: (personObject) => {
    return axios.post(baseUrl, personObject).then(response => response.data);
  },
  update: (personId, personObject) => {
    return axios.put(`${baseUrl}/${personId}`, personObject).then(response => response.data);
  },
  delete: (personId) => {
    return axios.delete(`${baseUrl}/${personId}`).then(response => response.data);
  }
};

export default PersonService;