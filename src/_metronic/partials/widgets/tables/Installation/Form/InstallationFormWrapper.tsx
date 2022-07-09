import React, {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import InstallationFormHeader from '../component/InstallationFormHeader'
import { ListDataProvider, ListPageData } from '../InstallationContext'
import InstallationFormByCategory from './InstallationFormByCategory'

function InstallationForm() {
  const {DataGetAllTypeStatus,DataGetAllTypeInstallation,DataGetAllTypeMainPoint,DataGetAllTypeCableType,DataGetAllTypeUserName,fetchAllUser} = ListPageData()


 useEffect(() => {
  fetchAllUser()
  DataGetAllTypeUserName()
  DataGetAllTypeCableType()
  DataGetAllTypeMainPoint()
  DataGetAllTypeInstallation()
  DataGetAllTypeStatus()
 }, [])
 

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <InstallationFormHeader />
        <InstallationFormByCategory />
      </KTCard>
    </div>
  )
}

let InstallationFormWrapper = () => {
  return (
    <ListDataProvider>
      <InstallationForm />
    </ListDataProvider>
  )
}

export default InstallationFormWrapper