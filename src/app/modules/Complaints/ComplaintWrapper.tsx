import react from 'react'
import {KTCard} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import ComplaintHeader from './ComplainList/Table/ComplaintHeader'

import ComplaintPagination from './ComplainList/Table/ComplaintPagination'
import ComplaintTable from './ComplainList/Table/ComplaintTable'
import {ListDataProvider, ListPageData} from './ComplaintContext'

const ComplaintList = () => {
  const {itemIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <ComplaintHeader />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <ComplaintTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <ComplaintPagination />
      {/* end:: Table-Pagination Component */}
    </div>
  )
}

const ComplaintWrapper = () => {
  return (
    <ListDataProvider>
      <PageTitle breadcrumbs={[]}>Complaints</PageTitle>
      <ComplaintList />
    </ListDataProvider>
  )
}

export default ComplaintWrapper
