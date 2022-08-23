import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../BankContext'
import Zoneservice from '../helperBank/ApiDatarequest'
import BankFormModal from './BankFormModal'

const BankFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetBankById */
  }
  const {data: category, error} = useQuery(
    `GetBankById-${itemIdForUpdate}`,
    () => {
      return Zoneservice.GetBankTypeById(itemIdForUpdate)
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
    /* end:: Api call GetBankById */
  }

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <BankFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <BankFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default BankFormByCategory
