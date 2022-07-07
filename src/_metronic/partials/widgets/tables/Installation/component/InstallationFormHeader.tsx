
import { ListPageData } from "../InstallationContext"

const InstallationFormHeader = () =>{
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        {/* <span className='svg-icon svg-icon-2x' onClick={() => navigation(-1)}>
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span> */}

        <h2 className='fw-bolder'>{itemIdForUpdate === 'add' ? 'Create installations' : 'Edit installations'}</h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default InstallationFormHeader