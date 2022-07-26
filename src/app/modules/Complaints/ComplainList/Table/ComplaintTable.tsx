import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../_metronic/helpers'
import { ListPageData } from '../../ComplaintContext'
import Swal from 'sweetalert2'
import moment from 'moment'
import { toast } from 'react-toastify'
import ComplaintsViewService from '../../helperComplaint/ApiDataRequest'
const ComplaintTable = () => {

  const {
    getData,
    setPageNo,
    setSearchText,
    // DataGetAllTypeCreatedByTypes,
    // DataGetAllTypeTechnician,
    fetchAllComplaint,
    // DataGetAllTypeZone,
  } = ListPageData()
  let navigate = useNavigate()

  const openViewPage = () => {
    navigate('complaintviewform')
  }

  const openEditPage = () => {
    navigate('complaintform/add')
  }

  useEffect(() => {
    // DataGetAllTypeCreatedByTypes()
    fetchAllComplaint()
    // DataGetAllTypeTechnician()
    // DataGetAllTypeZone()
    console.log("fffffffddddd", getData);

  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const deleteFaults = (ID: number) => {
    Swal.fire({
      title: `Do you want to delete this records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // LoderActions(true)
        let payload = await ComplaintsViewService.deleteComplaint(ID)
        if (payload.success === true) {
          // LoderActions(false)

          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          // LoderActions(false)

          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }
        fetchAllComplaint()
      }
    })
  }
  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>no.</th>
              <th className='max-w-60px '>Username</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Package category</th>
              <th className='min-w-200px'>Complaint type</th>
              <th className='min-w-150px'>Assign to</th>
              <th className='min-w-150px'>Status</th>
              <th className='min-w-150px'>Complaint date</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {index + 1}
                      </div>
                    </td>
                    {/* begin:: Name Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>
                            {row?.username ? row?.username : '-'}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}


                    <td className='text-dark fw-bold  fs-6'>{row.name || '-'}</td>


                    <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.packageCategorieName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.complaintTypeName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.assignTechnicianName || '-'}</td>
                    <td className='text-dark fw-bold  fs-6'>{row.statusName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'> {moment(row?.outwardDate).format('DD-MMMM-YYYY') || '-'}</td>
                    {/* {moment(row?.outwardDate).format('DD-MMMM-YYYY') || '-'} */}

                    <td>
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`complaintviewform/${row.id}`)}
                      // onClick={() => openViewModal(row.id)}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>

                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        onClick={() => {
                          navigate(`complaintform/${row.id}`)
                        }}
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={8}>
                  <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                    No Records Found !
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default ComplaintTable
