import React, {useEffect} from 'react'
import {KTCard} from '../../../../../helpers'
import FormsFormHeader from '../Component/FormsFormHeader'
import {ListDataProvider, ListPageData} from '../FormsContext'
import FormsFormByCategory from './FormsFormByCategory'

function InquiriesForm() {
  const {DataGetAllTypeSalesExecutveUserByRole} = ListPageData()

  useEffect(() => {
    DataGetAllTypeSalesExecutveUserByRole()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <FormsFormHeader />
        <FormsFormByCategory />
      </KTCard>
    </div>
  )
}

let FormsFormWrapper = () => {
  return (
    <ListDataProvider>
      <InquiriesForm />
    </ListDataProvider>
  )
}

export default FormsFormWrapper
