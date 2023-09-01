import { httpClient } from "../util/Api"

export const registerNewUser = (obj) => {
  return  httpClient.post('/user/register', obj)
}
export const getUser = () => {
  return  httpClient.get('user/allusers')
}
export const getUserById = (id) => {
  return  httpClient.get(`user/${id}`)
}
export const updateUser = (field) => {
  return  httpClient.put(`user/update-profile`,field)
}
export const deleteUser = (id) => {
  return  httpClient.put(`user/${id}`,{isDeleted:true})
}