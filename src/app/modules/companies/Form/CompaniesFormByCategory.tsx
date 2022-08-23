import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../CompaniesContext'
import Zoneservice from '../helperCompanies/ApiDatarequest'
import CompaniesFormModal from './CompaniesFormModal'

const CompaniesFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetCompanyById */
  }
  const {data: category, error} = useQuery(
    `GetCompanyById-${itemIdForUpdate}`,
    () => {
      return Zoneservice.GetCompaniesTypeById(itemIdForUpdate)
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
    /* end:: Api call GetCompanyById */
  }

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <CompaniesFormModal category={{ID: undefined}} />
  }
  {
    /* begin::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <CompaniesFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default CompaniesFormByCategory
