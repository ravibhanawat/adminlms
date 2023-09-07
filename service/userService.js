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
  return  httpClient.put(`user/update-profile/${field._id}`,field)
}
export const deleteUser = (row) => {
  return  httpClient.put(`user/${row._id}`,{isDeleted:!row.isDeleted})
}
export const permanentdeleteUser = (row) => {
  return  httpClient.delete(`user/${row._id}`)
}