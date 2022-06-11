import { useQuery } from 'react-query'
import { isNotEmpty } from '../../../../../_metronic/helpers/crud-helper/helpers'
import { ListPageData } from '../../ComplaintListContext'
import Complaintservice from '../../helper/ApiDatarequest'
import ComplaintFormModal from './ComplaintFormModal'
import { useEffect } from 'react'

function ComplaintFormWrapper() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

   {/* begin:: getbyid pass */}
  const {
    data: category,
    error,
  } = useQuery(
    `GetComplaintTypeById-${itemIdForUpdate}`,
    () => {
      return Complaintservice.GetComplaintTypeById(itemIdForUpdate)
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
    return <ComplaintFormModal  category={{ID: undefined}} />
  }

  if ( !error && category) {
    return <ComplaintFormModal  category={category} />
  }

  return null
}

export default ComplaintFormWrapper
