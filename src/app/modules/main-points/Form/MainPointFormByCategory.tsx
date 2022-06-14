// import { useQuery } from 'react-query'
// import { useEffect } from 'react'
// import { isNotEmpty } from '../../../../_metronic/helpers'
// import MainPointservice from '../helperMainPoint/ApiDatarequestMainPoint'
// import { ListPageData } from '../MainPointContext'
// import MainPointFormModal from './MainPointFormModal'

// const MainPointFormModalWrapper = () =>{
//     const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
//     const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

//      {/* begin:: getbyid pass */}
//     const {
//       data: category,
//       error,
//     } = useQuery(
//       `GetMainPointById-${itemIdForUpdate}`,
//       () => {
//         return MainPointservice.GetMainPointTypeById(itemIdForUpdate)
//       },
//       {
//         cacheTime: 0,
//         enabled: enabledQuery,
//         onError: (err) => {
//           setItemIdForUpdate(undefined)
//           console.error(err)
//         },
//       }
//     )

//     useEffect(() => {
//     console.log("category",category)
//     console.log("itemIdForUpdate",itemIdForUpdate)
//     }, [category])

//      {/* begin::form model functionality */}
//     if (!itemIdForUpdate) {
//       return <MainPointFormModal  category={{ID: undefined}} />
//     }

//     if ( !error && category) {
//       return <MainPointFormModal  category={category} />
//     }

//     return null
// }
//   export default MainPointFormModalWrapper

import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {isNotEmpty} from '../../../../_metronic/helpers'
import MainPointservice from '../helperMainPoint/ApiDatarequest'
import {ListPageData} from '../MainPointContext'
import MainPointFormModal from './MainPointFormModal'

const MainPointFormByCategory = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  {
    /* begin:: Api call GetMainPointById */
  }
  const {data: category, error} = useQuery(
    `GetMainPointById-${itemIdForUpdate}`,
    () => {
      return MainPointservice.GetMainPointById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )
  {
    /* end:: Api call GetMainPointById */
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  {
    /* begin::Add-Form Model functionality */
  }
  if (!itemIdForUpdate) {
    return <MainPointFormModal category={{ID: undefined}} />
  }
  {
    /* end::Add-Form Model functionality */
  }

  {
    /* begin::Edit-Form Model functionality */
  }
  if (!error && category) {
    return <MainPointFormModal category={category} />
  }
  {
    /* end::Edit-Form Model functionality */
  }

  return null
}
export default MainPointFormByCategory
