import {KTSVG} from '../../../../../_metronic/helpers'
import {CustomTooltip} from '../../../../routing/customtooltip'
import {ListPageData} from '../../ProductListContext'

const ProductFormHeader = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>{itemIdForUpdate ? 'Edit product' : 'Create product'}</h2>
        {/* end::Modal title */}

        {/* begin::Close Icon */}
        <CustomTooltip title='Close'>
          <div
            className='btn btn-icon btn-sm btn-active-icon-primary'
            onClick={() => setItemIdForUpdate(undefined)}
            style={{cursor: 'pointer'}}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </div>
        </CustomTooltip>
        {/* end::Close Icon*/}
      </div>
    </>
  )
}
export default ProductFormHeader
