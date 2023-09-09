import { httpClient } from "../util/Api"
export const CreateAsubject = (obj) => {
    return  httpClient.post('subject', obj)
  }
  export const getsubject = () => {
    return  httpClient.get('subject/all')
  }
  export const getasubject = (id) => {
    return  httpClient.get(`subject/${id}`)
  }

  export const updatesubject = (field) => {
    return  httpClient.put(`subject/${field._id}`,field)
  }
  export const deletesubject = (id) => {
    return  httpClient.delete(`subject/${id}`)
  }