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
        {/* begin:: Product Header Component */}
        <ProductHeader category={ProductHeader} />
        {/* end:: Product Header Component */}

        {/* begin:: Product Table Component */}
        <ProductTable />
        {/* end:: Product Table Component */}
      </KTCard>
      {/* begin:: Product Table-Pagination Component */}
      <Productpagination />
      {/* end:: Product Table-Pagination Component */}
      {/* begin:: Product Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <ProductFormWrapper />}
      {/* end:: Product Add/Edit Form Component */}
      {/* begin:: Product View Form Component */}
      {viewIdForUpdate && <ProductFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Product View Form Component */}
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
