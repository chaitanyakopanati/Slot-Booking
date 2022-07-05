import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { ListPageData } from '../InquiriesContext'
import { isNotEmpty } from '../../../../../helpers'
import Inquiriesservice from '../helperInquiries/ApiDataRequest'
import InquiriesFormModal from './InquiriesFormModal'

const InquiriesFormByCategory = () => {
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
    return <InquiriesFormModal category={{ID: undefined}} />
  }


  if (!error && category) {
    return <InquiriesFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default InquiriesFormByCategory


