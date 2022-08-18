import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {ListPageData} from '../OfficeStockInwardsContext'
import {isNotEmpty} from '../../../../../helpers'
import {useParams} from 'react-router-dom'
import OfficeStockInwardsFormModal from './OfficeStockInwardsFormModal'
import OfficeStockInwardsService from '../helperOfficeStockInwards/ApiDataRequest'

const OfficeStockInwardsFormByCategory = () => {
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
    `GetOfficeStockInwardsTypeById-${itemIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetOfficeStockInwardsTypeById(itemIdForUpdate)
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
    return <OfficeStockInwardsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <OfficeStockInwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default OfficeStockInwardsFormByCategory
