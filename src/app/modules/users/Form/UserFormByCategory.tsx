import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import { ListPageData } from '../UserContext'
import Userservice from '../helperUser/ApiDatarequestUser'
import UserFormModal from './UserFormModal'
import { useParams } from 'react-router-dom'


const UserFormByCategory = () => {

  let {id} = useParams()
  
  
  const [itemIdForUpdate, setItemIdForUpdate] = useState<undefined | null | string>(null)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)


  useEffect(() => {
    console.log("params",id)
    if(id==='add'){
      setItemIdForUpdate(null)
    }else{
      setItemIdForUpdate(id)
    }
  }, [id])

  {
    /* begin:: Api call GetUserTypeById */
  }
  const {data: category, error} = useQuery(
    `GetUserbyId-${itemIdForUpdate}`,
    () => {
      console.log(itemIdForUpdate,"itemIdForUpdate=--------===");
      
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
  {
    /* end:: Api call GetUserTypeById */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <UserFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
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
