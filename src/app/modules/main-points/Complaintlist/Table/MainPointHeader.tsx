import {useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../MainPointContext'

const MainPointHeader = () => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setSearchText,
    searchText,
    setPageNo,
    fetchAllMainPoint,
  } = ListPageData()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  useEffect(() => {
    fetchAllMainPoint()
  }, [searchText])
  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
      <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
      <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
            </span>
            {/* begin::Search */}
            <input
              type='text'
              value={searchText}
              onChange={handlesearchange}
              className='form-control form-control-solid ps-14'
              placeholder='Search'
            />
            {/* end:: Search */}
          </div>

          <div className='d-flex align-items-center'>
          {/* begin::Download */}
          <div className='ms-auto'>
            <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-0'>
                <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-3 me-0' />
              </span>
              <span className='d-none d-sm-block ms-3'>Download</span>
            </a>
          </div>
          {/* end:: Download */}

          {/* begin::Filter */}
          <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
            <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-0'>
                <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3 me-0' />
              </span>
              <span className='d-none d-sm-block ms-3'>Filter</span>
            </div>
          </div>
          {/* end:: Filter */}

          {/* begin::Create MainPoint Button */}
          <div className='d-flex justify-content-end ms-3' data-kt-user-table-toolbar='base'>
            <div title='Click to add new category'>
              <button
                type='button'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                onClick={openAddCategoryModal}
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Main Point
              </button>
            </div>
          </div>
          {/* end::Create MainPoint Button */}
        </div>
        </div>

        {/* begin:: Filter:- Created By */}
        {filterShow && (
          <div className='row w-100 mx-0 my-5'>
            <div className='col-lg-3 col-md-3'>
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
        {/* end:: Filter:- Created By */}
      </div>
      {/* end::Header */}
    </>
  )
}
export default MainPointHeader
