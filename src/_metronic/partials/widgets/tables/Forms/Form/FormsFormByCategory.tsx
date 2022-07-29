import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ListPageData} from '../FormsContext'
import {isNotEmpty} from '../../../../../helpers'
import Inquiriesservice from '../helperForms/ApiDataRequest'
import FormsFormModal from './FormsFormModal'

const FormsFormByCategory = () => {
  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()

  let {id} = useParams()
  const username: any = id?.split('&')[0]
  const userId: any = id?.split('&')[1]

  useEffect(() => {
    if (id == 'add') {
      setItemIdForUpdate(id)
    } else if (username && userId) {
      setItemIdForUpdate('add')
    } else {
      setItemIdForUpdate(id)
    }
  }, [id])

  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  const {data: category, error} = useQuery(
    `GetOfficeStockOutwardsById-${itemIdForUpdate}`,
    () => {
      return Inquiriesservice.GetFormsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery && id !== 'add' && id !== `${username}&${userId}`,
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )

  {
  }

  if (itemIdForUpdate == 'add' && username && userId) {
    return <FormsFormModal category={{data: {ID: undefined, userName: username, userid: userId}}} />
  }
  if (itemIdForUpdate === 'add') {
    return <FormsFormModal category={{data: {ID: undefined}}} />
  } else {
    return <FormsFormModal category={category} />
  }

  // return null
}

export default FormsFormByCategory
