import {KTSVG} from '../../../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useLoader} from '../../../loader/LoaderContext'
import {ListPageData} from '../../PackagesCategoriesContext'
import Complaintservice from '../../helperPackagesCategories/ApiDatarequest'
import {getPackageCategoriesData} from '../../helperPackagesCategories/ModelTypePackagesCategories'

const PackagescategoriesTable = () => {
  const {
    setItemIdForUpdate,
    pageNo,
    pageSize,
    getData,
    searchText,
    DataGetApiPackagecategories,
    setViewIdForUpdate,
    fetchAllPackagecategories,
  } = ListPageData()
  let {LoderActions} = useLoader()

  const DataWiseIndex = (pageNo - 1) * pageSize

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  const openViewModal = (id: any) => {
    setViewIdForUpdate(id)
  }

  useEffect(() => {
    DataGetApiPackagecategories()
    LoderActions(false)
  }, [])

  useEffect(() => {
    fetchAllPackagecategories()
  }, [pageNo, pageSize, searchText])

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
        let payload = await Complaintservice.deletePackagesCategories(ID)
        if (payload.success === true) {
          LoderActions(false)
          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          LoderActions(false)
          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }

        fetchAllPackagecategories()
      }
    })
  }
  {
    /* end:: Delete functionlity */
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
            {getData?.map((row: getPackageCategoriesData, index: number) => {
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
                        <div className='text-dark fw-bold  fs-6'>{row?.name ? row?.name : '-'}</div>
                      </div>
                    </div>
                  </td>
                  {/* end:: Name Input */}

                  {/* begin:: Etr(Hours) Input */}
                  <td className='text-dark fw-bold  fs-6'>{row?.etr ? row?.etr : '-'}</td>
                  {/* end:: Etr(Hours) Input */}

                  {/* begin:: Created At Date & Time */}
                  <td className='text-dark fw-bold fs-6'>
                    {moment(row?.createdAt).format('DD-MMMM-YYYY, h:mm a') || '-'}
                  </td>
                  {/* end:: Created At Date & Time */}

                  {/* begin:: Action */}
                  <td>
                    {/* begin:: View Icon */}
                    <a
                      className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                      onClick={() => openViewModal(row)}
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
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    {/* end:: Edit Icon */}

                    {/* begin:: Delete Icon */}
                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                      onClick={() => deletecomplaints(row.id)}
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
            })}
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>
    </>
  )
}
export default PackagescategoriesTable
