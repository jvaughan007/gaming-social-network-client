import jwtDecode from 'jwt-decode';

//localhost/api/auth/verifyJWT
const TokenService = {
    async checkForToken() {
        const jwt = window.localStorage.getItem('jwt');

        const res = await fetch('http://localhost:5000/auth/verifyJWT', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${jwt}`,
            },
        });

        const data = await res.json();
        return data;
    },
};

export default TokenService;
