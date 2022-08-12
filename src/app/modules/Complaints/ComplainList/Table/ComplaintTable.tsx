import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../ComplaintContext'
import Swal from 'sweetalert2'
import moment from 'moment'
import {toast} from 'react-toastify'
import ComplaintsViewService from '../../helperComplaint/ApiDataRequest'
import {useLoader} from '../../../loader/LoaderContext'
import {Checkbox} from 'rsuite'
import {useAuth} from '../../../auth'
import Access from '../../../../../_metronic/layout/components/aside/Accessibility'

const ComplaintTable = () => {
  const {
    getData,
    setPageNo,
    setSearchText,

    fetchAllComplaint,
    pageNo,
    pageSize,
    setAddComplaint,
    addComplaint,
    assignToId,
    setassignToId,
  } = ListPageData()
  let navigate = useNavigate()
  let {LoderActions} = useLoader()

  // const [addComplaint, setAddComplaint] = useState<any>([])
  const [isCheckAll, setIsCheckAll] = useState<any>(false)
  const [isCheck, setIsCheck] = useState<any>(false)
  const [list, setList] = useState<any>([])
  const {currentUser, auth} = useAuth()
  const id: number | any = auth?.roleId

  const openViewPage = () => {
    navigate('complaintviewform')
  }

  const openEditPage = () => {
    navigate('complaintform/add')
  }
  var currentTime: any = moment(new Date())

  useEffect(() => {
    if (auth?.roleId !== 7) {
      fetchAllComplaint()
      console.log('third', auth?.roleId)
    }
  }, [])

  // useEffect(() => {
  //   if (auth?.roleId == 7) {
  //     setassignToId(auth?.userId)

  //     fetchAllComplaint()
  //     console.log('fourth', auth?.roleId)
  //   }
  // }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
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
          let payload = await ComplaintsViewService.deleteComplaint(ID)
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
          toast.error(error?.data?.message)
          toast.dismiss('1s')
        }
        fetchAllComplaint()
      }
    })
  }

  const DataWiseIndex = (pageNo - 1) * pageSize

  const setBackgrondColour = (row: any) => {
    console.log('ddd', row)
    if (
      currentTime.diff(moment(row?.createdDate), 'hours') >= 24 &&
      row.statusName === 'Unsolved'
    ) {
      return `#f5c6cb`
    } else if (row.statusName === 'Unsolved') {
      return `#b8daff`
    } else {
      return ''
    }
  }

  const toggleAllChecked = () => {
    if (pageSize <= addComplaint.length) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  // useEffect(() => {
  //   setIsCheck(false)
  // }, [pageNo])

  useEffect(() => {
    toggleAllChecked()
  }, [pageSize, addComplaint])

  const multipleSelectComplaint = (id: any) => {
    // debugger
    const temp = addComplaint.some((addComplaintId: any) => id === addComplaintId)
    if (temp) {
      const removeComplainID = addComplaint.filter((complaintId: any) => {
        return complaintId !== id
      })
      setAddComplaint(removeComplainID)
    } else {
      setAddComplaint([...addComplaint, id])
    }
    // debugger
    console.log('jjj', addComplaint)

    if (pageSize <= addComplaint.length) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  // const selectAllComplaint = () => {
  //   getData.forEach((data) => {
  //     // debugger
  //     const temp = addComplaint.some((addComplaintId: any) => data.id == addComplaintId)
  //     if (temp) {
  //       const removeComplainID = addComplaint.filter((complaintId: any) => {
  //         return complaintId !== data.id
  //       })
  //       setAddComplaint(removeComplainID)
  //     } else {
  //       // setAddComplaint([...addComplaint, data.id])
  //       addComplaint.push(data.id)
  //     }
  //     // debugger
  //     console.log('jjj', addComplaint)
  //   })
  // }

  const selectAllComplaint = () => {
    setIsCheckAll(!isCheckAll)
    if (isCheckAll == false || pageSize >= addComplaint.length) {
      getData.forEach((data) => {
        addComplaint.push(data.id)
        setIsCheck(false)
      })
    } else {
      setAddComplaint([])
    }
    // debugger
    if (pageSize <= addComplaint.length) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  // const checkAll = (id: any) => {
  //   addComplaint.every((value) => {
  //     value == id
  //   })
  // }

  // const handleSelectAll = (e: any) => {
  //   setIsCheckAll(!isCheckAll)
  //   setIsCheck(list.map((li: any) => li.id))
  //   if (isCheckAll) {
  //     setIsCheck([])
  //   }
  // }

  // const handleClick: any = (e: any) => {
  //   const {id, checked} = e.target
  //   setIsCheck([...isCheck, id])
  //   if (!checked) {
  //     setIsCheck(isCheck.filter((item: any) => item !== id))
  //   }
  // }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border thead-light'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              {/* <th className='max-w-10px '>
                <input
                  type='checkbox'
      
                />
              </th> */}
              <th className='max-w-60px min-w-40px rounded-start ps-4 d-flex justify-content-start'>
                {' '}
                <input
                  type='checkbox'
                  className='mx-4'
                  onClick={selectAllComplaint}
                  checked={isCheck}
                />
                {/* <Checkbox
                  type='checkbox'
                  name='selectAll'
                  id='selectAll'
                  handleClick={handleSelectAll}
                  isChecked={isCheckAll}
                /> */}
                Complaint No.
              </th>
              <th className='max-w-60px '>User Name</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Package Category</th>
              <th className='min-w-200px'>Complaint Type</th>
              <th className='min-w-150px'>Assign to</th>
              <th className='min-w-150px'>Status</th>
              <th className='min-w-150px'>Complaint Date</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: any, index: number) => {
                return (
                  <tr
                    key={DataWiseIndex + index + 1}
                    className={
                      currentTime.diff(moment(row?.createdDate), 'hours') >= 24 &&
                      row.statusName === 'Unsolved'
                        ? 'p-3 mb-2 text-white'
                        : '' || row.statusName === 'Unsolved'
                        ? 'p-3 mb-2 text-white'
                        : ''
                    }
                    style={{
                      backgroundColor: setBackgrondColour(row),
                    }}
                  >
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center d-flex justify-content-start'>
                        <input
                          className='mx-4'
                          type='checkbox'
                          onClick={() => {
                            multipleSelectComplaint(row.id)
                          }}
                          checked={addComplaint.includes(row.id)}
                        />

                        {/* <Checkbox
                          type='checkbox'
                          name='name'
                          id='id'
                          handleClick={handleClick}
                          isChecked={isCheck.includes(row.id)}
                        /> */}

                        {DataWiseIndex + index + 1}
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

                    <td className='text-dark fw-bold  fs-6'>{row.name || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.packageCategorieName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.complaintTypeName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.assignTechnicianName || '-'}</td>
                    <td className='text-dark fw-bold  fs-6'>{row.statusName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>
                      {' '}
                      {moment(row?.createdDate).format('DD-MMM-YYYY, h:mm a') || '-'}
                    </td>

                    <td className='p-0'>
                      <a
                        className='btn btn-icon btn-active-color-success btn-sm'
                        onClick={() => navigate(`complaintviewform/${row.id}`)}
                        title='View complaint'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>

                      {(Access[id].hasOwnProperty('allAccess') ||
                        Access[id]['complaintrights'].includes('edit')) && (
                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm'
                          onClick={() => {
                            navigate(`complaintform/${row.id}`)
                          }}
                          title='Edit complaint'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      )}

                      {(Access[id].hasOwnProperty('allAccess') ||
                        Access[id]['complaintrights'].includes('delete')) && (
                        <>
                          {' '}
                          <button
                            className='btn btn-icon btn-active-color-danger btn-sm'
                            onClick={() => deleteFaults(row.id)}
                            title='Delete complaint'
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen027.svg'
                              className='svg-icon-3'
                            />
                          </button>
                          <a
                            href='#'
                            className='btn btn-icon btn-active-color-danger btn-sm'
                            data-bs-toggle='modal'
                            data-bs-target='#view-customer-modal'
                            title='Created Customer'
                            onClick={() => {
                              window.open(`/customers/customerviewform/${row.customerId}`, '_blank')
                            }}
                          >
                            <KTSVG
                              path='/media/icons/duotune/communication/com013.svg'
                              className='svg-icon-3'
                            />
                          </a>{' '}
                        </>
                      )}
                    </td>
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
        </table>
      </div>

      <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
        <div
          onChange={handlesearchange}
          className='form-control form-control-solid ps-14'
          placeholder='Search'
        />
        {getData.length > 0 ? (
          getData?.map((row: any, index: number) => {
            return (
              // <div key={DataWiseIndex + index + 1}>
              <div key={index}>
                <div className='col-md-6 mx-0 my-2'>
                  <div className='card card-custom border'>
                    <div className='card-body p-4'>
                      <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                        <div className='text-dark fw-bolder fs-3 me-2'>
                          {' '}
                          {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> */}
                          <input type='checkbox' />
                          {DataWiseIndex + index + 1}
                        </div>
                        <div className='fw-bolder fs-3'>{row?.userName || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>user Name:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.userName || '-'}</div>
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
                          <div className='fw-bolder '>packageCategori:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.packageCategorieName || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>complaintType:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.complaintTypeName || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Assign to:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.assignTechnicianName || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>status:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.statusName || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Complaint date:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {moment.utc(row?.outwardDate).local().format('DD-MMM-YYYY, h:mm a') ||
                              '-'}
                          </div>
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
                          onClick={() => navigate(`complaintviewform/${row.id}`)}
                          title='Edit Complain'
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
                            navigate(`complaintform/${row.id}`)
                          }}
                          title='view Complain'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          onClick={() => deleteFaults(row.id)}
                          title='Deleted Complain'
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          title='Created Customer'
                          onClick={() => {
                            window.open(`/customers/customerviewform/${row.customerId}`, '_blank')
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
              <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                No data available in table
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComplaintTable
