import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../OfficeStockOutwardsContext'
import {isNotEmpty} from '../../../../../helpers'
import OfficeStockOutwardsViewService from '../helperOfficeStockOutwards/ApiDataRequest'
import OfficeStockOutwardsFormModal from './OfficeStockOutwardsFormModal'

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
      return OfficeStockOutwardsViewService.GetOfficeStockOutwardsTypeById(itemIdForUpdate)
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
    /* end:: Api call GetOfficeStockOutwardsTypeById */
  }

  {
    /* begin::Add-Form Model functionality */
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <OfficeStockOutwardsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <OfficeStockOutwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default OfficeStockOutwardsFormByCategory
