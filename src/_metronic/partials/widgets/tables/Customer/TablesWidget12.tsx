import React from 'react'
import {KTCard} from '../../../../helpers'
import CustomerFormViewModal from './Coustomerlist/Table/CustomerFormViewModal'
import CustomerHeader from './Coustomerlist/Table/CustomerHeader'
import Customerpagination from './Coustomerlist/Table/Customerpagination'
import CustomerTable from './Coustomerlist/Table/CustomerTable'
import CustomerFormModal from './Form/CustomerFormModal'
import CustomerFormWrapper from './Form/CustomerFormWrapper'

type Props = {
  className: string
}

const TablesWidget12: React.FC<Props> = ({className}) => {
  // const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className={`card ${className}`}>
      <div className='overflow-hidden'>
        <KTCard className='ms-5 me-5'>
          {/* begin:: Company Header Component */}
          <CustomerHeader />
          {/* end:: Company Header Component */}

          {/* begin:: Company Table Component */}
          <CustomerTable />
          {/* end:: Company Table Component */}
        </KTCard>
        {/* begin:: Company Table-Pagination Component */}
        <Customerpagination />
        {/* end:: Company Table-Pagination Component */}
        {/* begin:: Company Add/Ed  it Form Component */}
        {/* {itemIdForUpdate !== undefined && <CompaniesFormWrapper />}{' '} */}
        {/* end:: Company Add/Edit Form Component */}
        {/* begin:: Company View Form Component */}
        {/* < CustomerFormWrapper/> */}
        <CustomerFormModal />
        {/* {viewIdForUpdate && <CompaniesFormViewModal category={viewIdForUpdate} />}{' '} */}
        <CustomerFormViewModal />
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

export default TablesWidget12
