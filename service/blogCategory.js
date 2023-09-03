import { httpClient } from "../util/Api"

export const registerNewBlogCategory = (obj) => {
  return  httpClient.post('/blog/category', obj)
}
export const getBlogCategory = () => {
  return  httpClient.get('/blog/category/all')
}
export const getBlogCategoryById = (id) => {
  return  httpClient.get(`blog/category/${id}`)
}
export const updateBlogCategory = (id, field) => {
  console.log(`updateBlogCategory`,id,field)
  return  httpClient.put(`blog/category/${id}`,field)
}
export const deleteBlogCategory = (id) => {
  return  httpClient.delete(`blog/category/${id}`,{isDeleted:true})
}
