import {ListPageData} from '../UserContext'
import UserFormViewModal from '../Userlist/Table/UserFormViewModal'
import UserFormWrapper from './UserFormWrapper'

function UserViewWrapper() {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  console.log(itemIdForUpdate,"itemIdForUpdate");
  console.log(viewIdForUpdate,"viewIdForUpdate");
  
  return (
    <div className='overflow-hidden'>
      <h1>hello</h1>
      <h1>hello</h1>
      {/* begin:: Fault Add/Edit Form Component */}
      {/* {itemIdForUpdate == undefined && <UserFormWrapper />} */}
      {/* end:: Fault Add/Edit Form Component */}
      {/* begin:: Fault View Form Component */}
      {viewIdForUpdate && <UserFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Fault View Form Component */}
    </div>
  )
}

export default UserViewWrapper
