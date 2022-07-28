import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../ComplaintContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
import ComplaintFormModal from './ComplaintFormModal'
import ComplaintsViewService from '../helperComplaint/ApiDataRequest'

const OfficeStockOutwardsFormByCategory = () => {
  let {id} = useParams()

  useEffect(() => {
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else {
      setItemIdForUpdate(id)
    }
  }, [id])

  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  const {data: category, error} = useQuery(
    `GetOfficeStockOutwardsById-${itemIdForUpdate}`,
    () => {
      return ComplaintsViewService.GetComplaintsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && id !== 'add',
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )
  {
  }

  useEffect(() => {
    console.log('itemIdForUpdate****', itemIdForUpdate)
  }, [category, itemIdForUpdate])

  {
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <ComplaintFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <ComplaintFormModal category={category.data[0]} />
  }
  {
  }

  return null
}
export default OfficeStockOutwardsFormByCategory
