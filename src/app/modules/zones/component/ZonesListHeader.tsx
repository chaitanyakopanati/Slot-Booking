import ZonesTypeHeader from "../Complaintlist/Table/ZonesTypeHeader"


const ZonesListHeader = () => {
    return (
      <>
           {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <ZonesTypeHeader />
        </div>
      </div>
      {/* end::header */}
      </>
    )
  }
  export default ZonesListHeader