import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../_metronic/helpers'
import CustomerFormViewModal from '../Coustomerlist/Table/CustomerFormViewModal'
import {CustomerContext, ListPageData} from '../CustomerContext'
import {GetCustomerById} from '../helperCustomer/ApiDataRequest'

function CustomerView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

  const {data: userDetails, error} = useQuery(
    `ViewOfficeStockOutwardsById-${viewIdForUpdate}`,
    () => {
      return GetCustomerById(viewIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setViewIdForUpdate(undefined)
      },
    }
  )

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {userDetails && <CustomerFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

let CustomerViewWrapper = () => {
  return (
    <CustomerContext>
      <CustomerView />
    </CustomerContext>
  )
}

export default CustomerViewWrapper
