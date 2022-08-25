import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {ListPageData} from '../../InquiriesContext'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from '../../helperInquiries/ApiDataRequest'
import {getInquiriesData} from '../../helperInquiries/ModelInquiries'
import {KTSVG} from '../../../../../../helpers'
import {useAuth} from '../../../../../../../app/modules/auth'
import Access from '../../../../../../layout/components/aside/Accessibility'

const InquiriesTable = () => {
  const {
    setItemIdForUpdate,
    pageNo,
    getData,
    pageSize,
    setViewIdForUpdate,
    fetchAllUser,
    statusId,
    setPageNo,
    setSearchText,
    DataGetAllTypeCreatedByTypes,
    DataGetAllTypeStatus,
    DataGetAllTypeSalesExecutve,
    DataGetAllTypeSalesExecutveUserByRole,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  const DataWiseIndex: any = (pageNo - 1) * pageSize

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  const openViewModal = (id: any) => {
    setViewIdForUpdate(id)
  }

  var currentTime: any = moment(new Date())

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
          let payload = await Inquiriesservice.deleteInquiries(ID)
          if (payload.success === true) {
            LoderActions(false)

            toast.success(payload.message)
            toast.dismiss('1s')
          } else {
            LoderActions(false)

            toast.error(payload.message)
            toast.dismiss('1s')
          }
        } catch (error: any) {
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
    DataGetAllTypeCreatedByTypes()
    DataGetAllTypeStatus()
    if (auth?.roleId !== 5) {
      fetchAllUser()
    }
    DataGetAllTypeSalesExecutve()
    DataGetAllTypeSalesExecutveUserByRole()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }

  const setBackgrondColour = (row: any) => {
    if (currentTime.diff(moment(row?.createdAt), 'days') >= 15 && row.status === 'Pending') {
      return `#f5c6cb`
    } else {
      return ''
    }
  }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border'>
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>Inquiry No.</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Contact no.</th>
              <th className='min-w-200px'>Sales Executive</th>
              <th className='min-w-150px'>Created at</th>
              <th className='min-w-100px'>Status</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData.map((row: getInquiriesData, index: number) => {
                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor:
                        currentTime.diff(moment(row?.modifyAt), 'days') >= 15 &&
                        row.status === 'Pending'
                          ? `#f5c6cb`
                          : '',
                    }}
                  >
                    {/* begin:: Index No */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: Index No */}

                    {/* begin:: Name Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>{row?.name || '-'}</div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}

                    <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.contactno || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.salesexecutiveName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>
                      {' '}
                      {moment.utc(row?.createdAt).local().format('DD-MMM-YYYY, h:mm a') || '-'}
                    </td>

                    <td className='text-dark fw-bold  fs-6'>{row.status || '-'}</td>

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`inquiriesviewform/${row.id}`)}
                        title='View Inquirie'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      {/* end:: View Icon */}

                      {/* begin:: Edit Icon */}
                      {(Access[id].hasOwnProperty('allAccess') ||
                        Access[id]['inquiryrights']?.includes('edit')) && (
                        <button
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          onClick={() => {
                            navigate(`inquiriesform/${row.id}`)
                          }}
                          title='Edit Inquirie'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      )}
                      {/* end:: Edit Icon */}

                      {/* begin:: Delete Icon */}
                      {Access[id].hasOwnProperty('allAccess') && (
                        <button
                          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                          onClick={() => deleteFaults(row.id)}
                          title='Delete Inquiries'
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      )}
                      {/* end:: Delete Icon */}
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
          getData?.map((row: getInquiriesData, index: number) => {
            return (
              <div key={DataWiseIndex + index + 1}>
                <div className='col-md-6 mx-0 my-2'>
                  <div className='card card-custom border'>
                    <div className='card-body p-4'>
                      <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                        <div className='text-dark fw-bolder fs-3 me-2'>
                          {' '}
                          {DataWiseIndex + index + 1}
                        </div>
                        <div className='fw-bolder fs-3'>{row?.name || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>Address:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.address || '-'}</div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>Contact no:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.contactno || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Sales Executive:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.salesexecutiveName || '-'}
                          </div>
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
                          <div className='text-dark fw-bold  ms-2'>{row.status || '-'}</div>
                        </div>
                      </div>

                      <div
                        className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                        data-bs-toggle='collapse'
                        data-bs-target={`#card-id-${DataWiseIndex + index + 1}`}
                        aria-expanded='false'
                      >
                        <span>+ &nbsp;</span>More info
                      </div>
                    </div>

                    <div className='card-footer p-2 py-0 bg-light'>
                      <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                        <a
                          className='btn btn-icon btn-active-color-success btn-sm me-1'
                          onClick={() => navigate(`inquiriesviewform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen060.svg'
                            className='svg-icon-3'
                          />
                        </a>

                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm me-1'
                          onClick={() => {
                            navigate(`inquiriesform/${row.id}`)
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

export default InquiriesTable
