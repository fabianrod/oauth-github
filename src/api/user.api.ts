const getUser = () => {
  return new Promise((resolve, reject) => {
    let user = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(Object.keys(user).length > 0) {
      resolve(user)
    } else {
      console.log('err')
      reject({ error: 204, content: 'Empty response' })
    }
  })
}

export default getUser;