import React, { useEffect } from 'react'
import { KTCard } from '../../../../_metronic/helpers'
import UserFormHeader from '../component/UserFormHeader'
import { ListDataProvider, ListPageData } from '../UserContext'
import UserFormByCategory from './UserFormByCategory'

function UserForm() {
  const {DataGetAllTypeZone, DataGetAllTyperole} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTyperole()
  }, [])
  
  return (

    <div className='overflow-hidden'>
    <KTCard className='ms-5 me-5'>
      
      <UserFormHeader />
      <UserFormByCategory />
      
    </KTCard>
  </div>
  )
}


let UserFormWrapper = () =>{
  return(
    <ListDataProvider>
    <UserForm />
  </ListDataProvider>
  )
}


export default UserFormWrapper
