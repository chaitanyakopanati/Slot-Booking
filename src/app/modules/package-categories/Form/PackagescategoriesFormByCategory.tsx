import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {ListPageData} from '../PackagesCategoriesContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
import Complaintservice from '../helperPackagesCategories/ApiDatarequest'
import PackagescategoriesFormModal from './PackagescategoriesFormModal'

function PackagescategoriesFormByCategory() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetPackageCategoryById */
  }
  const {data: category, error} = useQuery(
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
  {
    /* end:: Api call GetPackageCategoryById */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <PackagescategoriesFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <PackagescategoriesFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default PackagescategoriesFormByCategory
