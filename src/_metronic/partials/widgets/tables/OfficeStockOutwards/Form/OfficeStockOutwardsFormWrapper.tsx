import React, {useEffect} from 'react'
import {KTCard} from '../../../../../helpers'
import OfficeStockOutwardsFormHeader from '../Component/OfficeStockOutwardsFormHeader'
import {ListDataProvider, ListPageData} from '../OfficeStockOutwardsContext'
import OfficeStockOutwardsFormByCategory from './OfficeStockOutwardsFormByCategory'

function OfficeStockOutwardsForm() {
  const {DataGetAllTypeZone, DataGetAllTypeProduct, DataGetAllTypeTechnician} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
    DataGetAllTypeTechnician()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <OfficeStockOutwardsFormHeader />
        <OfficeStockOutwardsFormByCategory />
      </KTCard>
    </div>
  )
}

let OfficeStockOutwardsFormWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeStockOutwardsForm />
    </ListDataProvider>
  )
}

export default OfficeStockOutwardsFormWrapper
