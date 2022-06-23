import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'
import UserFormHeader from '../component/UserFormHeader'
import UserFormByCategory from './UserFormByCategory'

function UserFormWrapper() {
  return (

    <div className='overflow-hidden'>
    <KTCard className='ms-5 me-5'>
      
      <UserFormHeader />
      <UserFormByCategory />
      
    </KTCard>




  </div>
    // <div>
    //   <UserFormHeader />

    //   <div>
    //     
    //   </div>

    // </div>
  )
}

export default UserFormWrapper
