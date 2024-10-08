import {useEffect} from 'react'
import {ListPageData} from '../../GodownStockAvailabilityContext'
import {getGodownstockavailabilitiesData} from '../../helperGodownStockAvailability/ModelGodownStockAvailability'

const GodownStockAvailabilityTable = () => {
  const {
    getData,
    pageNo,
    pageSize,
    fetchAllofficestockOutward,
    DataGetAllTypeProducts,
    setPageNo,
    setSearchText,
  } = ListPageData()

  const DataWiseIndex = (pageNo - 1) * pageSize

  useEffect(() => {
    fetchAllofficestockOutward()
    DataGetAllTypeProducts()
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
              <th className='max-w-60px rounded-start ps-8'>No.</th>
              <th className='min-w-200px'>Product</th>
              <th className='min-w-150px'>Quantity</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: getGodownstockavailabilitiesData, index: number) => {
                return (
                  <tr key={index}>
                    {/* begin:: index Input */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-8'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: index Input */}

                    {/* begin:: productName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.productName || '-'}</td>
                    {/* end:: productName Input */}

                    {/* begin:: quantity Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.quantityDisplay || '-'}</td>
                    {/* end:: quantity Input */}
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
            getData?.map((row: getGodownstockavailabilitiesData, index: number) => {
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
                          <div className='fw-bolder '>quantity :</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.quantityDisplay || '-'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card-footer p-2 py-0 bg-light'></div>
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
export default GodownStockAvailabilityTable
