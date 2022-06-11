import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {getComplainData} from '../../helper/ModelType'
import {ListPageData} from '../../ComplaintListContext'
import Swal from 'sweetalert2'
import Complaintservice from '../../helper/ApiDatarequest'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useLoader} from '../../../loader/LoaderContext'
import Loader from '../../../loader/Loader'

const ComplaintTable = () => {
  const {
    setItemIdForUpdate,
    pageNo,
    pageSize,
    getData,
    searchText,
    DataGetApi,
    setViewIdForUpdate,
    fetchAllComplaint,
  } = ListPageData()
  let {LoderActions, open} = useLoader()

  const DataWiseIndex = (pageNo - 1) * pageSize

  {
    /* begin:: Edit functionlity */
  }
  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  {
    /* begin:: view functionlity */
  }
  const openViewModal = (id: any) => {
    setViewIdForUpdate(id)
  }

  useEffect(() => {
    DataGetApi()
    LoderActions(false)
  }, [])

  useEffect(() => {
    fetchAllComplaint()
  }, [pageNo,pageSize,searchText])
  {
    /* begin:: Delete functionlity */
  }
  const deletecomplaints = (ID: number) => {
    Swal.fire({
      title: `Do you want to delete this records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        LoderActions(true)
        let payload = await Complaintservice.deletecomplaints(ID)
        if (payload.success === true) {
          LoderActions(false)
          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          LoderActions(false)
          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }

        fetchAllComplaint()
      }
    })
  }

  useEffect(() => {
    console.log(getData, 'getData')
  }, [])

  return (
    <>
      <div className='table-responsive'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4 text-center'>No</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-150px'>ETR</th>
              <th className='min-w-200px'>Created at</th>
              <th className='min-w-125px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData?.map((UserData: getComplainData, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                      {DataWiseIndex + index + 1}
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <div className='text-dark fw-bold  fs-6'>
                          {UserData?.name ? UserData?.name : '-'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='text-dark fw-bold  fs-6'>{UserData?.etr ? UserData?.etr : '-'}</td>
                  <td className='text-dark fw-bold fs-6'>
                    {moment(UserData?.createdAt).format('DD-MMMM-YYYY, h:mm a') || '-'}
                  </td>
                  <td>
                    <a
                      className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                      onClick={() => openViewModal(UserData)}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen060.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      onClick={() => openEditModal(UserData.id)}
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>

                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                      onClick={() => deletecomplaints(UserData.id)}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>
    </>
  )
}
export default ComplaintTable
