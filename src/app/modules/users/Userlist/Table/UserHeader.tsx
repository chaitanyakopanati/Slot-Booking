import {Formik} from 'formik'
import {FC, useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../UserContext'
import * as Yup from 'yup'
import {Form} from 'react-bootstrap'
import  {saveAs}  from 'file-saver'

type Props = {
  category: any
}

const UserHeader: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setPageNo,
    setSearchText,
    searchText,
    zoneId,
    setZoneId,
    getDataAllType,
    getDataAllTypeRole,
    getDataAllTypeCreatedBy,
    roleId,
    setRoleId,
    searchByUsername,
    setSearchByUsername,
    createdById,
    setCreatedById,
    fetchAllUser,
    pageNo,
    pageSize,
    fetchAllDownload,
    getDataDownload,
  } = ListPageData()

  const navigate = useNavigate()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  {
    /* begin::Search */
  }
  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }
  {
    /* End::Search */
  }

  {
    /* begin::createdBy */
  }
  const handleCreatedBYchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setCreatedById(e.target.value)
  }
  {
    /* End::createdBy */
  }

  const handlesearchUsernamechange = (e: any) => {
    console.log(e.target.value)
    setSearchByUsername(e.target.value)
  }

  {
    /* begin::Zone */
  }
  const handleZoneChange = (e: any) => {
    // setPageNo(1)
    console.log(e.target.value)
    setZoneId(e.target.value)
  }
  {
    /* emd::Zone */
  }

  {
    /* begin::Role */
  }
  const handleRoleChange = (e: any) => {
    // setPageNo(1)
    console.log(e.target.value)
    setRoleId(e.target.value)
  }
  {
    /* End::Role */
  }

  useEffect(() => {
    fetchAllUser()
  }, [pageNo, pageSize, searchText, zoneId, roleId, searchByUsername, createdById])


  // download
  const downloadFile = async() => {
    fetchAllDownload()
  }


  return (
    <>
      {/* begin::formik Form */}
      <Formik
        initialValues={{
          zoneId: category.data?.zoneId || '',
          roleId: category.data?.roleId || '',
          id: category.data?.id || '',
        }}
        validationSchema={Yup.object({
          zoneId: Yup.number().required('This fied is required'),
          roleId: Yup.string().required('This fielld is required'),
          id: Yup.string().required('This fielld is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          console.log(values, 'values')
        }}
      >
        {(props) => (
          <Form>
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
                    <button
                      type='button'
                      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                      onClick={downloadFile}
                    >
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr091.svg'
                          className='svg-icon-3 me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Download</span>
                    </button>
                  </div>
                  {/* end:: Download */}

                  {/* begin::Filter */}
                  <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                    <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-3 me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Filter</span>
                    </div>
                  </div>
                  {/* end:: Filter */}

                  {/* begin::Create Fault Button*/}
                  <div
                    className='d-flex justify-content-end ms-3'
                    data-kt-user-table-toolbar='base'
                  >
                    <div title='Click to add new category'>
                      <button
                        type='button'
                        className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                        onClick={() => {
                          navigate('form/add')
                        }}
                        // onClick={openAddCategoryModal}
                      >
                        <span className='svg-icon svg-icon-gray-500 me-1'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr075.svg'
                            className='svg-icon-3'
                          />
                        </span>
                        Create User
                      </button>
                    </div>
                  </div>
                  {/* end::Create Fault Button*/}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row w-100 gy-1 mx-0 my-5'>
                  <div className='col-lg-3 col-md-3 '>
                    <label className='form-label fw-bold'>Username:</label>
                    <div className='position-relative'>
                      <span className='svg-icon svg-icon-1 position-absolute ms-4 mt-4'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen021.svg'
                          className='svg-icon-3'
                        />
                      </span>
                      <input
                        placeholder='Search username'
                        className='form-control form-control-lg form-control-solid  ps-14'
                        type='text'
                        value={searchByUsername}
                        onChange={handlesearchUsernamechange}
                        autoComplete='off'
                      />
                    </div>
                  </div>

                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Zone:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('zoneId')}
                      value={zoneId}
                      onChange={handleZoneChange}
                    >
                      <option value=''>All</option>
                      {getDataAllType.map((TypeData, index) => {
                        return (
                          <option key={index} value={TypeData?.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Role:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('roleId')}
                      value={roleId}
                      onChange={handleRoleChange}
                    >
                      <option value=''>All</option>
                      {getDataAllTypeRole.map((TypeDataRole, index) => {
                        return (
                          <option key={index} value={TypeDataRole?.id}>
                            {TypeDataRole?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Created by:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('id')}
                      value={createdById}
                      onChange={handleCreatedBYchange}
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
          </Form>
        )}
      </Formik>
      {/* End::formik Form */}
    </>
  )
}
export default UserHeader
