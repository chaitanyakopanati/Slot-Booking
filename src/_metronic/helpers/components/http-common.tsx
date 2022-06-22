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
    console.log("response error",response)
    if(response.status===401 && response.statusText ==="Unauthorized"){
      localStorage.removeItem('kt-auth-react-v')
      window.location.reload()
    }
    return Promise.reject(response)
  }
)
// interceptors.request define AuthHelper file (setupAxios)

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
