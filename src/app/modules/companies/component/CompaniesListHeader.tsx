import CompaniesTypeHeader from "../Complaintlist/Table/CompaniesTypeHeader"


const CompaniesListHeader = () => {
    return (
      <>
           {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <CompaniesTypeHeader />
        </div>
      </div>
      {/* end::header */}
      </>
    )
  }
  export default CompaniesListHeader