import FaultsTypeHeader from "../Complaintlist/Table/FaultsTypeHeader"

const FaultsListHeader = () =>{
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <FaultsTypeHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export default FaultsListHeader