import {KTCard} from '../../../_metronic/helpers'
import {ListDataProvider, ListPageData} from './BankContext'
import Bankpagination from './Complaintlist/Table/Bankpagination'
import BankTable from './Complaintlist/Table/BankTable'
import BankHeader from './Complaintlist/Table/BankHeader'
import BankFormViewModal from './Complaintlist/Table/BankFormViewModal'
import BankFormWrapper from './Form/BankFormWrapper'

const Banklist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Bank Header Component */}
        <BankHeader />
        {/* end:: Bank Header Component */}

        {/* begin:: Bank Table Component */}
        <BankTable />
        {/* end:: Bank Table Component */}
      </KTCard>
      {/* begin:: Bank Table-Pagination Component */}
      <Bankpagination />
      {/* end:: Bank Table-Pagination Component */}
      {/* begin:: Bank Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <BankFormWrapper />}
      {/* end:: Bank Add/Edit Form Component */}
      {/* begin:: Bank View Form Component */}
      {viewIdForUpdate && <BankFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Bank View Form Component */}
    </div>
  )
}

function BanksWrapper() {
  return (
    <ListDataProvider>
      <Banklist />
    </ListDataProvider>
  )
}

export default BanksWrapper
