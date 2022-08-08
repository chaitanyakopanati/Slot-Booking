// import React from 'react'

// export const SupplierFormByCategory = () => {
//   return (
//     <div>SupplierFormByCategory</div>
//   )
// }

import {useQuery} from 'react-query'
import {useEffect} from 'react'
// import {ListPageData} from '../PackagesCategoriesContext'
import {ListPageData} from '../SupplierContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
// import Complaintservice from '../helperPackagesCategories/ApiDatarequest'
// import PackagescategoriesFormModal from './PackagescategoriesFormModal'
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
        console.error(err)
      },
    }
  )
  {
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

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
