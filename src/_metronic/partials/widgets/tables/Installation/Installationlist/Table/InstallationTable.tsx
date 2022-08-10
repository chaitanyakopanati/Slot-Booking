import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../InstallationContext'
import {getInstallationsData} from '../../helperInstallation/ModelInstallation'
import InstallationsService from '../../helperInstallation/ApiDatarequest'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'
import React from 'react'

const InstallationTable = () => {
  const {
    setItemIdForUpdate,
    pageNo,
    getData,
    pageSize,
    setViewIdForUpdate,
    fetchAllUser,
    setPageNo,
    setSearchText,
    DataGetAllTypeSalesExecutveUserByRole,
    DataGetAllTypegetZoneTypes,
    DataGetAllTypeSalesExecutve,
    DataGetAllTypeMainPoint,
    DataGetAllTypeStatus,
    DataGetAllTypeInstallation,
    DataGetAllTypeCompany,
    fetchAllDownload,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  const DataWiseIndex = (pageNo - 1) * pageSize

  {
    /* begin:: Delete functionlity */
  }
  const deleteFaults = (ID: number) => {
    Swal.fire({
      title: `Do you want to delete this record ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        LoderActions(true)
        try {
          let payload = await InstallationsService.deleteInstallations(ID)
          if (payload.success === true) {
            LoderActions(false)

            toast.success(payload.message)
            // toast.success(` Data Deleted Successfully`)
            toast.dismiss('1s')
          } else {
            LoderActions(false)

            toast.error(payload.message)
            // toast.error(` Failed to Delete Data`)
            toast.dismiss('1s')
          }
        } catch (error: any) {
          console.log('error', error.data)
          toast.error(error?.data?.message)
          toast.dismiss('1s')
        }
        fetchAllUser()
      }
    })
  }
  {
    /* end:: Delete functionlity */
  }

  useEffect(() => {
    DataGetAllTypeSalesExecutveUserByRole()
    DataGetAllTypegetZoneTypes()
    DataGetAllTypeStatus()
    DataGetAllTypeMainPoint()
    DataGetAllTypeStatus()
    fetchAllUser()
    DataGetAllTypeSalesExecutve()
    DataGetAllTypeInstallation()
    DataGetAllTypeCompany()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const downloadInstallationData = () => {
    fetchAllDownload()
  }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>No</th>
              <th className='min-w-150px'>User Name</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Installer</th>
              <th className='min-w-200px'>Created at</th>
              <th className='min-w-100px'>Status</th>
              <th className='min-w-200px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData.map((row: getInstallationsData, index: number) => {
                // console.log("wertyuiop[",row);
                return (
                  <tr key={index}>
                    {/* begin:: Index No */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: Index No */}

                    {/* begin:: userName Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>{row?.userName || '-'}</div>
                        </div>
                      </div>
                    </td>
                    {/* end:: userName Input */}

                    {/* begin:: User Type Input name */}
                    <td className='text-dark fw-bold  fs-6'>{row.name || '-'}</td>
                    {/* end:: User Type Input  name */}

                    {/* begin:: User Type Input address */}
                    <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>
                    {/* end:: User Type Input  address */}

                    {/* begin:: User Type Input installerName */}
                    <td className='text-dark fw-bold  fs-6'>{row.installerName || '-'}</td>
                    {/* end:: User Type Input  installerName */}

                    {/* begin:: User Type Input createdAt */}
                    <td className='text-dark fw-bold fs-6'>
                      {moment.utc(row?.createdAt).local().format('DD-MMM-YYYY, h:mm a') || '-'}
                    </td>
                    {/* end:: User Type Input  createdAt */}

                    {/* begin:: User Type Input status */}
                    <td className='text-dark fw-bold  fs-6'>{row.statusName || '-'}</td>
                    {/* end:: User Type Input  status*/}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`installationsviewform/${row.id}`)}
                        // onClick={() => openViewModal(row.id)}
                        title='View Installation'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      {/* end:: View Icon */}

                      {/* begin:: Edit Icon */}
                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        onClick={() => {
                          navigate(`installationsform/${row.id}`)
                        }}
                        // onClick={()=>openEditModal(row.id)}
                        title='Edit Installation'
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                      {/* end:: Edit Icon */}

                      {/* begin:: Delete Icon */}
                      {Access[id].hasOwnProperty('allAccess') ||
                        (Access[id]['installationrights'].includes('delete') && (
                          <button
                            className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                            onClick={() => deleteFaults(row.id)}
                            title='Delete Installation'
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen027.svg'
                              className='svg-icon-3'
                            />
                          </button>
                        ))}
                      {/* end:: Delete Icon */}
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
                        data-bs-toggle='modal'
                        data-bs-target='#view-customer-modal'
                        title='View Customer'
                        onClick={() => {
                          window.open(`/customers/customerviewform/${row.customerId}`, '_blank')
                        }}
                      >
                        <KTSVG
                          path='/media/icons/duotune/communication/com013.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        title='Download Installation Report'
                        onClick={downloadInstallationData}
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr065.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                    {/* end:: Action */}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={8}>
                  <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                    No data available in table
                  </div>
                </td>
              </tr>
            )}
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>

      {/* begin::Mobile Table */}

      <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
        <div
          onChange={handlesearchange}
          className='form-control form-control-solid ps-14'
          placeholder='Search'
        />
        {getData.length > 0 ? (
          getData?.map((row: getInstallationsData, index: number) => {
            return (
              // <div key={DataWiseIndex + index + 1}>
              <div key={row.id}>
                <div className='col-md-6 mx-0 my-2'>
                  <div className='card card-custom border'>
                    <div className='card-body p-4'>
                      <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                        <div className='text-dark fw-bolder fs-3 me-2'>
                          {' '}
                          {DataWiseIndex + index + 1}
                        </div>
                        <div className='fw-bolder fs-3'>{row?.userName || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>Name:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.name || '-'}</div>
                      </div>

                      <div id={`card-id-${row.id}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>Address:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.address || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>InstallerName:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.installerName || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Created at:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {moment.utc(row?.createdAt).local().format('DD-MMM-YYYY, h:mm a') ||
                              '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Status:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.statusName || '-'}</div>
                        </div>
                      </div>

                      <div
                        className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                        data-bs-toggle='collapse'
                        data-bs-target={`#card-id-${row.id}`}
                        aria-expanded='false'
                      >
                        <span>+ &nbsp;</span>More info
                      </div>
                    </div>

                    <div className='card-footer p-2 py-0 bg-light'>
                      <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                        <a
                          className='btn btn-icon btn-active-color-success btn-sm me-1'
                          // onClick={() => openViewModal(row)}
                          onClick={() => navigate(`installationsviewform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen060.svg'
                            className='svg-icon-3'
                          />
                        </a>

                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm me-1'
                          // onClick={() => openEditModal(row.id)}
                          onClick={() => {
                            navigate(`installationsform/${row.id}`)
                          }}
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          onClick={() => deleteFaults(row.id)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          title='View Customer'
                          onClick={() => {
                            window.open(`/customers/customerviewform/${row.customerId}`, '_blank')
                          }}
                        >
                          <KTSVG
                            path='/media/icons/duotune/communication/com013.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          title='Download Installation Report'
                          onClick={downloadInstallationData}
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div>
            <div>
              <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                No data available in table
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End::Mobile Table */}
    </div>
  )
}

export default InstallationTable
