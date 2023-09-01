import { httpClient } from "../util/Api"


export const CreateACourse = (obj) => {
    return  httpClient.post('courses', obj)
  }
  export const getCourse = () => {
    return  httpClient.get('courses/all')
  }
  export const getaCourse = (id) => {
    return  httpClient.get(`courses/${id}`)
  }
  export const getaCoursebyinstructur = () => {
    return  httpClient.get(`courses/instructor/all-courses`)
  }
  export const updateCOurse = (field) => {
    return  httpClient.put(`courses/${field.slug}`,field)
  }
  export const deleteCourse = (id) => {
    return  httpClient.delete(`courses/${id}`)
  }
  export const allCoursebycategory = () => {
    return  httpClient.get(`course/category/all`)
  }
  export const aCoursebycategory = (slug) => {
    return  httpClient.get(`course/category/${slug}`)
  }
  export const updateaCoursebycategory = (id) => {
    return  httpClient.put(`course/category/${id}`)
  }
  export const deleteaCoursebycategory = (id) => {
    return  httpClient.delete(`course/category/${id}`)
  }
  export const posteaCoursebycategory = () => {
    return  httpClient.post(`course/category`)
  }