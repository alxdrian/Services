import axiosClient from '../app/axiosClient'

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function putRequest(URL, payload) {
  return axiosClient.put(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}
