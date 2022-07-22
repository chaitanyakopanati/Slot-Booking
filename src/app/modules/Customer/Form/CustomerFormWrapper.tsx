import {useEffect} from 'react'
import {KTCard} from '../../../../_metronic/helpers'
import CustomerFormHeader from '../component/CustomerFormHeader'
import {CustomerContext, ListPageData} from '../CustomerContext'
import CustomerFormByCategory from './CustomerFormByCategory'

function CustomerForm() {
  let {fetchZone} = ListPageData()

  useEffect(() => {
    fetchZone()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <CustomerFormHeader />
        <CustomerFormByCategory />
      </KTCard>
    </div>
  )
}

let CustomerFormWrapper = () => {
  return (
    <CustomerContext>
      <CustomerForm />
    </CustomerContext>
  )
}

export default CustomerFormWrapper
