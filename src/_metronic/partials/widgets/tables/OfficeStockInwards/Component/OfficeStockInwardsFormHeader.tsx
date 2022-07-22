import {ListPageData} from '../OfficeStockInwardsContext'

const OfficeStockInwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>
          {itemIdForUpdate === 'add' ? 'Create Office stock inwards' : 'Edit Office stock inwards'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default OfficeStockInwardsFormHeader
