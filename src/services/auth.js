
const BASE_URL = 'https://819d-114-10-144-144.ngrok-free.app'; 

export const signupUser = async (name, email, password) => {
  const data = new FormData();
  data.append('username', name);
  data.append('email', email);
  data.append('password', password);

  const response = await fetch(`${BASE_URL}/user/signup`, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Signup failed. Please try again.');
  }

  return response.json(); 
};

export const loginUser = async (email, password) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  const response = await fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed. Please try again.');
  }

  return response.json(); 
};
