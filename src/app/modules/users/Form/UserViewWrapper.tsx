import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../_metronic/helpers'
import UserFormHeader from '../component/UserFormHeader'
import Userservice from '../helperUser/ApiDatarequestUser'
import {ListDataProvider, ListPageData} from '../UserContext'
import UserFormViewModal from '../Userlist/Table/UserFormViewModal'
import UserFormWrapper from './UserFormWrapper'

function UserView() {
  let {id} = useParams()
  const {viewIdForUpdate,setViewIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    console.log("id",id)
    if(id){
      setViewIdForUpdate(id)
    }
  }, [id])

  useEffect(() => {
    console.log("viewIdForUpdate",viewIdForUpdate)
  }, [viewIdForUpdate])
  

  const {data: userDetails, error} = useQuery(
    `ViewUserbyId-${viewIdForUpdate}`,
    () => {
      return Userservice.GetUserTypeById(viewIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setViewIdForUpdate(undefined)
        console.error(err)
      },
    }
  )
  
  
  return (
    <div className='overflow-hidden'>
    <KTCard className='ms-5 me-5'>
      {userDetails &&
      <UserFormViewModal category={userDetails} />
      }
      
    </KTCard>
  </div>
  )
}




let UserViewWrapper = () =>{
  return(
    <ListDataProvider>
      <UserView />
    </ListDataProvider>
  )
}

export default UserViewWrapper
