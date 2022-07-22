import http from '../../../../../helpers/components/http-common'
import axios from 'axios'

const API_URL_DATA = process.env.REACT_APP_API_URL

{
  /* begin::  getDynamicGodownstockavailabilities Api call */
}
const getDynamicGodownstockavailabilities = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number,
  productId: number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicGodownStockAvailabilities/${null}/${null}?searchText=${null}&zoneId=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicGodownStockAvailabilities/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&productId=${productId}`
    )
  }
}
{
  /* end::  getDynamicGodownstockavailabilities Api call */
}

// Download

const getDynamicDownloadFile = (productId: number, searchText: string) => {
  return axios({
    url: `${API_URL_DATA}/GetGodownStockAvailabilitiesExcelSheetData?productId=${productId}&searchText=${searchText}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

//Products
const getProducts = () => {
  return http.get('GetAllProducts')
}

const OfficeStockOutwardservice = {
  getDynamicGodownstockavailabilities,
  getProducts,
  getDynamicDownloadFile,
}

export default OfficeStockOutwardservice
