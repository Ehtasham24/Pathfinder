export const users = [
    { username: 'alihasnain', password: 'ali786' },
    { username: 'ehtasham', password: 'slipz22' },
  ];
  
  export const authenticate = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? 'Login successful' : 'Invalid username or password';
  };
  