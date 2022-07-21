import { ListPageData } from "../FormsContext"

const FormsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        {/* <span className='svg-icon svg-icon-2x' onClick={() => navigation(-1)}>
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span> */}

        <h2 className='fw-bolder'>{itemIdForUpdate === 'add' ? 'Create Forms' : 'Edit Forms'}</h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default FormsFormHeader
