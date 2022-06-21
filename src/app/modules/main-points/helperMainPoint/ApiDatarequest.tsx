import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putMainPointmodel} from './ModelMainPoint'

{
  /* begin:: MainPoint:- getDynamicFaults Api call */
}
const getDynamicMainPoint = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicMainPoints/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicMainPoints/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
  }
}
{
  /* end:: MainPoint:- getDynamicFaults Api call */
}

{
  /* begin:: MainPoint:- get Api call */
}
const getMainPoint = () => {
  return http.get('GetAllMainPoints')
}
{
  /* end:: MainPoint:- get Api call */
}

{
  /* begin:: MainPoint:- post Api call(create) */
}
const postMainPoint = (obj: postlistData) => {
  return http.post('SaveMainPoint', {
    name: obj.name,
    zoneid: obj.zoneid,
    createdby: 1,
    Updatedby: 1,
  })
}
{
  /* end:: MainPoint:- post Api call(create) */
}

{
  /* begin:: MainPoint:- delete Api call */
}
const deleteMainPoint = (Id: number) => {
  return http.delet(`DeleteMainPointById/${Id}`)
}
{
  /* end:: MainPoint:- delete Api call */
}

{
  /* begin:: MainPoint:- post Api call(edit) */
}
const editMainPoint = (obj: putMainPointmodel) => {
  return http.post(`SaveMainPoint`, {
    name: obj.name,
    zoneid: obj.zoneid,
    createdby: 1,
    id: obj.id,
  })
}
{
  /* end:: MainPoint:- post Api call(edit) */
}

{
  /* begin:: MainPoint:- getById Api call */
}
const GetMainPointById = (id: ID) => {
  return http.get(`GetMainPointById/${id}`)
}
{
  /* end:: MainPoint:- getById Api call */
}

{
  /* begin:: MainPoint:- GetAllZones Api call */
}
const getMainPointTypes = () => {
  return http.get('GetAllZones')
}
{
  /* end:: MainPoint:- GetAllZones Api call */
}

const MainPointservice = {
  getDynamicMainPoint,
  getMainPoint,
  postMainPoint,
  deleteMainPoint,
  editMainPoint,
  GetMainPointById,
  getMainPointTypes,
}

export default MainPointservice
