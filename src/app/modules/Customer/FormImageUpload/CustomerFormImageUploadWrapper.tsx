import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'
import { CustomerContext } from '../CustomerContext'
import { CustomerFormImageUploadModal } from './CustomerFormImageUploadModal'

export const CustomerFormImageUpload = () => {
  return (
    <div className='overflow-hidden'>
    <KTCard className='ms-5 me-5'>
      <CustomerFormImageUploadModal />
    </KTCard>
  </div>
  )
}



let CustomerFormImageUploadWrapper = () => {
    return (
      <CustomerContext>
        <CustomerFormImageUpload />
      </CustomerContext>
    )
  }
  
  export default CustomerFormImageUploadWrapper
  