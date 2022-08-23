import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {isNotEmpty} from '../../../../../helpers'
import {ListPageData} from '../OfficeOldStockOutwardsContext'
import OfficeStockOutwardsViewService from '../helperOfficeOldStockOutwards/ApiDataRequest'
import OfficeOldStockOutwardsFormModal from './OfficeOldStockOutwardsFormModal'

const OfficeOldStockOutwardsFormByCategory = () => {
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
    `GetOfficeOldStockOutwardsById-${itemIdForUpdate}`,
    () => {
      return OfficeStockOutwardsViewService.GetOfficeOldStockOutwardsTypeById(itemIdForUpdate)
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
    return <OfficeOldStockOutwardsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <OfficeOldStockOutwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default OfficeOldStockOutwardsFormByCategory
