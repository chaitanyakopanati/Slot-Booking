import { ListPageData } from "../OfficeOldStockOutwardsContext"


const OfficeOldStockOutwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>{itemIdForUpdate === 'add' ? 'Create Old Office stock outwards' : 'Edit Old Office stock outwards'}</h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default OfficeOldStockOutwardsFormHeader
