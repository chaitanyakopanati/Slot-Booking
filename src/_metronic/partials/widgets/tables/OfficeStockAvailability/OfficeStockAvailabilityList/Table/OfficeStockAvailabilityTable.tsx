import moment from 'moment'
import {useEffect} from 'react'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import {KTSVG} from '../../../../../../helpers'
import {getOfficetockAvailabilityData} from '../../helperOfficeStockAvailability/ModelOfficeStockAvailability'
import {ListPageData} from '../../OfficeStockAvailabilityContext'

const OfficeStockAvailabilityTable = () => {
  const {
    setItemIdForUpdate,
    getData,
    pageNo,
    pageSize,
    setViewIdForUpdate,
    fetchAllofficestockOutward,
    DataGetAllTypeZone,
    DataGetAllTypeProducts,
    setPageNo,
    setSearchText,
  } = ListPageData()
  let {LoderActions, open} = useLoader()

  const DataWiseIndex = (pageNo - 1) * pageSize

  useEffect(() => {
    fetchAllofficestockOutward()
    DataGetAllTypeZone()
    DataGetAllTypeProducts()
    // LoderActions(false)
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
              <th className='max-w-60px min-w-40px rounded-start ps-4'>No.</th>
              <th className='min-w-200px'>Product</th>
              <th className='min-w-150px'>Quantity</th>
              <th className='min-w-150px'>Zone</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: getOfficetockAvailabilityData, index: number) => {
                return (
                  <tr key={index}>
                    {/* begin:: index Input */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: index Input */}

                    {/* begin:: productName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.productName || '-'}</td>
                    {/* end:: productName Input */}

                    {/* begin:: quantity Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.quantity || '-'}</td>
                    {/* end:: quantity Input */}

                    {/* begin:: zoneName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.zoneName || '-'}</td>
                    {/* end:: zoneName Input */}
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

        {/* begin::Mobile Table */}
        <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
          <div
            onChange={handlesearchange}
            className='form-control form-control-solid ps-14'
            placeholder='Search'
          />
          {getData.length > 0 ? (
            getData?.map((row: getOfficetockAvailabilityData, index: number) => {
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
                          <div className='text-dark fw-bold  ms-2'>{row.quantity || '-'}</div>
                        </div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>zoneName:</div>
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

                  <div className='card-footer p-2 py-0 bg-light'></div>
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
    </>
  )
}
export default OfficeStockAvailabilityTable
