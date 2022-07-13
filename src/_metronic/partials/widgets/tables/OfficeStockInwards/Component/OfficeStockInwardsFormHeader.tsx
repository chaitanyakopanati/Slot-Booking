import { CustomTooltip } from "../../../../../../app/routing/customtooltip"
import { KTSVG } from "../../../../../helpers"
import { ListPageData } from "../OfficeStockInwardsContext"


const OfficeStockInwardsFormHeader = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>{itemIdForUpdate ? 'Edit office stock inward' : 'Create  office stock inward'}</h2>
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
        {/* end::Close Icon */}
      </div>
    </>
  )
}
export default OfficeStockInwardsFormHeader

