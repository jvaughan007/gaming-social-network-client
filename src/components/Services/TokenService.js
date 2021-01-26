import { API_URL } from '../../config';

const TokenService = {
  async checkForToken() {
    const jwt = window.localStorage.getItem('jwt');

    const res = await fetch(`${API_URL}/auth/verifyJWT`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`
      }
    });

    const data = await res.json();
    return data;
  }
};

export default TokenService;
