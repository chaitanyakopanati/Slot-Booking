import PackagesTypeHeader from "../Complaintlist/Table/PackagesTypeHeader"


const PackagesListHeader = () => {
    return (
      <>
           {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <PackagesTypeHeader />
        </div>
      </div>
      {/* end::header */}
      </>
    )
  }
  export default PackagesListHeader