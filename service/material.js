import { httpClient } from "../util/Api"


export const CreateAMaterial = (obj) => {
    return  httpClient.post('material', obj)
  }
  export const getMaterial = () => {
    return  httpClient.get('material/all')
  }
  export const getaMaterial = (id) => {
    return  httpClient.get(`material/${id}`)
  }
   
  export const updateMaterial = (field) => {
    return  httpClient.put(`material/${field.slug}`,field)
  }
  export const deleteMaterial = (id) => {
    return  httpClient.delete(`material/${id}`)
  }