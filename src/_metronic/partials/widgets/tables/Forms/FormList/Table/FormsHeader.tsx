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
    searchByUserName,
    setSearchByUsername,
    createdById,
    setCreatedById,
    fetchAllUser,
    pageNo,
    pageSize,
    statusId,
    salesExecutiveId,
    getUserByRole,
    setStatusId,
    getDataAllType,
    setZoneId,
    getDataAllTypeCompany,
    setCompanyId,
    companyId,
    setPaymentTypeId,
    setSalesExecutiveId,
    paymentTypeId,
    setCreatedEndDate,
    createdEndDate,
    setCreatedStartDate,
    createdStartDate,
    setFormEndDate,
    formEndDate,
    setFormStartDate,
    formStartDate,
    setExpiryEndDate,
    expiryEndDate,
    setExpiryStartDate,
    expiryStartDate,
    getPackagesCategory,
    setPackageCategoryId,
    packageCategoryId,
    connectionTypeId,
    setConnectionTypeId,
    formTypeId,
    setFormTypeId,
    formSubmitTypeId,
    setFormSubmitTypeId,
    fetchAllDownload,
  } = ListPageData()

  const navigate = useNavigate()

  const [fromCreatedAtDate, setFromCreatedAtDate] = useState<any>()
  const [toCreatedAtDate, setToCreatedAtDate] = useState<any>()
  const [fromsDate, setFromsDate] = useState<any>()
  const [toFormsDate, setToFormsDate] = useState<any>()
  const [expiryDate, setExpiryDate] = useState<any>()
  const [toexpiryDate, setToExpiryDate] = useState<any>()

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

  // created at
  const handleEventCreatedAt = (event: any, picker: any) => {
    console.log('start: ', picker.startDate._d)
    console.log('end: ', picker.endDate._d)
    console.log('start date', moment(picker.startDate._d).format('YYYY-MM-DD'))
    setFromCreatedAtDate(picker.startDate._d)
    setToCreatedAtDate(picker.endDate._d)

    setCreatedStartDate(moment(picker.startDate._d).format('YYYY-MM-DD'))
    setCreatedEndDate(moment(picker.endDate._d).format('YYYY-MM-DD'))
  }

  // form date
  const handleEventFormDate = (event: any, picker: any) => {
    console.log('start: ', picker.startDate._d)
    console.log('end: ', picker.endDate._d)
    console.log('start date', moment(picker.startDate._d).format('YYYY-MM-DD'))
    setFromsDate(picker.startDate._d)
    setToFormsDate(picker.endDate._d)

    setFormStartDate(moment(picker.startDate._d).format('YYYY-MM-DD'))
    setFormEndDate(moment(picker.endDate._d).format('YYYY-MM-DD'))
  }

  // expiry Date
  const handleEventExpiryDate = (event: any, picker: any) => {
    console.log('start: ', picker.startDate._d)
    console.log('end: ', picker.endDate._d)
    console.log('start date', moment(picker.startDate._d).format('YYYY-MM-DD'))
    setExpiryDate(picker.startDate._d)
    setToExpiryDate(picker.endDate._d)

    setExpiryStartDate(moment(picker.startDate._d).format('YYYY-MM-DD'))
    setExpiryEndDate(moment(picker.endDate._d).format('YYYY-MM-DD'))
  }

  //sales executive
  const handlesalesExecutiveIdchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSalesExecutiveId(e.target.value)
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

  //Company

  const handleCompanyChange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setCompanyId(e.target.value)
  }

  //Payment
  const handlePaymentchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setPaymentTypeId(e.target.value)
  }

  // packages Category
  const handlePackagesCategoryIdchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setPackageCategoryId(e.target.value)
  }

  // form type
  const handleFormTypechange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setFormTypeId(e.target.value)
  }

  // form sumbit
  const handleFormSumbitchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setFormSubmitTypeId(e.target.value)
  }

  // search by username
  const handlesearchByUserNamechange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchByUsername(e.target.value)
  }

  {
    /* begin::handleConnectionTypechange */
  }
  const handleConnectionTypechange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setConnectionTypeId(e.target.value)
  }
  {
    /* End::handleConnectionTypechange */
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
    searchByUserName,
    createdById,
    statusId,
    companyId,
    salesExecutiveId,
    createdEndDate,
    createdStartDate,
    formStartDate,
    formEndDate,
    expiryStartDate,
    expiryStartDate,
    packageCategoryId,
    connectionTypeId,
    formTypeId,
    formSubmitTypeId,
    paymentTypeId,
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
          companyid: category.data?.companyid || '',
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
                          navigate('formsform/add')
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
                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Username</label>
                      <input
                        placeholder='Search username'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={searchByUserName}
                        onChange={handlesearchByUserNamechange}
                        autoComplete='off'
                      />
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

                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Company</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('companyid')}
                        value={companyId}
                        onChange={handleCompanyChange}
                      >
                        <option value=''>All</option>
                        {getDataAllTypeCompany.map((TypeData: any, index) => {
                          return (
                            <option key={index} value={TypeData.id}>
                              {TypeData?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Sales Executive</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('salesexecutiveid')}
                        value={salesExecutiveId}
                        onChange={handlesalesExecutiveIdchange}
                      >
                        <option value=''>All</option>
                        {getUserByRole?.map((row, index) => {
                          return (
                            <option key={index} value={row?.id}>
                              {row.fullName}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>

                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Payment</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('paymentId')}
                        value={paymentTypeId}
                        onChange={handlePaymentchange}
                      >
                        <option>All</option>
                        <option value='1'>Due</option>
                        <option value='2'>Clear</option>
                      </select>
                    </div>

                    <div className='col-lg-3'>
                      <div>
                        <label className='form-label fw-bold'>Created at</label>
                        <span
                          role='button'
                          onClick={() => {
                            console.log('datatatatat========================\\\\\\\\\\\\')
                            setFromCreatedAtDate('')
                            setToCreatedAtDate('')
                            setCreatedStartDate('')
                            setCreatedEndDate('')
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
                            onHide={handleEventCreatedAt}
                          >
                            <div className='form-select form-select-solid'>
                              <input
                                style={{background: '#f5f8fa', outline: 'none', border: 'none'}}
                                placeholder='All'
                                value={`${
                                  fromCreatedAtDate && toCreatedAtDate
                                    ? `${moment(fromCreatedAtDate).format('DD-MM-yyyy')} - ${moment(
                                        toCreatedAtDate
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
                      <label className='form-label fw-bold'>Form date</label>
                      <span
                        role='button'
                        onClick={() => {
                          console.log('datatatatat========================\\\\\\\\\\\\')
                          setFromsDate('')
                          setToFormsDate('')
                          setFormStartDate('')
                          setFormEndDate('')
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
                          onHide={handleEventFormDate}
                        >
                          <div className='form-select form-select-solid'>
                            <input
                              style={{background: '#f5f8fa', outline: 'none', border: 'none'}}
                              placeholder='All'
                              value={`${
                                fromsDate && toFormsDate
                                  ? `${moment(fromsDate).format('DD-MM-yyyy')} - ${moment(
                                      toFormsDate
                                    ).format('DD-MM-yyyy')}`
                                  : ''
                              }`}
                            />
                          </div>
                        </DateRangePicker>
                      </div>
                    </div>

                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Expiry date</label>
                      <span
                        role='button'
                        onClick={() => {
                          console.log('datatatatat========================\\\\\\\\\\\\')
                          setExpiryDate('')
                          setToExpiryDate('')
                          setExpiryStartDate('')
                          setExpiryEndDate('')
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
                          onHide={handleEventExpiryDate}
                        >
                          <div className='form-select form-select-solid'>
                            <input
                              style={{background: '#f5f8fa', outline: 'none', border: 'none'}}
                              placeholder='All'
                              value={`${
                                expiryDate && toexpiryDate
                                  ? `${moment(expiryDate).format('DD-MM-yyyy')} - ${moment(
                                      toexpiryDate
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
                      <label className='form-label fw-bold'>Package Category</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('packagecatid')}
                        value={packageCategoryId}
                        onChange={handlePackagesCategoryIdchange}
                      >
                        <option value=''>All</option>
                        {getPackagesCategory?.map((row, index) => {
                          return (
                            <option key={index} value={row?.id}>
                              {row.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Connection type</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('connectiontype')}
                        value={connectionTypeId}
                        onChange={handleConnectionTypechange}
                      >
                        <option>All</option>
                        <option value='1'>FormCable </option>
                        <option value='2'>Wireless </option>
                        <option value='3'>NotDescribed </option>
                        <option value='4'>NotInstalled </option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Form type</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('formtype')}
                        value={formTypeId}
                        onChange={handleFormTypechange}
                      >
                        <option>All</option>
                        <option value='1'>New</option>
                        <option value='2'>Renew</option>
                        <option value='3'>Upgrade </option>
                        <option value='4'>Shifting </option>
                        <option value='5'>Other </option>
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Form submit</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('status')}
                        value={formSubmitTypeId}
                        onChange={handleFormSumbitchange}
                      >
                        <option>All</option>
                        <option value='1'>Pending</option>
                        <option value='2'>Done</option>
                        <option value='3'>Cancel</option>
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
