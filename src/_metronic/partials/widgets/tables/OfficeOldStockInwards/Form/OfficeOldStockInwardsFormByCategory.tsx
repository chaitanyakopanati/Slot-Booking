import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../../helpers'
import {useParams} from 'react-router-dom'
import OfficeStockInwardsService from '../helperOfficeStockInwards/ApiDataRequest'
import {ListPageData} from '../OfficeOldStockInwardsContext'
import OfficeOldStockInwardsFormModal from './OfficeOldStockInwardsFormModal'

const OfficeOldStockInwardsFormByCategory = () => {
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
    `GetOfficeOldStockInwardsById-${itemIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetOfficeOldStockInwardsTypeById(itemIdForUpdate)
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

  useEffect(() => {
    console.log('itemIdForUpdate****', itemIdForUpdate)
  }, [category, itemIdForUpdate])

  {
    /* begin::Add-Form Model functionality */
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <OfficeOldStockInwardsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <OfficeOldStockInwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default OfficeOldStockInwardsFormByCategory
