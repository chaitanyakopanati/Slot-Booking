import {useQuery} from 'react-query'
import {isNotEmpty} from '../../../../../_metronic/helpers/crud-helper/helpers'
import {ListPageData} from '../../ComplaintListContext'
import Complaintservice from '../../helper/ApiDatarequest'
import ComplaintFormModal from './ComplaintFormModal'
import {useEffect} from 'react'

function ComplaintFormByCategory() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetComplaintTypeById */
  }
  const {data: category, error} = useQuery(
    `GetComplaintTypeById-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetComplaintTypeById(itemIdForUpdate)
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
    /* end:: Api call GetComplaintTypeById */
  }

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <ComplaintFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <ComplaintFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default ComplaintFormByCategory
