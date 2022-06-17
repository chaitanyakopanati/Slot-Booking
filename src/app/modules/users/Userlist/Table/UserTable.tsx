import {KTSVG} from '../../../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useLoader} from '../../../loader/LoaderContext'
import {ListPageData} from '../../UserContext'
import {getUserData} from '../../helperUser/ModelUserType'
import Userservice from '../../helperUser/ApiDatarequestUser'

const UserTable = () => {
  const {
    setItemIdForUpdate,
    getData,
    pageNo,
    pageSize,
    setViewIdForUpdate,
    // DataGetAllType,
    fetchAllUser,
    searchText,
    DataGetAllTypeZone,
    DataGetAllTyperole,
    setPageNo,
    setSearchText,
  } = ListPageData()
  let {LoderActions} = useLoader()

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
  const deleteFaults = (ID: number,username:string) => {
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
        let payload = await Userservice.deleteUser(ID,username)
        if (payload.success === true) {
          LoderActions(false)

          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          LoderActions(false)

          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }
        fetchAllUser()
      }
    })
  }
  {
    /* end:: Delete functionlity */
  }

  // useEffect(() => {
  //   DataGetAllType()
  //   LoderActions(false)
  // }, [])

  useEffect(() => {
    DataGetAllTypeZone()
  }, [])

  useEffect(() => {
    console.log('enter')
    fetchAllUser()
  }, [pageNo, pageSize, searchText])

  useEffect(() => {
    console.log('getData', getData)
  }, [getData])

  useEffect(() => {
    DataGetAllTyperole()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
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
              <th className='min-w-150px'>Username</th>
              <th className='min-w-200px'>Email</th>
              <th className='min-w-200px'>Mobile no.</th>
              <th className='min-w-200px'>Zone</th>
              <th className='min-w-200px'>Role</th>
              <th className='min-w-125px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData?.map((row: getUserData, index: number) => {
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
                        <div className='text-dark fw-bold  fs-6'>{row?.name || '-'}</div>
                      </div>
                    </div>
                  </td>
                  {/* end:: Name Input */}

                  {/* begin:: Fault Type Input */}
                  <td className='text-dark fw-bold  fs-6'>{row.username || '-'}</td>
                  {/* end:: Fault Type Input */}

                  {/* begin:: Fault Type Input */}
                  <td className='text-dark fw-bold  fs-6'>{row.email || '-'}</td>
                  {/* end:: Fault Type Input */}

                  {/* begin:: Fault Type Input */}
                  <td className='text-dark fw-bold  fs-6'>{row.phone || '-'}</td>
                  {/* end:: Fault Type Input */}

                  {/* begin:: Fault Type Input */}
                  <td className='text-dark fw-bold  fs-6'>{row.zoneName || '-'}</td>
                  {/* end:: Fault Type Input */}

                  {/* begin:: Fault Type Input */}
                  <td className='text-dark fw-bold  fs-6'>{row.roleName || '-'}</td>
                  {/* end:: Fault Type Input */}

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
                      onClick={() => deleteFaults(row.id,row.username)}
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

        {/* begin::Mobile Table */}
        <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
          <div
            onChange={handlesearchange}
            className='form-control form-control-solid ps-14'
            placeholder='Search'
          />
          {getData?.map((row: getUserData, index: number) => {
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
                        <div className='fw-bolder '>Role:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.roleName || '-'}</div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>Username:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.username || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Email:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.email || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Mobile No:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.phone || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Zone:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.zoneName || '-'}</div>
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
                          onClick={() => deleteFaults(row.id,row.username)}
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
          })}
        </div>
        {/* End::Mobile Table */}
      </div>
    </>
  )
}
export default UserTable
