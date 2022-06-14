import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import { ListPageData } from '../PackageContext'
import Zoneservice from '../helperPackage/ApiDatarequestPackages'
import PackagesFormModal from './PackagesFormModal'


const PackagesFormModalWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
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
  
    useEffect(() => {
    console.log("category",category)
    console.log("itemIdForUpdate",itemIdForUpdate)
    }, [category])
  
     {/* begin::form model functionality */}
    if (!itemIdForUpdate) {
      return <PackagesFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <PackagesFormModal  category={category} />
    }
  
    return null
  }
  export default PackagesFormModalWrapper