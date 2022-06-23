import {KTCard} from '../../../_metronic/helpers'
import UserFormWrapper from './Form/UserFormWrapper'
import { ListDataProvider, ListPageData } from './UserContext'
import UserFormViewModal from './Userlist/Table/UserFormViewModal'
import UserHeader from './Userlist/Table/UserHeader'
import UserPagination from './Userlist/Table/UserPagination'
import UserTable from './Userlist/Table/UserTable'

const Userlist = () => {
  const {viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: User Header Component */}
        <UserHeader category={UserHeader} />
        {/* end:: User Header Component */}

        {/* begin:: User Table Component */}
        <UserTable />
        {/* end:: User Table Component */}
      </KTCard>
      {/* begin:: User Table-Pagination Component */}
      <UserPagination />
      {/* begin:: User View Form Component */}
      {viewIdForUpdate && <UserFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: User View Form Component */}
    </div>
  )
}

function FaultsWrapper() {
  return (
    <ListDataProvider>
      <Userlist />
    </ListDataProvider>
  )
}

export default FaultsWrapper