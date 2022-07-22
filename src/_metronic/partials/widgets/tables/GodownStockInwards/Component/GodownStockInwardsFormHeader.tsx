import {ListPageData} from '../GodownStockInwardsContext'

const GodownStockInwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>
          {itemIdForUpdate === 'add' ? 'Create godown stock inward' : 'Edit godown stock inward'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default GodownStockInwardsFormHeader
