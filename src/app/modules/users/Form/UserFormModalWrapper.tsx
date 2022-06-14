import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import Userservice from '../helperUser/ApiDatarequestUser'
import UserFormModal from './UserFormModal'
import { ListPageData } from '../UserListContext'

function UserFormModalWrapper() {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

   {/* begin:: getbyid pass */}
  const {
    data: category,
    error,
  } = useQuery(
    `GetUserbyId-${itemIdForUpdate}`,
    () => {
      return Userservice.GetUserTypeById(itemIdForUpdate)
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
    return <UserFormModal  category={{ID: undefined}} />
  }

  if ( !error && category) {
    return <UserFormModal  category={category} />
  }

  return null
}

export default UserFormModalWrapper
