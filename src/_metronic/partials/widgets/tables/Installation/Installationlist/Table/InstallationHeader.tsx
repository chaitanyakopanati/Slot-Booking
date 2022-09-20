import {Formik} from 'formik'
import {FC, useEffect, useLayoutEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {Form} from 'react-bootstrap'
import {KTSVG} from '../../../../../../helpers'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment'
import {ListPageData} from '../../InstallationContext'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'
import React from 'react'
import closeIcon from '../../../../../../../app/images/closeIcon.svg'

type Props = {
  category: any
}

const InstallationHeader: FC<Props> = ({category}) => {
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
    fetchAllUser,
    pageNo,
    pageSize,
    statusId,
    getDataAllTypeZone,
    salesExecutiveId,
    setSalesExecutiveId,
    getUserByRole,
    setStatusId,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    connectionTypeId,
    setConnectionTypeId,
    mainPointId,
    setMainPointId,
    getMainPoint,
    setZoneId,
    installerId,
    setInstallerId,
    getInstallations,
    companyId,
    setCompanyId,
    getCompanyTypeData,
    fetchAllDownload,
    fetchAllUsers,
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

  {
    /* begin::Search */
  }

  useEffect(() => {
    if (auth?.roleId == 7) {
      setInstallerId(auth?.userId)
    }
  }, [])
  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }
  {
    /* End::Search */
  }

  //sales executive
  const handlesalesExecutiveIdchange = (e: any) => {
    setSalesExecutiveId(e.target.value)
  }
  {
    /* begin::handleMainPointchange */
  }
  const handleMainPointchange = (e: any) => {
    setMainPointId(e.target.value)
  }
  {
    /* End::handleMainPointchange */
  }

  {
    /* begin::handleConnectionTypechange */
  }
  const handleConnectionTypechange = (e: any) => {
    setConnectionTypeId(e.target.value)
  }
  {
    /* End::handleConnectionTypechange */
  }

  //status
  const handleStatuschange = (e: any) => {
    setStatusId(e.target.value)
  }

  {
    /* begin::Zone */
  }
  const handleZoneChange = (e: any) => {
    setZoneId(e.target.value)
  }
  {
    /* emd::Zone */
  }

  const handleInstallerChange = (e: any) => {
    setInstallerId(e.target.value)
  }

  //Company

  const handleCompanyChange = (e: any) => {
    setCompanyId(e.target.value)
  }

  // download
  const downloadFile = async () => {
    fetchAllDownload()
  }

  useEffect(() => {
    if (installerId) {
      fetchAllUsers()
    }
  }, [
    searchText,
    zoneId,
    searchByUsername,
    createdById,
    statusId,
    startDate,
    endDate,
    connectionTypeId,
    mainPointId,
    installerId,
    salesExecutiveId,
    companyId,
    pageSize,
    pageNo,
  ])

  useEffect(() => {
    if (auth?.roleId !== 7) {
      fetchAllUser()
    }
  }, [
    searchText,
    zoneId,
    searchByUsername,
    createdById,
    statusId,
    startDate,
    endDate,
    connectionTypeId,
    mainPointId,
    installerId,
    salesExecutiveId,
    companyId,
    pageSize,
    pageNo,
  ])

  return (
    <>
      {/* begin::formik Form */}
      <Formik
        initialValues={{
          id: category.data?.id || '',
          username: category.data?.username || '',
          fullName: category.data?.fullName || '',
          connectiontypeId: category.data?.connectiontypeId || '',
          zonepointid: category.data?.zonepointid || '',
          zoneId: category.data?.zoneId || '',
        }}
        validationSchema={Yup.object({
          id: Yup.string().required('This fielld is required'),
          username: Yup.string().required('This fielld is required'),
          fullName: Yup.string().required('This fielld is required'),
          connectiontypeId: Yup.string().required('This fielld is required'),
          zonepointid: Yup.string().required('This fielld is required'),
          zoneId: Yup.string().required('This fielld is required'),
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
                  {auth?.roleId !== 7 ? (
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
                  ) : (
                    ''
                  )}
                  {/* end:: Filter */}

                  {/* begin::Create Installation Button*/}
                  {auth?.roleId == 7 || auth?.roleId == 3 ? (
                    ''
                  ) : (
                    <div className='d-flex justify-content-end ms-3'>
                      <div title='Click to add new category'>
                        <button
                          type='button'
                          className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                          onClick={() => {
                            navigate('installationsform/add')
                          }}
                        >
                          <span className='svg-icon svg-icon-gray-500 me-1'>
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr075.svg'
                              className='svg-icon-3'
                            />
                          </span>
                          Create Installation
                        </button>
                      </div>
                    </div>
                  )}

                  {/* end::Create Installation Button*/}
                </div>
              </div>

              {/* begin:: Filter:- Installation By */}
              {filterShow && (
                <div className='row w-100 mx-0 my-3'>
                  <div className='col-lg-3'>
                    <div
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                    >
                      <div>
                        <div className='d-flex'>
                          <label className='form-label fw-bold'>Installer date</label>
                          {/* <label className='form-label fw-bold'>Installer date</label> */}
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
                      <option value='1'>Pending</option>
                      <option value='2'>Done</option>
                      <option value='3'>Partially Done</option>
                    </select>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Sales Executive</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('salesexecutiveId')}
                      value={salesExecutiveId}
                      onChange={handlesalesExecutiveIdchange}
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
                    <label className='form-label fw-bold'>connection Type</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('connectiontypeId')}
                      value={connectionTypeId}
                      onChange={handleConnectionTypechange}
                    >
                      <option value=''>All</option>
                      <option value='1'>Cable</option>
                      <option value='2'>Wireless</option>
                      <option value='3'>Not Described</option>
                    </select>
                  </div>

                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Main Point</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('zonepointid')}
                        value={mainPointId}
                        onChange={handleMainPointchange}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not Described</option>

                        {getMainPoint.map((TypeData: any, index: number) => {
                          return (
                            <option key={index} value={TypeData?.id}>
                              {TypeData?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Zone</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('zoneId')}
                        value={zoneId}
                        onChange={handleZoneChange}
                      >
                        <option value=''>All</option>
                        {getDataAllTypeZone.map((TypeData, index) => {
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
                        {...props.getFieldProps('installerid')}
                        value={companyId}
                        onChange={handleCompanyChange}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not Described</option>

                        {getCompanyTypeData.map((TypeData: any, index) => {
                          return (
                            <option key={index} value={TypeData.id}>
                              {TypeData?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Installer</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('installerid')}
                        value={installerId}
                        onChange={handleInstallerChange}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not Described</option>

                        {getInstallations.map((TypeData: any, index) => {
                          return (
                            <option key={index} value={TypeData.id}>
                              {TypeData?.fullName}
                            </option>
                          )
                        })}
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
export default InstallationHeader
