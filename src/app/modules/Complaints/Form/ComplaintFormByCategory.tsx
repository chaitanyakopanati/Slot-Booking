import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../ComplaintContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
import ComplaintFormModal from './ComplaintFormModal'
import ComplaintsViewService from '../helperComplaint/ApiDataRequest'

const ComplaintFormByCategory = () => {
  let {id} = useParams()
  const username: any = id?.split('&')[0]
  const userId: any = id?.split('&')[1]

  useEffect(() => {
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else if (username && userId) {
      setItemIdForUpdate('add')
    } else {
      setItemIdForUpdate(id)
    }
  }, [])

  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()

  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  const {data: category, error} = useQuery(
    `GetOfficeStockOutwardsById-${itemIdForUpdate}`,
    () => {
      return ComplaintsViewService.GetComplaintsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && id !== 'add' && id !== `${username}&${userId}`,
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )

  if (itemIdForUpdate == 'add' && username && userId) {
    return <ComplaintFormModal category={{ID: undefined, username: username, userId: userId}} />
  }
  if (itemIdForUpdate === 'add') {
    return <ComplaintFormModal category={{ID: undefined}} />
  } else {
    return <ComplaintFormModal category={category?.data} />
  }

  // return null
}
export default ComplaintFormByCategory
