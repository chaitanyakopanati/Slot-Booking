import ProductHeader from '../../Complaintlist/Table/ProductHeader'

const ProductListHeader = () => {
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <ProductHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export {ProductListHeader}
