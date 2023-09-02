import { httpClient } from "../util/Api"


export const CreateAExam = (obj) => {
    return  httpClient.post('exams', obj)
  }
  export const getExam = () => {
    return  httpClient.get('exams/all')
  }
  export const getaExam = (id) => {
    return  httpClient.get(`exams/${id}`)
  }
  export const getaExambyinstructur = () => {
    return  httpClient.get(`exams/instructor/all-exams`)
  }
  export const updateExam = (field) => {
    return  httpClient.put(`exams/${field.slug}`,field)
  }
  export const deleteExam = (id) => {
    return  httpClient.delete(`exams/${id}`)
  }
  export const allExambycategory = () => {
    return  httpClient.get(`exam/category/all`)
  }
  export const aExambycategory = (slug) => {
    return  httpClient.get(`exam/category/${slug}`)
  }
  export const updateaExambycategory = (field) => {
    return  httpClient.put(`exam/category/${field.slug}`,field)
  }
  export const deleteaExambycategory = (id) => {
    return  httpClient.delete(`exam/category/${id}`)
  }
  export const posteaExambycategory = (field) => {
    return  httpClient.post(`exam/category`,field)
  }