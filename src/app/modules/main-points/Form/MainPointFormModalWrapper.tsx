
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

import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { isNotEmpty } from '../../../../_metronic/helpers'
import MainPointservice from '../helperMainPoint/ApiDatarequestMainPoint'
import { ListPageData } from '../MainPointContext'
import MainPointFormModal from './MainPointFormModal'


const MainPointFormModalWrapper = () =>{
    const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  
     {/* begin:: getbyid pass */}
    const {
      data: category,
      error,
    } = useQuery(
      `GetMainPointById-${itemIdForUpdate}`,
      () => {
        return MainPointservice.GetFaultsTypeById(itemIdForUpdate)
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
  
    useEffect(() => {
    console.log("category",category)
    console.log("itemIdForUpdate",itemIdForUpdate)
    }, [category])
  
     {/* begin::form model functionality */}
    if (!itemIdForUpdate) {
      return <MainPointFormModal  category={{ID: undefined}} />
    }
  
    if ( !error && category) {
      return <MainPointFormModal  category={category} />
    }
  
    return null
}
export default MainPointFormModalWrapper