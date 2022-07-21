import React from 'react'
import axios from 'axios'
import http from '../../../../_metronic/helpers/components/http-common'


// const ApiDataRequest = () => {
//   return <div>ApiDataRequest</div>
// }

// export default ApiDataRequest


const getUserName = (username: string) => {
  return http.get(`GetByUserName`, { userName: username })
}

const Userservice = {

  getUserName,

}

export default Userservice