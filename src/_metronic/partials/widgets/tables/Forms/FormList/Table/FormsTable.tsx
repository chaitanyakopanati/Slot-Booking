import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {ListPageData} from '../../FormsContext'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from '../../helperForms/ApiDataRequest'
import {getInquiriesData} from '../../helperForms/ModelForms'
import {KTSVG} from '../../../../../../helpers'

const FormsTable = () => {
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
    DataGetAllTypeSalesExecutve,
    DataGetAllTypeSalesExecutveUserByRole,
    DataGetAllTypeZone,
    DataGetAllTypeCompany,
    DataGetAllTypePackagesCategory,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const DataWiseIndex = (pageNo - 1) * pageSize

  {
    /* begin:: Delete functionlity */
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
        LoderActions(true)
        try {
          let payload = await Inquiriesservice.deleteForms(ID)
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
    fetchAllUser()
    DataGetAllTypeSalesExecutve()
    DataGetAllTypeSalesExecutveUserByRole()
    DataGetAllTypeZone()
    DataGetAllTypeCompany()
    DataGetAllTypePackagesCategory()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const handleColor = (row: any) => {
    var formDate = moment(row.formdate).format('YYYY-MM-DD')
    console.log(formDate, 'FormDate')

    let currDate = moment().format('YYYY-MM-DD')
    console.log(typeof currDate, 'currDate')
    let currDay = moment(currDate).diff(formDate, 'days')
    console.log(currDay, 'currDay')

    if (row.remaningamount <= 0) {
      console.log('white')

      return '#fff'
    }
    if (row.remaningamount > 0 && Number(currDay) < 15) {
      console.log('light')
      return '#f5c6cb'
    }
    if (row.remaningamount > 0 && Number(currDay) >= 15) {
      console.log('tomato')

      return 'tomato'
    }
    return '#fff'
  }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border '>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>No.</th>
              <th className='max-w-60px ps-4'>File No.</th>
              <th className='min-w-150px'>Username</th>
              <th className='min-w-200px'>Name</th>
              <th className='min-w-150px'>Sales Executive.</th>
              <th className='min-w-200px'>Form Date</th>
              <th className='min-w-150px'> Form Type</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData.map((row: getInquiriesData, index: number) => {
                return (
                  <tr key={index} style={{backgroundColor: handleColor(row)}}>
                    {/* begin:: Index No */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: Index No */}

                    {/* begin:: fileNo Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>{row?.fileNo || '-'}</div>
                        </div>
                      </div>
                    </td>
                    {/* end:: fileNo Input */}

                    {/* begin:: User Type Input userName */}
                    <td className='text-dark fw-bold  fs-6'>{row.userName || '-'}</td>
                    {/* end:: User Type Input  userName */}

                    {/* begin:: User Type Input name */}
                    <td className='text-dark fw-bold  fs-6'>{row.name || '-'}</td>
                    {/* end:: User Type Input  name*/}

                    {/* begin:: User Type Input salesexecutiveName*/}
                    <td className='text-dark fw-bold  fs-6'>{row.salesexecutiveName || '-'}</td>
                    {/* end:: User Type Input  salesexecutiveName*/}

                    {/* begin:: User Type Input formdate */}
                    <td className='text-dark fw-bold  fs-6'>
                      {' '}
                      {moment.utc(row?.formdate).local().format('DD-MMMM-YYYY, h:mm a') || '-'}
                    </td>
                    {/* end:: User Type Input  formdate*/}

                    {/* begin:: User Type Input formtypeName*/}
                    <td className='text-dark fw-bold  fs-6'>{row.formtypeName || '-'}</td>
                    {/* end:: User Type Input  formtypeName*/}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`formsviewform/${row.id}`)}
                        // onClick={() => openViewModal(row.id)}
                        title='View Form'
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
                          navigate(`formsform/${row.id}`)
                        }}
                        title='Edit Form'
                        // onClick={()=>openEditModal(row.id)}
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                      {/* end:: Edit Icon */}

                      {/* begin:: Delete Icon */}
                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                        onClick={() => deleteFaults(row.id)}
                        title='Delete Form'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen027.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      {/* end:: Delete Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm m-1'
                        title='View Customer'
                        onClick={() => {
                          window.open(`/customers/customerviewform/${row.id}`, '_blank')
                        }}
                      >
                        <KTSVG
                          path='/media/icons/duotune/communication/com013.svg'
                          className='svg-icon-3'
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
                    No Records Found !
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
                        <div className='fw-bolder '>userName:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.userName || '-'}</div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>FileNo:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.fileNo || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Sales Executive:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.salesexecutiveName || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Form Date:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {' '}
                            {moment.utc(row?.formdate).local().format('DD-MMMM-YYYY, h:mm a') ||
                              '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Form Type:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.formtypeName || '-'}</div>
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
                          // onClick={() => openViewModal(row)}
                          onClick={() => navigate(`formsviewform/${row.id}`)}
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
                            navigate(`formsform/${row.id}`)
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
                          onClick={() => {
                            window.open(`/customers/customerviewform/${row.id}`, '_blank')
                          }}
                        >
                          <KTSVG
                            path='/media/icons/duotune/communication/com013.svg'
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
              <div className='text-dark fw-bolder fs-6 ps-4 text-center'>No Records Found !</div>
            </div>
          </div>
        )}
      </div>
      {/* End::Mobile Table */}
    </div>
  )
}

export default FormsTable
