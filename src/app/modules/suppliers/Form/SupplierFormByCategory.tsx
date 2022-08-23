import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {ListPageData} from '../SupplierContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
import Supplierservice from '../helperSupplier/ApiDatarequest'
import SupplierFormModal from './SupplierFormModal'

function SupplierFormByCategory() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetPackageCategoryById */
  }
  const {data: category, error} = useQuery(
    `GetPackageCategoryById-${itemIdForUpdate}`,
    () => {
      return Supplierservice.GetSuppliersTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )
  {
  }

  {
  }
  if (!itemIdForUpdate) {
    return <SupplierFormModal category={{ID: undefined}} />
  }
  {
  }

  {
  }
  if (!error && category) {
    return <SupplierFormModal category={category} />
  }
  {
  }

  return null
}

export default SupplierFormByCategory
