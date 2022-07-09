import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { isNotEmpty } from '../../../../../helpers'
import { ListPageData } from '../OfficeStockInwardsContext'
import Inquiriesservice from '../helperOfficeStockInwards/ApiDataRequest'
import OfficeStockInwardsFormModal from './OfficeStockInwardsFormModal'


const OfficeStockInwardsFormByCategory = () => {
  let {id} = useParams()

  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  useEffect(() => {
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else {
      setItemIdForUpdate(id)
    }
  }, [id])




  const {data: category, error} = useQuery(
    `GetInquiry-${itemIdForUpdate}`,
    () => {
      return Inquiriesservice.GetInquiriesTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && (id !== 'add' || id !== undefined || id !== null  ),
      onError: (err) => {
        setItemIdForUpdate(undefined)
        
      },
    }
  )
  {
    /* end:: Api call GetUserTypeById */
  }

  useEffect(() => {
    
    console.log('itemIdForUpdate****', itemIdForUpdate)
  }, [category,itemIdForUpdate])

  {
    /* begin::Add-Form Model functionality */
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <OfficeStockInwardsFormModal category={{ID: undefined}} />
  }


  if (!error && category) {
    return <OfficeStockInwardsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default OfficeStockInwardsFormByCategory
