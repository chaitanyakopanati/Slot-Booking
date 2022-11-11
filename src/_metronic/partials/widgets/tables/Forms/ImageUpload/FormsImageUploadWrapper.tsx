import React from 'react'
import { KTCard } from '../../../../../helpers'
import { ListDataProvider } from '../FormsContext'
import { FromsImageUploadModal } from './FromsImageUploadModal'
// import { KTCard } from '../../../../_metronic/helpers'
// import { CustomerContext } from '../CustomerContext'
// import { CustomerFormImageUploadByCategory } from './CustomerFormImageUploadByCategory'
// import { CustomerFormImageUploadModal } from './CustomerFormImageUploadModal'

export const FormImageUpload = () => {
  return (
    <div className='overflow-hidden'>
    <KTCard className='ms-5 me-5'>
      
      <FromsImageUploadModal />
    </KTCard>
  </div>
  )
}



let FormsImageUploadWrapper = () => {
    return (
      <ListDataProvider>
        <FormImageUpload />
      </ListDataProvider>
    )
  }
  
  export default FormsImageUploadWrapper
  