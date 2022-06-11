import React from 'react'
import { KTCard } from '../../../_metronic/helpers'
import ZonesFooter from './Complaintlist/Table/ZonesFooter'
import ZonesTable from './Complaintlist/Table/ZonesTable'
import ZonesTypeHeader from './Complaintlist/Table/ZonesTypeHeader'
import ZonesView from './Complaintlist/Table/ZonesView'
import ZonesFormWrapper from './form/ZonesFormWrapper'
import { ListDataProvider, ListPageData } from './ZonesContext'


const Complaintlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <ZonesTypeHeader /> {/* begin::  header functionlity */}
        <ZonesTable /> {/* begin::  Table */}
      </KTCard>
      <ZonesFooter /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <ZonesFormWrapper />}{' '}
      {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <ZonesView category={viewIdForUpdate} />}{' '}
      {/* begin::  ViewComplaint*/}
    </div>
  )
}

function FaultsWrapper() {
  return (
    <ListDataProvider>
      <Complaintlist />
    </ListDataProvider>
  )
}

export default FaultsWrapper

