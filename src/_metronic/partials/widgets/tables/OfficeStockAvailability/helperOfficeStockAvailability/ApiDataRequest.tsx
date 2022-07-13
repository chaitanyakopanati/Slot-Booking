import http from '../../../../../helpers/components/http-common'


{
  /* begin::  getDynamicOfficeStockAvailabilit Api call */
}
const getDynamicOfficeStockAvailabilit = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId:number,
  productId:number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetAllOfficeStockInward/${null}/${null}?searchText=${null}&zoneId=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetAllOfficeStockInward/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&productId=${productId}`
    )
  }
}
{
  /* end::  getDynamicOfficeStockAvailabilit Api call */
}

//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}

//Products
const getProducts = () => {
  return http.get('GetAllProducts')
}

const OfficeStockOutwardservice = {
  getDynamicOfficeStockAvailabilit,
  getZoneTypes,
  getProducts,
}

export default OfficeStockOutwardservice
