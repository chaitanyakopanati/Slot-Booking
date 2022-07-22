import {ListPageData} from '../OfficeStockOutwardsContext'

const OfficeStockOutwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>
          {itemIdForUpdate === 'add'
            ? 'Create Office stock outwards'
            : 'Edit Office stock outwards'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default OfficeStockOutwardsFormHeader
