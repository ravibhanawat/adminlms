import { httpClient } from "../util/Api"

export const registerNewBlog = (obj) => {
  return  httpClient.post('/blog', obj)
}
export const getBlog= () => {
  return  httpClient.get('/blog/all')
}
export const getBlogById = (id) => {
  return  httpClient.get(`blog/${id}`)
}
export const updateBlog = (id, field) => {
  return  httpClient.put(`blog/${id}`,field)
}
export const deleteBlog = (id) => {
  return  httpClient.delete(`blog/${id}`,{isDeleted:true})
}
