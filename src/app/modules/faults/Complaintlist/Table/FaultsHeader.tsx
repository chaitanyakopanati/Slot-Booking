import {Formik} from 'formik'
import {FC, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../FaultsContext'
import * as Yup from 'yup'

type Props = {
  category: any
}

const FaultsHeader: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setPageNo,
    setSearchText,
    searchText,
    getDataFaultsAllType,
    createdById,
    setCreatedById,
    getDataFaults,
    fetchAllFault,
    pageNo,
    getDataAllTypeCreatedBy,
    pageSize,
  } = ListPageData()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  {
    /* begin::Search */
  }
  const handleSearchChange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }
  {
    /* end::Search */
  }

  {
    /* begin::CreatedBy */
  }
  const handleCreatedByChange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setCreatedById(e.target.value)
  }
  {
    /* End::CreatedBy */
  }

  useEffect(() => {
    getDataFaultsAllType()
    fetchAllFault()
  }, [pageNo, pageSize, searchText, createdById])

  return (
    <>
      {/* begin::Formik Form */}
      <Formik
        initialValues={{
          createdById: category.data?.createdById || '',
          createdByName: category.data?.createdByName || '',
          id: category.data?.id || '',
        }}
        validationSchema={Yup.object({
          createdById: Yup.number().required('This fied is required'),
          id: Yup.string().required('This fied is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          console.log(values, 'values')
        }}
      >
        {(props) => (
          <>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
                <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
                  <span className='svg-icon svg-icon-1 position-absolute ms-4'>
                    <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
                  </span>

                  {/* begin:: Search */}
                  <input
                    type='text'
                    value={searchText}
                    onChange={handleSearchChange}
                    className='form-control form-control-solid ps-14'
                    placeholder='Search'
                  />
                  {/* end:: Search */}
                </div>

                <div className='d-flex align-items-center'>
                  {/* begin:: Filter */}
                  <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                    <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-2  me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Filter</span>
                    </div>
                  </div>
                  {/* end:: Filter */}

                  {/* begin:: Create Complaint Button */}
                  <div className='ms-3'>
                    <div
                      className='d-flex justify-content-end ms-3'
                      data-kt-user-table-toolbar='base'
                    >
                      <div title='Click to add new category'>
                        <button
                          type='button'
                          className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                          onClick={openAddCategoryModal}
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr075.svg'
                            className='svg-icon-3'
                          />
                          Create Faults
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* end:: Create Complaint Button */}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row w-100  mx-0 my-5'>
                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Created by:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('id')}
                      value={createdById}
                      onChange={handleCreatedByChange}
                    >
                      <option value=''>All</option>
                      {getDataAllTypeCreatedBy.map((TypeData, index) => {
                        return (
                          <option key={index} value={TypeData?.id}>
                            {TypeData?.fullName}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              )}
              {/* end:: Filter:- Created By */}
            </div>
            {/* end::Header */}
          </>
        )}
      </Formik>
      {/* End::Formik Form */}
    </>
  )
}
export default FaultsHeader
