import {ListPageData} from '../InstallationContext'

const InstallationFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <h2 className='fw-bolder'>
          {itemIdForUpdate === 'add' ? 'Create installations' : 'Edit installations'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default InstallationFormHeader
