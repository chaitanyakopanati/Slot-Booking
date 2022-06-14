import PackagesCategoriesTypeHeader from "../../Complaintlist/Table/PackagesCategoriesTypeHeader"

const PackagescategoriesListHeader = () => {
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <PackagesCategoriesTypeHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export {PackagescategoriesListHeader}
