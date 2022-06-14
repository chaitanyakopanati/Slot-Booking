import UserTypeHeader from "../../Complaintlist/Table/UserTypeHeader"

const UserListHeader = () => {
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <UserTypeHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export {UserListHeader}
