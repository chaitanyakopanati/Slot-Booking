import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../UserContext'
import Userservice from '../helperUser/ApiDatarequestUser'
import UserFormModal from './UserFormModal'
import {useParams} from 'react-router-dom'

const UserFormByCategory = () => {
  let {id} = useParams()

  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()
  // const [itemIdForUpdate, setItemIdForUpdate] = useState<undefined | null | string>(null)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  useEffect(() => {
    
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else {
      setItemIdForUpdate(id)
    }
  }, [id])




  const {data: category, error} = useQuery(
    `GetUserbyId-${itemIdForUpdate}`,
    () => {
      return Userservice.GetUserTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && id !== 'add',
      onError: (err) => {
        setItemIdForUpdate(undefined)
        
      },
    }
  )
  {
    /* end:: Api call GetUserTypeById */
  }

  useEffect(() => {
    
    console.log('itemIdForUpdate****', itemIdForUpdate)
  }, [category,itemIdForUpdate])

  {
    /* begin::Add-Form Model functionality */
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <UserFormModal category={{ID: undefined}} />
  }


  if (!error && category) {
    return <UserFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default UserFormByCategory
