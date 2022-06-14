import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../PackageContext'
import Zoneservice from '../helperPackage/ApiDatarequest'
import PackagesFormModal from './PackagesFormModal'

const PackagesFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetPackageById */
  }
  const {data: category, error} = useQuery(
    `GetPackageById-${itemIdForUpdate}`,
    () => {
      return Zoneservice.GetPackagesTypeById(itemIdForUpdate)
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
    /* end:: Api call GetPackageById */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <PackagesFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <PackagesFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default PackagesFormByCategory
