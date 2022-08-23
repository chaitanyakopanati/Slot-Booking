import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../ComplaintContext'
import {Formik, Form} from 'formik'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment'
import Swal from 'sweetalert2'
import {toast} from 'react-toastify'
import ComplaintsViewService from '../../helperComplaint/ApiDataRequest'
import {useAuth} from '../../../auth'
import Access from '../../../../../_metronic/layout/components/aside/Accessibility'
// import closeIcon from '../../../../../../../app/images/closeIcon.svg'
import closeIcon from '../../../../../app/images/closeIcon.svg'
const ComplaintHeader = () => {
  const [filterShow, setFilterShow] = useState(false)
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()

  const id: number | any = auth?.roleId
  const {
    setPageNo,
    setSearchText,
    searchText,
    fetchAllComplaint,
    setItemIdForUpdate,
    pageNo,
    pageSize,
    fetchAllDownload,
    setComplainttypeid,
    complainttypeid,
    getDataAllTypeComplaint,
    DataGetAllTypeComplaint,
    setStatus,
    status,
    createdDate,
    setCreatedDate,
    DataGetAllTypeTechnician,
    getDataAllTypeTechnician,
    setassignToId,
    assignToId,
    DataGetAllTypeZone,
    getDataAllType,
    setZoneId,
    zoneId,
    DataGetAllFault,
    getDataAllFault,
    faultid,
    setFaultid,
    companiesName,
    DataGetCompaniesName,
    CompanyId,
    setCompanyId,
    DataGetPackagesName,
    packagesName,
    DataGetAllTypeCreatedByTypes,
    getDataAllTypeCreatedBy,
    PackageCategoryId,
    setPackageCategoryId,
    createdBy,
    setcreatedById,
    setStartDate,
    setEndDate,
    startDate,
    endDate,
    setAddComplaint,
    addComplaint,
  } = ListPageData()

  useEffect(() => {
    DataGetAllTypeComplaint()
    DataGetAllTypeTechnician()
    DataGetAllTypeZone()
    DataGetAllFault()
    DataGetCompaniesName()
    DataGetPackagesName()
    DataGetAllTypeCreatedByTypes()
  }, [])

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

  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }

  const downloadFileComplaint = () => {
    fetchAllDownload()
  }
  const handleComplaintType = (e: any) => {
    setComplainttypeid(e.target.value)
  }

  const handleStatus = (e: any) => {
    setStatus(e.target.value)
  }

  const handleDate = (e: any) => {
    setCreatedDate(e.target.value)
  }

  const handleAssign = (e: any) => {
    setassignToId(e.target.value)
  }

  const handleZoneId = (e: any) => {
    setZoneId(e.target.value)
  }

  const handleFaultId = (e: any) => {
    setFaultid(e.target.value)
  }

  const handleCompanyId = (e: any) => {
    setCompanyId(e.target.value)
  }

  const handlePackageId = (e: any) => {
    setPackageCategoryId(e.target.value)
  }

  const handleCreaterId = (e: any) => {
    setcreatedById(e.target.value)
  }

  useEffect(() => {
    fetchAllComplaint()
  }, [
    pageNo,
    pageSize,
    searchText,
    createdBy,
    zoneId,
    PackageCategoryId,
    CompanyId,
    faultid,
    zoneId,
    createdDate,
    status,
    complainttypeid,
    startDate,
    endDate,
    assignToId,
  ])

  useLayoutEffect(() => {
    if (auth?.roleId == 7) {
      setassignToId(auth?.userId)
    }
  }, [])

  const deleteMultipleComplaint = () => {
    if (addComplaint.length > 0) {
      Swal.fire({
        title: `Do you want to delete this records ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            let response: any = await ComplaintsViewService.deleteComplaintByIds(addComplaint)
            toast.success(` Data Deleted Successfully`)
            toast.dismiss('1s')
            fetchAllComplaint()
          } catch (error: any) {
            toast.error(error?.data?.message)
            toast.dismiss('1s')
            fetchAllComplaint()
          }
          fetchAllComplaint()
        }
      })
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          complainttypeid: complainttypeid,
        }}
        onSubmit={async (values: any, {resetForm}) => {}}
      >
        {(props) => (
          <Form>
            <div className='card-header border-0 pt-5'>
              <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
                <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
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

                {auth?.roleId == 7 ? (
                  ''
                ) : (
                  <div className='d-flex align-items-center'>
                    {Access[id].hasOwnProperty('download') && (
                      <div className='ms-auto'>
                        <button
                          type='button'
                          className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                          onClick={downloadFileComplaint}
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
                    <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                      <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                        <span className='svg-icon svg-icon-gray-500 me-0'>
                          <KTSVG
                            path='/media/icons/duotune/general/gen031.svg'
                            className='svg-icon-2 me-0'
                          />
                        </span>
                        <span className='d-none d-sm-block ms-3'>Filter</span>
                      </div>
                    </div>
                    {auth?.roleId !== 3 ? (
                      <div
                        className='d-flex justify-content-end ms-3'
                        data-kt-user-table-toolbar='base'
                      >
                        <div title='Click to add new category'>
                          <button
                            type='button'
                            className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                            onClick={() => {
                              navigate('complaintform/add')
                            }}
                          >
                            <span className='svg-icon svg-icon-gray-500 me-1'>
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr075.svg'
                                className='svg-icon-3'
                              />
                            </span>
                            Create Complaint
                          </button>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    {auth?.roleId != 2 &&
                    auth?.roleId != 3 &&
                    auth?.roleId != 5 &&
                    auth?.roleId !== 6 &&
                    auth?.roleId !== 7 ? (
                      <div
                        className='d-flex justify-content-end ms-3'
                        data-kt-user-table-toolbar='base'
                      >
                        <div title='Click to add new category'>
                          <button
                            type='button'
                            className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                            onClick={() => {
                              deleteMultipleComplaint()
                            }}
                          >
                            <span className='svg-icon svg-icon-gray-500 me-1'>
                              <KTSVG
                                path='/media/icons/duotune/general/gen027.svg'
                                className='svg-icon-3'
                              />
                            </span>
                            Delete Complaints
                          </button>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </div>

              {filterShow && (
                <div className='row gy-2 w-100 mx-0 mt-5'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('status')}
                        value={status}
                        onChange={handleStatus}
                      >
                        <option value='0'>All</option>
                        <option value='2'>Solved</option>
                        <option value='1'>Unsolved</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div>
                      {/* <label className='form-label fw-bold'>Complaint date</label> */}
                      <div className='d-flex'>
                        <label className='form-label fw-bold'>Complaint date</label>
                        {/* <img src={closeIcon} style={{height: '14px', marginLeft: '5px'}} /> */}

                        <span
                          role='button'
                          onClick={() => {
                            setFromDate('')
                            setToDate('')
                            setStartDate('')
                            setEndDate('')
                          }}
                        >
                          {' '}
                          <img src={closeIcon} style={{height: '14px', marginLeft: '5px'}} />
                        </span>
                      </div>
                      <DateRangePicker
                        initialSettings={{
                          alwaysShowCalendars: false,
                          ranges: range,
                        }}
                        onHide={handleEvent}
                      >
                        <div className='form-select form-select-solid'>
                          <input
                            style={{background: '#f5f8fa', border: 'none', outline: 'none'}}
                            placeholder='All'
                            value={`${
                              fromDate && toDate
                                ? `${moment(fromDate).format('DD-MM-yyyy')} - ${moment(
                                    toDate
                                  ).format('DD-MM-yyyy')}`
                                : ''
                            }`}
                          />
                        </div>
                      </DateRangePicker>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Assign to</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('assignToId')}
                        value={assignToId}
                        onChange={handleAssign}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not assigned</option>

                        {getDataAllTypeTechnician.map((getDataAllTypeTechnician: any, index) => {
                          return (
                            <option key={index} value={getDataAllTypeTechnician.id}>
                              {getDataAllTypeTechnician?.fullName}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Complaint type</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('complainttypeid')}
                        value={complainttypeid}
                        onChange={handleComplaintType}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not described</option>

                        {getDataAllTypeComplaint.map((complaintData: any, index) => {
                          return (
                            <option key={index} value={complaintData.id}>
                              {complaintData?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Zone</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('zoneId')}
                        value={zoneId}
                        onChange={handleZoneId}
                      >
                        <option value='0'>All</option>

                        {getDataAllType.map((getDataAllType: any, index) => {
                          return (
                            <option key={index} value={getDataAllType.id}>
                              {getDataAllType?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Company</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('CompanyId')}
                        value={CompanyId}
                        onChange={handleCompanyId}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not described</option>

                        {companiesName.map((companiesName: any, index) => {
                          return (
                            <option key={index} value={companiesName.id}>
                              {companiesName?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Fault</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('faultid')}
                        value={faultid}
                        onChange={handleFaultId}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not described</option>

                        {getDataAllFault.map((getDataAllFault: any, index) => {
                          return (
                            <option key={index} value={getDataAllFault.id}>
                              {getDataAllFault?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Package category</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('PackageCategoryId')}
                        value={PackageCategoryId}
                        onChange={handlePackageId}
                      >
                        <option value=''>All</option>
                        <option value='0'>Not described</option>

                        {packagesName.map((packagesName: any, index) => {
                          return (
                            <option key={index} value={packagesName.id}>
                              {packagesName?.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('createdBy')}
                      value={createdBy}
                      onChange={handleCreaterId}
                    >
                      <option value='0'>All</option>

                      {getDataAllTypeCreatedBy.map((getDataAllTypeCreatedBy: any, index) => {
                        return (
                          <option key={index} value={getDataAllTypeCreatedBy.id}>
                            {getDataAllTypeCreatedBy?.fullName}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ComplaintHeader
function LoderActions(arg0: boolean) {
  throw new Error('Function not implemented.')
}
