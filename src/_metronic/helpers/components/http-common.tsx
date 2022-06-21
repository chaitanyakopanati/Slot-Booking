import axios from 'axios'

const API_URL_DATA = process.env.REACT_APP_API_URL

{
  /* begin:: Complaint Type:- axios*/
}
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const {response} = error
    return Promise.reject(response)
  }
)
{
  /* end:: Complaint Type:- axios*/
}

{
  /* begin:: Complaint Type:- Authorization Token*/
}
axios.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiJmMzY1YTA3OS01NTg3LTQ4ZTktYTI0MS02MjE2NzY0ZTQ0NTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW4iLCJVc2VyIl0sImV4cCI6MTY1NjU2MzQxNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDM5MS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.2uNL5op6S-4BkhxbRq7Rx2rdkKIUC5mNf8rcYdvyS6E`,
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
{
  /* end:: Complaint Type:- Authorization Token*/
}

{
  /* begin:: Complaint Type:- get http URL */
}
export const get = (url: string, params?: any) =>
  axios
    .get(`${API_URL_DATA}/${url}`, {params})
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return Promise.reject(error)
    })
{
  /* end:: Complaint Type:- get http URL */
}

{
  /* begin:: Complaint Type:- post http URL */
}
export const post = (url: string, payload: any, config = {}) =>
  axios
    .post(`${API_URL_DATA}/${url}`, payload, config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return Promise.reject(error)
    })
{
  /* end:: Complaint Type:- post http URL */
}

{
  /* begin:: Complaint Type:- delete http URL */
}
export const delet = (url: string) =>
  axios
    .delete(`${API_URL_DATA}/${url}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return Promise.reject(error)
    })
{
  /* end:: Complaint Type:- delete http URL */
}

let http = {
  get,
  post,
  delet,
}

export default http
