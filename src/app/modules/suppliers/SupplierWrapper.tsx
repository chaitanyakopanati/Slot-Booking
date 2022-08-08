import {KTCard} from '../../../_metronic/helpers'
import SupplierPagination from './SupplierTableView/SupplierPagination'
import SupplierTable from './SupplierTableView/SupplierTable'
import {ListDataProvider, ListPageData} from './SupplierContext'
import SupplierFormWrapper from './Form/SupplierFormWrapper'
import SupplierFormViewModal from './SupplierTableView/SupplierFormViewModal'
import SupplierHeader from './SupplierTableView/SupplierHeader'

const SupplierList = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <SupplierHeader category={SupplierHeader} />

        <SupplierTable />
      </KTCard>
      <SupplierPagination />
      {itemIdForUpdate !== undefined && <SupplierFormWrapper />}{' '}
      {viewIdForUpdate && <SupplierFormViewModal category={viewIdForUpdate} />}{' '}
    </div>
  )
}

function SupplierWrapper() {
  return (
    <ListDataProvider>
      <SupplierList />
    </ListDataProvider>
  )
}

export default SupplierWrapper
