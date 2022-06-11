import {KTCard} from '../../../_metronic/helpers'
import MainPointFooter from './Complaintlist/Table/MainPointFooter'
import MainPointTable from './Complaintlist/Table/MainPointTable'
import MainPointTypeHeader from './Complaintlist/Table/MainPointTypeHeader'
import MainPointView from './Complaintlist/Table/MainPointView'
import MainPointFormWrapper from './Form/MainPointFormWrapper'
import {ListDataProvider, ListPageData} from './MainPointContext'

const Complaintlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <MainPointTypeHeader /> {/* begin::  header functionlity */}
        <MainPointTable /> {/* begin::  Table */}
      </KTCard>
      <MainPointFooter /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <MainPointFormWrapper />}{' '}
      {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <MainPointView category={viewIdForUpdate} />}{' '}
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
