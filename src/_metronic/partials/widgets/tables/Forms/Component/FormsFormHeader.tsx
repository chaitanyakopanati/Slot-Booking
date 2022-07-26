import {ListPageData} from '../FormsContext'

const FormsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>{itemIdForUpdate === 'add' ? 'Create Forms' : 'Edit Forms'}</h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default FormsFormHeader
