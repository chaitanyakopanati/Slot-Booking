import {useEffect} from 'react'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../../helpers'
import {getGodownStockInwardsData} from '../../helperGodownStockInwards/ModelGodownStockInwards'
import {ListPageData} from '../../GodownStockInwardsContext'
import {useAuth} from '../../../../../../../app/modules/auth'

const GodownStockInwardsTable = () => {
  const {
    pageNo,
    getData,
    pageSize,
    setPageNo,
    setSearchText,
    DataGetAllTypeCreatedByTypes,
    DataGetAllTypeTechnician,
    fetchAllUser,
    DataGetAllTypeZone,
    DataGetAllTypeProduct,
  } = ListPageData()
  const navigate = useNavigate()

  const DataWiseIndex = (pageNo - 1) * pageSize

  useEffect(() => {
    DataGetAllTypeCreatedByTypes()
    fetchAllUser()
    DataGetAllTypeTechnician()
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    setSearchText(e.target.value)
  }

  const {currentUser, auth} = useAuth()

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px  rounded-start ps-12'>No.</th>
              <th className='max-w-60px '>Inward no.</th>
              <th className='min-w-150px'>Inward date</th>
              <th className='min-w-200px'>Product</th>
              <th className='min-w-150px'>Quantity</th>
              <th className='min-w-200px'>Supplier name</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: getGodownStockInwardsData, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className='text-dark fw-bolder fs-6  text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* begin:: Name Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold ps-4 fs-6'>
                            {row?.id ? row?.id : '-'}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}

                    {/* begin:: inwardDate At Date & Time */}
                    <td className='text-dark fw-bold fs-6'>
                      {moment(row?.inwardDate).format('DD-MMM-YYYY') || '-'}
                    </td>
                    {/* end:: inwardDate At Date & Time */}

                    {/* begin:: productName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.productName || '-'}</td>
                    {/* end:: productName Input */}

                    {/* begin:: quantity Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.quantityDisplay || '-'}</td>
                    {/* end:: quantity Input */}

                    {/* begin:: supplierName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.supplierName || '-'}</td>
                    {/* end:: supplierName Input */}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`godown-stock-inwardsviewform/${row.id}`)}
                        // onClick={() => openViewModal(row.id)}
                        title='View Godown Stock Inward'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      {/* end:: View Icon */}

                      {/* begin:: Edit Icon */}
                      {auth?.roleId == 6 ? (
                        ''
                      ) : (
                        <button
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          onClick={() => {
                            navigate(`godownInwardsform/${row.id}`)
                          }}
                          title='Edit Godown Stock Inwards'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      )}
                      {/* end:: Edit Icon */}
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
          getData?.map((row: getGodownStockInwardsData, index: number) => {
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
                        <div className='fw-bolder fs-3'>{row?.productName || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>InwardDate:</div>
                        <div className='text-dark fw-bold  ms-2'>
                          {moment(row?.inwardDate).format('DD-MMM-YYYY') || '-'}
                        </div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>inwardNo:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.id || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>quantity :</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.quantityDisplay || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Supplier Name:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.supplierName || '-'}</div>
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
                          onClick={() => navigate(`godown-stock-inwardsviewform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen060.svg'
                            className='svg-icon-3'
                          />
                        </a>

                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm me-1'
                          onClick={() => navigate(`godownInwardsform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
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

export default GodownStockInwardsTable
