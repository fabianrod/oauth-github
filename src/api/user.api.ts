interface IUser {
  name?: string,
  email: string,
  password: string,
}
const getUser = () => {
  return new Promise<IUser>((resolve, reject) => {
    let user = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(Object.keys(user).length > 0) {
      resolve(user)
    } else {
      reject({ error: 204, content: 'Empty response' })
    }
  })
}

export default getUser;