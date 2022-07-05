import React, {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import InquiriesFormHeader from '../Component/InquiriesFormHeader'
import { ListDataProvider, ListPageData } from '../InquiriesContext'
import InquiriesFormByCategory from './InquiriesFormByCategory'


function InquiriesForm() {
  const {DataGetAllTypeStatus,DataGetAllTypeSalesExecutveUserByRole} = ListPageData()


 useEffect(() => {
  DataGetAllTypeStatus()
  DataGetAllTypeSalesExecutveUserByRole()
 }, [])
 

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <InquiriesFormHeader />
        <InquiriesFormByCategory />
      </KTCard>
    </div>
  )
}

let InquiriesFormWrapper = () => {
  return (
    <ListDataProvider>
      <InquiriesForm />
    </ListDataProvider>
  )
}


export default InquiriesFormWrapper
