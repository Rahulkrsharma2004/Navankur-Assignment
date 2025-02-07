export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  };
  
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('user');
  };