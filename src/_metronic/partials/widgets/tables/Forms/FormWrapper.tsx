import {KTCard} from '../../../../helpers'
import FormsFormViewModal from './FormList/Table/FormsFormViewModal'
import FormsHeader from './FormList/Table/FormsHeader'
import FormsPagination from './FormList/Table/FormsPagination'
import FormsTable from './FormList/Table/FormsTable'
import {ListDataProvider, ListPageData} from './FormsContext'

const Formlist = () => {
  const {viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: User Header Component */}
        <FormsHeader category={FormsHeader} />
        {/* end:: User Header Component */}

        {/* begin:: User Table Component */}
        <FormsTable />
        {/* end:: User Table Component */}
      </KTCard>
      {/* begin:: User Table-Pagination Component */}
      <FormsPagination />
      {/* begin:: User View Form Component */}
      {viewIdForUpdate && <FormsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: User View Form Component */}
    </div>
  )
}

function FormWrapper() {
  return (
    <ListDataProvider>
      <Formlist />
    </ListDataProvider>
  )
}

export default FormWrapper
