export const login = async (email: string, password: string) => {
  const user = {email: email, password: password}
  return new Promise((resolve, reject) => {})
  //return await firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = async () => {
  return new Promise((resolve, reject) => {})
  //return await firebase.auth().signOut()
}
