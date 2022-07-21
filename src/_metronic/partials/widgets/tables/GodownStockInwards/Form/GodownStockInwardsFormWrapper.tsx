import {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import GodownStockInwardsFormHeader from '../Component/GodownStockInwardsFormHeader'
import { ListDataProvider, ListPageData } from '../GodownStockInwardsContext'
import GodownStockInwardsFormByCategory from './GodownStockInwardsFormByCategory'

const GodownStockinwardsForm = () => {
  const {DataGetAllTypeZone,DataGetAllTypeProduct,DataGetAllTypeDeliveredByTypes} = ListPageData()
  useEffect(() => {
    DataGetAllTypeZone()
    DataGetAllTypeProduct()
    DataGetAllTypeDeliveredByTypes()
  }, [])

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <GodownStockInwardsFormHeader />
        <GodownStockInwardsFormByCategory />
      </KTCard>
    </div>
  )
}

let GodownStockInwardsFormWrapper = () => {
  return (
    <ListDataProvider>
      <GodownStockinwardsForm />
    </ListDataProvider>
  )
}


export default GodownStockInwardsFormWrapper
