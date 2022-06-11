import BankTypeHeader from "../Complaintlist/Table/BankTypeHeader"


const CompaniesListHeader = () => {
    return (
      <>
           {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <BankTypeHeader />
        </div>
      </div>
      {/* end::header */}
      </>
    )
  }
  export default CompaniesListHeader