import {Formik} from 'formik'
import {FC, useEffect, useLayoutEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {Form} from 'react-bootstrap'
import {ListPageData} from '../../InquiriesContext'
import {KTSVG} from '../../../../../../helpers'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment'
import closeIcon from '../../../../../../../app/images/closeIcon.svg'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'

type Props = {
  category: any
}

const InquiriesHeader: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    filterShow,
    setPageNo,
    setSearchText,
    searchText,
    zoneId,
    roleId,
    searchByUsername,
    createdById,
    setCreatedById,
    fetchAllUser,
    pageNo,
    pageSize,
    statusId,
    statusData,
    getDataAllTypeCreatedBy,
    salesExecutiveId,
    setSalesExecutiveId,
    getUserByRole,
    setStatusId,
    startDate,
    endDate,
    setStartDate,
    fetchAllDownload,
    setEndDate,
    getUserNameData,
  } = ListPageData()

  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  const [fromDate, setFromDate] = useState<any>()
  const [toDate, setToDate] = useState<any>()
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last Year': [
      moment().subtract(1, 'year').startOf('year'),
      moment().subtract(1, 'year').endOf('year'),
    ],
  }

  const handleEvent = (event: any, picker: any) => {
    setFromDate(picker.startDate._d)
    setToDate(picker.endDate._d)
    setStartDate(moment(picker.startDate._d).format('YYYY-MM-DD'))
    setEndDate(moment(picker.endDate._d).format('YYYY-MM-DD'))
  }

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  {
    /* begin::Search */
  }
  const handlesearchange = (e: any) => {
    setPageNo(1)
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
    setCreatedById(e.target.value)
  }
  {
    /* End::createdBy */
  }

  const handleStatuschange = (e: any) => {
    setPageNo(1)
    setStatusId(e.target.value)
  }

  // sale excutive
  const handleSaleExcutivechange = (e: any) => {
    setPageNo(1)
    setSalesExecutiveId(e.target.value)
  }

  // download
  const downloadFile = async () => {
    fetchAllDownload()
  }

  useEffect(() => {
    fetchAllUser()
  }, [
    pageNo,
    pageSize,
    searchText,
    zoneId,
    roleId,
    searchByUsername,
    createdById,
    statusId,
    startDate,
    endDate,
    salesExecutiveId,
  ])

  useLayoutEffect(() => {
    if (auth?.roleId == 5) {
      setSalesExecutiveId(auth?.userId)
    }
  }, [])

  return (
    <>
      {/* begin::formik Form */}
      <Formik
        initialValues={{
          id: category.data?.id || '',
          username: category.data?.username || '',
          salesexecutiveId: category.data?.salesexecutiveId || '',
          fullName: category.data?.fullName || '',
        }}
        validationSchema={Yup.object({
          id: Yup.string().required('This fielld is required'),
          username: Yup.string().required('This fielld is required'),
          fullName: Yup.string().required('This fielld is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {}}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
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
                  {Access[id].hasOwnProperty('download') && (
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
                        <span className='d-none d-sm-block ms-3'>Download report</span>
                      </button>
                    </div>
                  )}
                  {/* end:: Download */}

                  {/* begin::Filter */}
                  {auth?.roleId == 5 ? (
                    ''
                  ) : (
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
                  )}
                  {/* end:: Filter */}

                  {/* begin::Create Fault Button*/}
                  {auth?.roleId == 5 || auth?.roleId == 3 ? (
                    ''
                  ) : (
                    <div className='d-flex justify-content-end ms-3'>
                      <div title='Click to add new category'>
                        <button
                          type='button'
                          className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                          onClick={() => {
                            navigate('inquiriesform/add')
                          }}
                          // onClick={openAddCategoryModal}
                        >
                          <span className='svg-icon svg-icon-gray-500 me-1'>
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr075.svg'
                              className='svg-icon-3'
                            />
                          </span>
                          Create Inquiries
                        </button>
                      </div>
                    </div>
                  )}
                  {/* end::Create Fault Button*/}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row w-100 mx-0 my-3'>
                  <div className='col-lg-3'>
                    <div
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                    >
                      <div className='d-flex'>
                        <label className='form-label fw-bold'>Inquiry date</label>

                        <span
                          role='button'
                          onClick={() => {
                            setFromDate('')
                            setToDate('')
                            setStartDate('')
                            setEndDate('')
                          }}
                        >
                          <img src={closeIcon} style={{height: '14px', marginLeft: '5px'}} />
                        </span>
                      </div>

                      <div>
                        <DateRangePicker
                          initialSettings={{
                            alwaysShowCalendars: false,
                            ranges: range,
                          }}
                          onHide={handleEvent}
                        >
                          <div className='form-select form-select-solid'>
                            <input
                              style={{background: '#f5f8fa', outline: 'none', border: 'none'}}
                              placeholder='All'
                              value={`${
                                fromDate && toDate
                                  ? `${moment(fromDate).format('DD-MM-yyyy')}-${moment(
                                      toDate
                                    ).format('DD-MM-yyyy')}`
                                  : ''
                              }`}
                            />
                          </div>
                        </DateRangePicker>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('statusId')}
                      value={statusId}
                      onChange={handleStatuschange}
                    >
                      <option value=''>All</option>
                      {statusData?.map((row, index) => {
                        return (
                          <option key={index} value={row?.id}>
                            {row.status}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Sales Executive </label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('salesexecutiveId')}
                      value={salesExecutiveId}
                      onChange={handleSaleExcutivechange}
                    >
                      <option value=''>All</option>
                      <option value='0'>Not Described</option>

                      {getUserByRole?.map((row, index) => {
                        return (
                          <option key={index} value={row?.id}>
                            {row.fullName}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created By</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('id')}
                      value={createdById}
                      onChange={handleCreatedBYchange}
                    >
                      <option value=''>All</option>
                      {getDataAllTypeCreatedBy?.map((TypeData, index) => {
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
export default InquiriesHeader
