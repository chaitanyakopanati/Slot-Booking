import {useQuery} from 'react-query'
import {useEffect} from 'react'
import { ListPageData } from '../OfficeStockInwardsContext'
import { isNotEmpty } from '../../../../../helpers'
import MainPointservice from '../helperOfficeStockInwards/ApiDataRequest'
import OfficeStockInwardsFormModal from './OfficeStockInwardsFormModal'
import OfficeStockInwardservice from '../helperOfficeStockInwards/ApiDataRequest'

const OfficeStockInwardsFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetOfficeStockInwardById */
  }
  const {data: category, error} = useQuery( 
    `GetOfficeStockInwardById-${itemIdForUpdate}`,
    () => {
      return OfficeStockInwardservice.GetOfficeStockInwardsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )
  {
    /* end:: Api call OfficeStockInwardsFormByCategory */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <OfficeStockInwardsFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
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
