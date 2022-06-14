import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {ListPageData} from '../FaultsContext'
import {isNotEmpty} from '../../../../_metronic/helpers'
import Complaintservice from '../helperFaults/ApiDatarequest'
import FaultsFormModal from './FaultsFormModal'

const FaultsFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetFaultsTypeById */
  }
  const {data: category, error} = useQuery(
    `GetFaultById-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetFaultsTypeById(itemIdForUpdate)
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
    /* end:: Api call GetFaultsTypeById */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <FaultsFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <FaultsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default FaultsFormByCategory
