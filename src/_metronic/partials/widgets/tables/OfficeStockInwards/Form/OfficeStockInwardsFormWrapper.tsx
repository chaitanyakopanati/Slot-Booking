import {useEffect} from 'react'
import {KTCard} from '../../../../../helpers'
import OfficeStockInwardsFormHeader from '../Component/OfficeStockInwardsFormHeader'
import {ListDataProvider, ListPageData} from '../OfficeStockInwardsContext'
import OfficeStockInwardsFormByCategory from './OfficeStockInwardsFormByCategory'

const OfficeStockinwardsForm = () => {
  const {DataGetAllTypeZone, DataGetAllTypeProduct, DataGetAllTypeDeliveredByTypes} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
    DataGetAllTypeDeliveredByTypes()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <OfficeStockInwardsFormHeader />
        <OfficeStockInwardsFormByCategory />
      </KTCard>
    </div>
  )
}

let OfficeStockInwardsFormWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeStockinwardsForm />
    </ListDataProvider>
  )
}
export default OfficeStockInwardsFormWrapper
