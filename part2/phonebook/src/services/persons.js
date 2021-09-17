import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const PersonService = {
  getAll: () => {
    return axios.get(baseUrl).then(response => response.data);
  },
  create: (personObject) => {
    return axios.post(baseUrl, personObject).then(response => response.data);
  }
};

export default PersonService;