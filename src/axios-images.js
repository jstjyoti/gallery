import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/photos/?client_id=tuxLMZ3ZoydOfuVl9hjZFXqWjiStx91WADRWZgPtYqg'
})

export default instance;