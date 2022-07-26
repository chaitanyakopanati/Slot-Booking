import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../FormsContext'
import {isNotEmpty} from '../../../../../helpers'
import Inquiriesservice from '../helperForms/ApiDataRequest'
import FormsFormModal from './FormsFormModal'

const FormsFormByCategory = () => {
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
    `GetFormById-${itemIdForUpdate}`,
    () => {
      return Inquiriesservice.GetFormsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && (id !== 'add' || id !== undefined || id !== null),
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
  }, [category, itemIdForUpdate])

  {
    /* begin::Add-Form Model functionality */
  }
  if (itemIdForUpdate === 'add' || !itemIdForUpdate) {
    return <FormsFormModal category={{ID: undefined}} />
  }

  if (!error && category) {
    return <FormsFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}

export default FormsFormByCategory
