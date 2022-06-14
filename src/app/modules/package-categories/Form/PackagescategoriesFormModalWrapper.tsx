import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { ListPageData } from '../PackagesCategoriesListContext'
import { isNotEmpty } from '../../../../_metronic/helpers'
import Complaintservice from '../helperPackagesCategories/ApiDatarequestPackagwesCategories'
import PackagescategoriesFormModal from './PackagescategoriesFormModal'

function PackagescategoriesFormModalWrapper() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

   {/* begin:: getbyid pass */}
  const {
    data: category,
    error,
  } = useQuery(
    `GetPackageCategoryById-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetPackagesCategoriesTypeById(itemIdForUpdate)
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

  useEffect(() => {
  console.log("category",category)
  console.log("itemIdForUpdate",itemIdForUpdate)
  }, [category])

   {/* begin::form model functionality */}
  if (!itemIdForUpdate) {
    return <PackagescategoriesFormModal  category={{ID: undefined}} />
  }

  if ( !error && category) {
    return <PackagescategoriesFormModal  category={category} />
  }

  return null
}

export default PackagescategoriesFormModalWrapper
