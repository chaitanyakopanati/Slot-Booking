import {useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../FaultsContext'

const FaultsHeader = () => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setPageNo,
    setSearchText,
    searchText,
    fetchAllFault,
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
    fetchAllFault()
  }, [searchText])
  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex align-items-center justify-content-between w-100 mx-0'>
          <div className='d-flex align-items-center position-relative my-1 col-lg-3'>
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

          {/* begin::Download */}
          <div className='ms-auto'>
            <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-3' />
              </span>
              Download
            </a>
          </div>
          {/* end:: Download */}

          {/* begin::Filter */}
          <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
            <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
              </span>
              Filter
            </div>
          </div>
          {/* end:: Filter */}

          {/* begin::Create Fault Button*/}
          <div className='d-flex justify-content-end ms-3' data-kt-user-table-toolbar='base'>
            <div title='Click to add new category'>
              <button
                type='button'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                onClick={openAddCategoryModal}
              >
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Create Fault
              </button>
            </div>
          </div>
          {/* end::Create Fault Button*/}
        </div>

        {/* begin:: Filter:- Created By */}
        {filterShow && (
          <div className='row w-100 mx-0 my-5'>
            <div className='col-lg-3'>
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
export default FaultsHeader
