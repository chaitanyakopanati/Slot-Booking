import React, {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../CustomerContext'
import {useFormik} from 'formik'
import {useRef} from 'react'
import {toast} from 'react-toastify'
import {saveCustomer} from '../../helperCustomer/ApiDataRequest'
import {customerFormType, formInitialValues} from '../../helperCustomer/ModelCustomer'

function CustomerHeader() {
  let {
    filter,
    setFilter,
    fetchZone,
    zoneType,
    companies,
    fetchCompanies,
    fetchUserByRoleName,
    createdBy,
    installer,
    salesExecutve,
    fetchMainPoint,
    mainPoint,
  } = ListPageData()
  const [filterShow, setFilterShow] = useState(false)
  const navigation = useNavigate()

  useEffect(() => {
    fetchZone()
    fetchCompanies()
    fetchUserByRoleName('Admin')
    fetchUserByRoleName('Technician')
    fetchUserByRoleName('SalesExecutve')
    fetchMainPoint()
  }, [])

  // const [initialValues, setInitialValues] = useState<customerFormType>(formInitialValues)

  // useEffect(() => {
  //   console.log("customerById", customerById)
  //   setInitialValues({
  //     Id: customerById.id || null,
  //     UserName: customerById.userName || '',
  //     FirstName: customerById.firstName || '',
  //     LastName: customerById.lastName || '',
  //     Email: customerById.email || '',
  //     MobileNo: customerById.mobileNo || '',
  //     Middlename: customerById.middlename || '',
  //     CompanyName: customerById.companyName || '',
  //     Userid: customerById.userid || '',
  //     ZoneId: customerById.zoneId || '',
  //     Gstno: customerById.gstno || '',
  //     Contactno: customerById.contactno || '',
  //     Address: customerById.address || '',
  //     Remark: customerById.remark || '',
  //     Description: '',
  //     IdproofImageFile: '',
  //     AddressproofImageFile: '',
  //     GstcerificateImageFile: '',
  //     CreatedBy: customerById.createdById || '',
  //     ModifyBy: customerById.modifyById || '',
  //     IsMasterUser: false,
  //   })
  // }, [customerById])

  const suggestionRef: any = useRef()

  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: initialValues,
  //   // validationSchema: validationSchema,
  //   onSubmit: async (values) => {
  //     let formData: any = new FormData()
  //     Object.entries(values).forEach(([key, value]) => {
  //       if (value) formData.append(key, value as string)
  //     })
  //     !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
  //     let response = await saveCustomer(formData)
  //     if (response.success) {
  //       toast.success(response.message)
  //     } else {
  //       toast.error(response.message)
  //     }
  //   },
  // })

  useEffect(() => {
    console.log('filter', filter)
  }, [filter])

  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
          <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
            </span>
            <input
              type='text'
              className='form-control form-control-solid ps-14'
              placeholder='Search'
              value={filter.searchText}
              onChange={(event) => {
                setFilter((old) => {
                  return {...old, searchText: event.target.value}
                })
              }}
            />
          </div>
          <div className='d-flex align-items-center'>
            <div className='d-flex'>
              <div onClick={() => setFilterShow(!filterShow)}>
                <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
                  </span>
                  Filter
                </div>
              </div>
            </div>

            <div className='ms-5'>
              <a
                // href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                // data-bs-toggle='modal'
                // data-bs-target='#kt_modal_1'
                onClick={() => {
                  navigation('customersform/new')
                }}
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Customer
              </a>
            </div>
          </div>
        </div>

        {filterShow && (
          <div className='row w-100 mx-0 mt-5'>
            {/* username */}
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Username</label>
              <input
                placeholder='All'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
                value={filter.userName}
                onChange={(e) =>
                  setFilter((old) => {
                    return {...old, userName: e.target.value}
                  })
                }
              />

              {/* <input
                placeholder='Username'
                name='UserName'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
                value={formik.values.UserName}
                onChange={(e) => {
                  formik.setFieldValue('IsMasterUser', false)
                  if (e.target.value) {
                    suggestionRef.current.style.display = 'block'
                  } else {
                    suggestionRef.current.style.display = 'none'
                  }
                  formik.handleChange(e)
                }}
                onBlur={(e) => {
                  var container = suggestionRef.current
                  document.addEventListener('click', function (event) {
                    suggestionRef.current.style.display = 'none'
                    document.removeEventListener('click', () => {
                      suggestionRef.current.style.display = 'none'
                      document.removeEventListener('click', () => {})
                    })
                  })
                  formik.handleBlur(e)
                }}
              /> */}
            </div>
            {/* zone */}
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-zone'>
                <label className='form-label fw-bold'>Zone</label>
                <div data-select2-id='select-zone'>
                  <select
                    value={filter.zoneId}
                    onChange={(e) =>
                      setFilter((old) => {
                        return {...old, zoneId: +e.target.value}
                      })
                    }
                    className='form-select form-select-solid'
                  >
                    <option value=''>All</option>
                    {zoneType.map((zone, index) => {
                      return (
                        <option key={zone.id} value={zone.id}>
                          {zone.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            {/* company */}
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-role'>
                <label className='form-label fw-bold'>Company</label>
                <div data-select2-id='select-role'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.companyId}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, companyId: +e.target.value}
                      })
                    }}
                  >
                    <option value=''>All</option>
                    {companies.map((company) => {
                      return (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            {/* created by */}
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Created by</label>
                <div data-select2-id='select-created-by'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.createdById}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, createdById: +e.target.value}
                      })
                    }}
                  >
                    <option value={''}>All</option>
                    {createdBy.map((user) => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.fullName}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Installer</label>
                <div data-select2-id='select-created-by'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.installerId}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, installerId: +e.target.value}
                      })
                    }}
                  >
                    <option value=''>All</option>
                    {installer.map((user) => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.fullName}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Sales Executive</label>
                <div data-select2-id='select-created-by'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.salesExecutiveId}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, salesExecutiveId: +e.target.value}
                      })
                    }}
                  >
                    <option value=''>All</option>
                    {salesExecutve.map((user) => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.firstname}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Main point</label>
                <div data-select2-id='select-created-by'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.mainPointId}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, mainPointId: +e.target.value}
                      })
                    }}
                  >
                    <option value=''>All</option>
                    {mainPoint.map((point) => {
                      return (
                        <option key={point.id} value={point.id}>
                          {point.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Connection type</label>
                <div data-select2-id='select-created-by'>
                  <select
                    className='form-select form-select-solid'
                    value={filter.connectionTypeId}
                    onChange={(e) => {
                      setFilter((old) => {
                        return {...old, connectionTypeId: +e.target.value}
                      })
                    }}
                  >
                    <option value=''>All</option>
                    <option value={3}>Not described</option>
                    <option value={1}>Cable</option>
                    <option value={2}>Wireless</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* end::Header */}
    </>
  )
}

export default CustomerHeader
