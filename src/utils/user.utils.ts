/**
 * Do refactor
 * This is just a simple method to check if user is Logged
 * Never implement this in real life project :) 
 */
const isLogged = () => {
  let data = localStorage.getItem('isLogged');
  return new Promise((resolve, reject) => {
    if(data !== null) {
      resolve(true);
    } else {
      reject(false);
    }
  })
}

export default isLogged;