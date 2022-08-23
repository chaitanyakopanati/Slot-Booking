import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../../helpers'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../GodownStockInwardsContext'
import OfficeStockInwardsService from '../helperGodownStockInwards/ApiDataRequest'
import GodownStockInwardsFormModal from './GodownStockInwardsFormModal'

const GodownStockInwardsFormByCategory = () => {
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
    `GetGodownStockInwardsById-${itemIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetGodownStockInwardsTypeById(itemIdForUpdate)
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
    return <GodownStockInwardsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <GodownStockInwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default GodownStockInwardsFormByCategory
