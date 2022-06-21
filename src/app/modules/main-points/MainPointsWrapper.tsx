import {KTCard} from '../../../_metronic/helpers'
import MainPointPagination from './Complaintlist/Table/MainPointPagination'
import MainPointTable from './Complaintlist/Table/MainPointTable'
import MainPointHeader from './Complaintlist/Table/MainPointHeader'
import MainPointFormViewModal from './Complaintlist/Table/MainPointFormViewModal'
import MainPointFormWrapper from './Form/MainPointFormWrapper'
import {ListDataProvider, ListPageData} from './MainPointContext'

const MainPointlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: MainPoint Header Component */}
        <MainPointHeader category={MainPointHeader} />
        {/* end:: MainPoint Header Component */}

        {/* begin:: MainPoint Table Component */}
        <MainPointTable />
        {/* end:: MainPoint Table Component */}
      </KTCard>
      {/* begin:: MainPoint Table-Pagination Component */}
      <MainPointPagination />
      {/* end:: MainPoint Table-Pagination Component */}
      {/* begin:: MainPoint Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <MainPointFormWrapper />}{' '}
      {/* end:: MainPoint Add/Edit Form Component */}
      {/* begin:: MainPoint View Form Component */}
      {viewIdForUpdate && <MainPointFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: MainPoint View Form Component */}
    </div>
  )
}

function MainPointsWrapper() {
  return (
    <ListDataProvider>
      <MainPointlist />
    </ListDataProvider>
  )
}

export default MainPointsWrapper
