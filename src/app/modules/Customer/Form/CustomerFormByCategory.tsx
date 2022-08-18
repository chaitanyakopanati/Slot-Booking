import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useNavigate, useParams} from 'react-router-dom'
import {isNotEmpty} from '../../../../_metronic/helpers'
import {ListPageData} from '../CustomerContext'
import {GetCustomerById} from '../helperCustomer/ApiDataRequest'
import CustomerFormModal from './CustomerFormModal'

const CustomerFormByCategory = () => {
  let {id} = useParams()
  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()

  useEffect(() => {
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else {
      setItemIdForUpdate(id)
    }
  }, [])

  const navigate = useNavigate()
  const enabledQuery: boolean = isNotEmpty(id)
  const {data: customer, error} = useQuery(
    `GetUserbyId-${id}`,
    async () => {
      let data = await GetCustomerById(id)
      if (data.length === 0) {
        navigate('/customers')
        return
      }
      return data
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && id !== 'new',
      onError: (err) => {
        console.log('err', err)
      },
    }
  )
  if (id === 'new' || !customer) {
    return <CustomerFormModal customerById={{ID: undefined}} />
  }
  if (!error && customer) {
    return <CustomerFormModal customerById={customer} />
  }

  return null
}
export default CustomerFormByCategory
