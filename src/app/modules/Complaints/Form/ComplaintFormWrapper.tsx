import React, { useEffect } from 'react'
import { ListDataProvider, ListPageData } from '../ComplaintContext'
import ComplaintFormHeader from '../Component/ComplaintFormHeader'
import ComplaintFormByCategory from './ComplaintFormByCategory'
import ComplaintFormModal from './ComplaintFormModal'

const ComplaintFormWrapper = () => {

  return (
    <>
      <ListDataProvider>
        <ComplaintFormModal />
      </ListDataProvider>
    </>
  )
}

export default ComplaintFormWrapper
