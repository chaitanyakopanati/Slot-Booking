import { useNavigate } from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import { ListPageData } from '../../UserListContext'

const UserTypeHeader = () => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    fetchAllUser,
    filterShow,
    setSearchText,
    searchText,
    setPageNo
  } = ListPageData()
  const navigation = useNavigate()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  
  }

  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex align-items-center justify-content-between w-100 mx-0'>
          <div className='d-flex align-items-center position-relative my-1 col-lg-3'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
            </span>
            <input
              type='text'
              value={searchText}
              onChange={handlesearchange}
              className='form-control form-control-solid ps-14'
              placeholder='Search'
            />
          </div>

          <div className='ms-auto'>
            <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-3' />
              </span>
              Download
            </a>
          </div>

          <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
            <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
              </span>
              Filter
            </div>
          </div>

          <div className='d-flex justify-content-end ms-3' data-kt-user-table-toolbar='base'>
            <div title='Click to add new category'>
              <button
                type='button'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                // onClick={openAddCategoryModal}
                onClick={() => navigation("/users")}
              >
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Create user
              </button>
              
            </div>
          </div>
        </div>

        {filterShow && (
         <div className='row w-100 gy-1 mx-0 my-5'>
         <div className='col-lg-3 col-md-6'>
           <label className='form-label fw-bold'>Username:</label>
           <input
             placeholder='Search username'
             className='form-control form-control-lg form-control-solid'
             type='text'
             autoComplete='off'
           />
         </div>
         <div className='col-lg-3 col-md-6'>
           <label className='form-label fw-bold'>Zone:</label>
           <select className='form-select form-select-solid'>
             <option></option>
             <option value='1'>All</option>
             <option value='2'>Katargam</option>
             <option value='3'>Ring Road</option>
             <option value='4'>Varachha</option>
           </select>
         </div>
         <div className='col-lg-3 col-md-6'>
           <label className='form-label fw-bold'>Role:</label>
           <select className='form-select form-select-solid'>
             <option></option>
             <option value='1'>All</option>
             <option value='2'>Sales Executive</option>
             <option value='3'>Technician</option>
             <option value='4'>Customer</option>
             <option value='4'>Stock Manager</option>
           </select>
         </div>
         <div className='col-lg-3 col-md-6'>
           <label className='form-label fw-bold'>Created by:</label>
           <select className='form-select form-select-solid'>
             <option></option>
             <option value='1'>All</option>
             <option value='2'>A</option>
             <option value='3'>B</option>
             <option value='4'>C</option>
           </select>
         </div>
       </div>
        )}
      </div>
      {/* end::Header */}
    </>
  )
}
export default UserTypeHeader
