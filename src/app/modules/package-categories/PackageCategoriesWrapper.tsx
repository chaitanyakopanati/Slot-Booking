import { KTCard } from "../../../_metronic/helpers"
import PackagescategoriesFooter from "./Complaintlist/Table/PackagescategoriesFooter"
import PackagescategoriesTable from "./Complaintlist/Table/PackagescategoriesTable"
import PackagesCategoriesTypeHeader from "./Complaintlist/Table/PackagesCategoriesTypeHeader"
import ViewPackagesCategories from "./Complaintlist/Table/ViewPackagesCategories"
import PackagescategoriesFormWrapper from "./Form/PackagescategoriesFormWrapper"
import { ListDataProvider, ListPageData } from "./PackagesCategoriesListContext"


const PackagesCategorieslist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <PackagesCategoriesTypeHeader /> {/* begin::  header functionlity */}
        <PackagescategoriesTable /> {/* begin::  Table */}
      </KTCard>
      <PackagescategoriesFooter /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <PackagescategoriesFormWrapper />}{' '}
      {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <ViewPackagesCategories category={viewIdForUpdate} />}{' '}
      {/* begin::  ViewComplaint*/}
    </div>
  )
}

function PackageCategoriesWrapper() {
  return (
    <ListDataProvider>
      <PackagesCategorieslist />
    </ListDataProvider>
  )
}

export default PackageCategoriesWrapper

