export default function authHeader() {
    const user = localStorage.getItem('token');
  
    if (user) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      return { "x-access-token": user };
    } else {
      return {};
    }
  }