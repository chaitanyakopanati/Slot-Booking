import axios from 'axios'
import http from '../../../../../helpers/components/http-common'

const API_URL_DATA = process.env.REACT_APP_API_URL


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
      `GetDynamicOfficeOldStockAvailabilities/${null}/${null}?searchText=${null}&zoneId=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicOfficeOldStockAvailabilities/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&productId=${productId}`
    )
  }
}
{
  // /* end::  getDynamicOfficeStockAvailabilit Api call */
}

// download 

const getDynamicDownloadFile = (
  productId: number,
  zoneId: number,
  searchText: string,
) => {
    return axios({
      url: `${API_URL_DATA}/GetOfficeStockAvailabilitiesExcelSheetData?productId=${productId}&zoneId=${zoneId}&searchText=${searchText}`, //your url
      method: 'GET',
      responseType: 'blob', // important
  })
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
  getDynamicDownloadFile,
}

export default OfficeStockOutwardservice
