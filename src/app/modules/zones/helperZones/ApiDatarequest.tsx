import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putZonemodel} from './ModelZones'

{
  /* begin:: Zones:- GetDynamicZones Api call */
}
const getDynamicZones = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicZones/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicZones/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
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
    createdby: obj.createdby,
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
    modifyby: obj.modifyby,
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

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Zoneservice = {
  getDynamicZones,
  getZones,
  postZones,
  deleteZones,
  editZones,
  GetZonesTypeById,
  getCreatedByTypes
}

export default Zoneservice
