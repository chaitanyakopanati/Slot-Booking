import {KTCard} from '../../../_metronic/helpers'
import Productpagination from './Complaintlist/Table/ProductPagination'
import ProductTable from './Complaintlist/Table/ProductTable'
import ProductHeader from './Complaintlist/Table/ProductHeader'
import ProductFormViewModal from './Complaintlist/Table/ProductFormViewModal'
import ProductFormWrapper from './Form/ProductFormWrapper'
import {ListDataProvider, ListPageData} from './ProductListContext'

const Productlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <ProductHeader /> {/* begin::  header functionlity */}
        <ProductTable /> {/* begin::  Table */}
      </KTCard>
      <Productpagination /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <ProductFormWrapper />} {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <ProductFormViewModal category={viewIdForUpdate} />}{' '}
      {/* begin::  ViewComplaint*/}
    </div>
  )
}

function ProductsWrapper() {
  return (
    <ListDataProvider>
      <Productlist />
    </ListDataProvider>
  )
}

export default ProductsWrapper
