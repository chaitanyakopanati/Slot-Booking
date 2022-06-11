import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import { ListPageData } from '../CompaniesContext'
import Zoneservice from '../helperCompanies/ApiDatarequestCompanies'
import CompaniesFormModal from './CompaniesFormModal'

const CompaniesFormModalWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
      `GetCompanyById-${itemIdForUpdate}`,
      () => {
        return Zoneservice.GetCompaniesTypeById(itemIdForUpdate)
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
      return <CompaniesFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <CompaniesFormModal  category={category} />
    }
  
    return null
  }
  export default CompaniesFormModalWrapper