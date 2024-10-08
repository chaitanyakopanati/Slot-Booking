import moment from 'moment'
import {useEffect} from 'react'
import {toast} from 'react-toastify'
import Swal from 'sweetalert2'
import {KTSVG} from '../../../../../_metronic/helpers/components/KTSVG'
import {useLoader} from '../../../loader/LoaderContext'
import MainPointservice from '../../helperMainPoint/ApiDatarequest'
import {getMainPointData} from '../../helperMainPoint/ModelMainPoint'
import {ListPageData} from '../../MainPointContext'

const MainPointTable = () => {
  const {
    setItemIdForUpdate,
    getData,
    pageNo,
    pageSize,
    setViewIdForUpdate,
    DataGetAllType,
    fetchAllMainPoint,
    searchText,
    setPageNo,
    DataGetAllTypeCreatedByTypes,
    setSearchText,
  } = ListPageData()
  let {LoderActions, open} = useLoader()

  const DataWiseIndex = (pageNo - 1) * pageSize

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  const openViewModal = (id: any) => {
    setViewIdForUpdate(id)
  }

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
          let payload = await MainPointservice.deleteMainPoint(ID)
          if (payload.success === true) {
            LoderActions(false)
            // toast.success(` Data Deleted Successfully`)
            toast.error(payload.message)
            toast.dismiss('1s')
          } else {
            LoderActions(false)

            // toast.error(` Failed to Delete Data`)
            toast.error(payload.message)
            toast.dismiss('1s')
          }
        } catch (error: any) {
          toast.error(error?.data?.message)
          toast.dismiss('1s')
        }
        fetchAllMainPoint()
      }
    })
  }
  {
    /* end:: Delete functionlity */
  }

  useEffect(() => {
    DataGetAllType()
    DataGetAllTypeCreatedByTypes()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }

  return (
    <>
      <div className='table-responsive'>
        {/* begin::Table */}
        <table className='d-none d-md-table table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4 text-center'>No</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-150px'>Zone</th>
              <th className='min-w-200px'>Created at</th>
              <th className='min-w-125px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: getMainPointData, index: number) => {
                return (
                  <tr key={index}>
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
                          <div className='text-dark fw-bold  fs-6'>
                            {row?.name ? row?.name : '-'}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}

                    {/* begin:: Zone Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.zoneName || '-'}</td>
                    {/* end:: Zone Input */}

                    {/* begin:: Created At Date & Time */}
                    <td className='text-dark fw-bold fs-6'>
                      {moment.utc(row?.createdAt).local().format('DD-MMM-YYYY, h:mm a') || '-'}
                    </td>
                    {/* end:: Created At Date & Time */}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => openViewModal(row)}
                        title='View Main Point'
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
                        onClick={() => openEditModal(row.id)}
                        title='Edit Main Point'
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                      {/* end:: Edit Icon */}

                      {/* begin:: Delete Icon */}
                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                        onClick={() => deleteFaults(row.id)}
                        title='Delete Main Point'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen027.svg'
                          className='svg-icon-3'
                        />
                      </button>
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

        {/* begin::Mobile Table */}
        <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
          <div
            onChange={handlesearchange}
            className='form-control form-control-solid ps-14'
            placeholder='Search'
          />
          {getData.length > 0 ? (
            getData?.map((row: getMainPointData, index: number) => {
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

                        <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                          <div className='py-1 d-flex align-items-cenetr'>
                            <div className='fw-bolder '>Zone:</div>
                            <div className='text-dark fw-bold  ms-2'>{row.zoneName || '-'}</div>
                          </div>
                        </div>

                        <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                          <div className='py-1 d-flex align-items-cenetr'>
                            <div className='fw-bolder '>Created at:</div>
                            <div className='text-dark fw-bold  ms-2'>
                              {' '}
                              {moment.utc(row?.createdAt).local().format('DD-MMM-YYYY, h:mm a') ||
                                '-'}
                            </div>
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
                            onClick={() => openViewModal(row)}
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen060.svg'
                              className='svg-icon-3'
                            />
                          </a>

                          <button
                            className='btn btn-icon btn-active-color-primary btn-sm me-1'
                            onClick={() => openEditModal(row.id)}
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
    </>
  )
}
export default MainPointTable
