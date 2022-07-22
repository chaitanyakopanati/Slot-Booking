import {ListPageData} from '../OfficeOldStockInwardsContext'

const OfficeOldStockInwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>
          {itemIdForUpdate === 'add'
            ? 'Create Old Office stock inwards'
            : 'Edit Old Office stock inwards'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default OfficeOldStockInwardsFormHeader
