import { getRequest, postRequest, putRequest, deleteRequest } from './apiHandler'

export function getAllServices () {
  return getRequest('services')
}

export function getServiceByCategory (category) {
  return getRequest(`services?category=${category}`)
}

export function createService (service) {
  return postRequest('services', service)
}

export function editServiceById (id, service) {
  return putRequest(`services/${id}`, service)
}

export function deleteServiceById (id) {
  return deleteRequest(`services/${id}`)
}