import {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import OfficeOldStockInwardsFormHeader from '../Component/OfficeOldStockInwardsFormHeader'
import { ListDataProvider, ListPageData } from '../OfficeOldStockInwardsContext'
import OfficeOldStockInwardsFormByCategory from './OfficeOldStockInwardsFormByCategory'

const OfficeOldStockinwardsForm = () => {
  const {DataGetAllTypeZone,DataGetAllTypeProduct,DataGetAllTypeDeliveredByTypes} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
    DataGetAllTypeDeliveredByTypes()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <OfficeOldStockInwardsFormHeader />
        <OfficeOldStockInwardsFormByCategory />
      </KTCard>
    </div>
  )
}

let OfficeOldStockInwardsFormWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeOldStockinwardsForm />
    </ListDataProvider>
  )
}
export default OfficeOldStockInwardsFormWrapper
