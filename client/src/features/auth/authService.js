import axios from 'axios';

const API_URL = 'https://attendify-backend.onrender.com';

// register user
export const register = async (userData)=>{
    const response = await axios.post(`${API_URL}/register`,userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// login user
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`,userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// logout user
export const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,logout,login
    
}

export default authService;
