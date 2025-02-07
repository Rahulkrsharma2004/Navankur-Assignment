// Check if user is authenticated
export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  };
  
  // Get current user
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  // Logout user
  export const logoutUser = () => {
    localStorage.removeItem('user');
  };