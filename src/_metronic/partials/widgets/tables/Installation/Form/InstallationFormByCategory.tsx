import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {isNotEmpty} from '../../../../../helpers'
import {ListPageData} from '../InstallationContext'
import InstallationFormModal from './InstallationFormModal'
import InstallationsService from '../helperInstallation/ApiDatarequest'

const InstallationFormByCategory = () => {
  let {id} = useParams()
  const username: any = id?.split('&')[0]
  const userId: any = id?.split('&')[1]

  const {setItemIdForUpdate, itemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  useEffect(() => {
    if (id === 'add') {
      setItemIdForUpdate(id)
    } else if (username && userId) {
      setItemIdForUpdate('add')
    } else {
      setItemIdForUpdate(id)
    }
  }, [])
  const {data: category, error} = useQuery(
    `GetInstallationById-${itemIdForUpdate}`,
    () => {
      return InstallationsService.GetInstallationsTypeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled:
        enabledQuery &&
        (id !== 'add' || id !== undefined || id !== null) &&
        id !== `${username}&${userId}`,
      onError: (err) => {
        setItemIdForUpdate(undefined)
      },
    }
  )
  {
    /* end:: Api call GetUserTypeById */
  }

  {
    /* begin::Add-Form Model functionality */
  }

  if (itemIdForUpdate == 'add' && username && userId) {
    return (
      <InstallationFormModal
        category={{data: {ID: undefined, userName: username, userid: userId}}}
      />
    )
  }
  if (itemIdForUpdate == 'add') {
    return <InstallationFormModal category={{data: {ID: undefined}}} />
  } else {
    return <InstallationFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  // return null
}
export default InstallationFormByCategory
