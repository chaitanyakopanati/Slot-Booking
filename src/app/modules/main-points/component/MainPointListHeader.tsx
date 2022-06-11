import MainPointTypeHeader from "../Complaintlist/Table/MainPointTypeHeader"

const MainPointListHeader = () =>{
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <MainPointTypeHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export default MainPointListHeader
