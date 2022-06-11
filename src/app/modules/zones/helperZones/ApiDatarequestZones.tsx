
import http from '../../complaint-types/helper/http-common'
import { ID, postlistData, putZonemodel } from './ModelZones'

const getDynamicZones = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicZones/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicZones/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getZones*/
}
const getZones = () => {
  return http.get('GetAllZones')
}

{
  /* begin::  postZones*/
}
const postZones = (obj: postlistData) => {
  return http.post('SaveZone', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}

{
  /* begin::  deleteZones*/
}
const deleteZones = (Id: number) => {
  return http.delet(`DeleteZoneById/${Id}`)
}

{
  /* begin::  editZones*/
}
const editZones = (obj: putZonemodel) => {
  return http.post(`SaveZone`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: 1,
    id: obj.id,
  })
}

{
  /* begin::  GetZonesTypeById*/
}
const GetZonesTypeById = (id: ID) => {
  return http.get(`GetZoneById/${id}`)
}

{
  /* begin::  Zoneservice*/
}
const Zoneservice = {
  getDynamicZones,
  getZones,
  postZones,
  deleteZones,
  editZones,
  GetZonesTypeById,
}

export default Zoneservice
