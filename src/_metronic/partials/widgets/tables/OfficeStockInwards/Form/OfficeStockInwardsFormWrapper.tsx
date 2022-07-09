import React, {useEffect} from 'react'
import { KTCard } from '../../../../../helpers'
import OfficeStockInwardsFormHeader from '../Component/OfficeStockInwardsFormHeader'
import { ListDataProvider, ListPageData } from '../OfficeStockInwardsContext'
import OfficeStockInwardsFormByCategory from './OfficeStockInwardsFormByCategory'


function OfficeStockInwardsForm() {
  const {DataGetAllTypeStatus,DataGetAllTypeSalesExecutveUserByRole} = ListPageData()


 useEffect(() => {
  DataGetAllTypeStatus()
  DataGetAllTypeSalesExecutveUserByRole()
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
      <OfficeStockInwardsForm />
    </ListDataProvider>
  )
}


export default OfficeStockInwardsFormWrapper