import http from '../../complaint-types/helper/http-common'
import {ID, postlistData, putZonemodel} from './ModelZones'

{
  /* begin:: Zones:- GetDynamicZones Api call */
}
const getDynamicZones = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicZones/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicZones/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}
{
  /* end:: Zones:- GetDynamicZones Api call */
}

{
  /* begin:: Zones:- get Api call */
}
const getZones = () => {
  return http.get('GetAllZones')
}
{
  /* end:: Zones:- get Api call */
}

{
  /* begin:: Zones:- post Api call(create) */
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
  /* end:: Zones:- post Api call(create)*/
}

{
  /* begin:: Zones:- delete Api call*/
}
const deleteZones = (Id: number) => {
  return http.delet(`DeleteZoneById/${Id}`)
}
{
  /* end:: Zones:- delete Api call*/
}

{
  /* begin:: Zones:- post Api call(edit) */
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
  /* end:: Zones:- post Api call(edit) */
}

{
  /* begin:: Zones:- getById Api call */
}
const GetZonesTypeById = (id: ID) => {
  return http.get(`GetZoneById/${id}`)
}
{
  /* end:: Zones:- getById Api call */
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
