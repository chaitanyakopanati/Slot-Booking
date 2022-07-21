import React, {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import OfficeOldStockOutwardsFormHeader from '../Component/OfficeoldStockOutwardsFormHeader'
import { ListDataProvider, ListPageData } from '../OfficeOldStockOutwardsContext'
import OfficeOldStockOutwardsFormByCategory from './OfficeOldStockOutwardsFormByCategory'

function OfficeOldStockOutwardsForm() {
  const {DataGetAllTypeZone, DataGetAllTypeProduct,DataGetAllTypeTechnician} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
    DataGetAllTypeTechnician()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <OfficeOldStockOutwardsFormHeader />
        <OfficeOldStockOutwardsFormByCategory />
      </KTCard>
    </div>
  )
}

let OfficeOldStockOutwardsFormWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeOldStockOutwardsForm />
    </ListDataProvider>
  )
}

export default OfficeOldStockOutwardsFormWrapper
