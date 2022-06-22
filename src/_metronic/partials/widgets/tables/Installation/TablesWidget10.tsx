/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { threadId } from 'worker_threads'
import { KTCard, KTSVG, toAbsoluteUrl } from '../../../../helpers'
import InstallationFormModal from './Form/InstallationFormModal'
import InstallationCustomerViewModel from './Installationlist/Table/InstallationCustomerViewModel'
import InstallationHeader from './Installationlist/Table/InstallationHeader'
import Installationpagination from './Installationlist/Table/Installationpagination'
import InstallationTable from './Installationlist/Table/InstallationTable'
import InstalllationFormViewModal from './Installationlist/Table/InstalllationFormViewModal'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({ className }) => {
  const [filterShow, setFilterShow] = useState(false)
  
  return (
    <div className={`card ${className}`}>
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Company Header Component */}
        <InstallationHeader />
        {/* end:: Company Header Component */}

        {/* begin:: Company Table Component */}
        <InstallationTable />
        {/* end:: Company Table Component */}
      </KTCard>
      {/* begin:: Company Table-Pagination Component */}
      <Installationpagination />
      {/* end:: Company Table-Pagination Component */}
      {/* begin:: Company Add/Ed  it Form Component */}
      {/* {itemIdForUpdate !== undefined && <CompaniesFormWrapper />}{' '} */}
      {/* end:: Company Add/Edit Form Component */}
      {/* begin:: Company View Form Component */}
      {/* < CustomerFormWrapper/> */}
      <InstallationFormModal />
      {/* {viewIdForUpdate && <CompaniesFormViewModal category={viewIdForUpdate} />}{' '} */}
      <InstalllationFormViewModal />
      <InstallationCustomerViewModel/>
      {/* end:: Company View Form Component */}
    </div>
  </div>
)
}

//   function CompaniesWrapper() {
//     return (
//       <ListDataProvider>
//         <Companieslist />
//       </ListDataProvider>
//     )
 


export { TablesWidget10 }
