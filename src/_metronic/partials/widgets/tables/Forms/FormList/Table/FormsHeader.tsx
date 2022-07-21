import {Formik} from 'formik'
import {FC, useEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {Form} from 'react-bootstrap'
import {ListPageData} from '../../FormsContext'
import {KTSVG} from '../../../../../../helpers'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment'
import closeIcon from '../../../../../../../app/images/closeIcon.svg'

type Props = {
  category: any
}

const FormsHeader: FC<Props> = ({category}) => {
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
    salesExecutiveId,
    getUserByRole,
    setStatusId,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = ListPageData()

  const navigate = useNavigate()

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
    console.log('start: ', picker.startDate._d)
    console.log('end: ', picker.endDate._d)
    console.log('start date', moment(picker.startDate._d).format('YYYY-MM-DD'))
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

  const handleStatuschange = (e: any) => {
    // setPageNo(1)
    console.log(e.target.value)
    setStatusId(e.target.value)
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
  ])

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
        onSubmit={async (values: any, {resetForm}) => {
          console.log(values, 'values')
        }}
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
                  <div className='ms-auto'>
                    <a
                      href='#'
                      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                    >
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr091.svg'
                          className='svg-icon-3 me-0'
                        />
                      </span>
                      <span className='d-none d-sm-block ms-3'>Download</span>
                    </a>
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
                        Create Forms
                      </button>
                    </div>
                  </div>
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
                      <label className='form-label fw-bold'>Inquiry date</label>
                      <span
                        role='button'
                        onClick={() => {
                          console.log('datatatatat========================\\\\\\\\\\\\')
                          setFromDate('')
                          setToDate('')
                          setStartDate('')
                          setEndDate('')
                        }}
                      >
                        <img src={closeIcon} style={{height: '14px', marginLeft: '5px'}} />
                      </span>
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

                

                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Username</label>
                      <input
                        placeholder='Search username'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                      />
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Zone</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>All</option>
                        <option value='2'>Katargam</option>
                        <option value='3'>Ring Road</option>
                        <option value='4'>Varachha</option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Company</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>All</option>
                        <option value='2'>Earth</option>
                        <option value='3'>Softnet</option>
                      </select>
                    </div>

                    <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Sales Executive </label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('salesexecutiveId')}
                      value={salesExecutiveId}
                      onChange={handleStatuschange}
                    >
                      <option value=''>All</option>
                      {getUserByRole?.map((row, index) => {
                        return (
                          <option key={index} value={row?.id}>
                            {row.username}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  </div>

                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Payment</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>All</option>
                        <option value='2'>Due</option>
                        <option value='3'>Clear</option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <div>
                        <label className='form-label fw-bold'>Created at</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div>
                        <label className='form-label fw-bold'>Form date</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div>
                        <label className='form-label fw-bold'>Expiry date</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Package Category</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option>All</option>
                        <option value='1'>Not described</option>
                        <option value='2'>Broadband</option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Connection type</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option>All</option>
                        <option value='1'>Not described</option>
                        <option value='2'>Cable</option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Form type</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>All</option>
                        <option value='2'>New</option>
                        <option value='3'>Renew</option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Form submit</label>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>All</option>
                        <option value='2'>Pending</option>
                        <option value='3'>Done</option>
                        <option value='4'>Cancel</option>
                      </select>
                    </div>
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
export default FormsHeader
